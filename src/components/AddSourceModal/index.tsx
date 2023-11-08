import { Lsat } from 'lsat-js'
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { BaseModal } from '~/components/Modal'
import { NODE_ADD_ERROR, NODE_ADD_SUCCESS, TWITTER_HANDLE } from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { getLSat, payLsat, updateBudget, executeIfProd } from '~/utils'
import { notify } from '~/components/common/Toast/toastMessage'
import { BudgetStep } from './BudgetStep'
import { SourceStep } from './SourceStep'
import { getInputType } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
}

const handleSubmitForm = async (
  data: FieldValues,
  close: () => void,
  sourceType: string,
  setBudget: (value: number | null) => void,
): Promise<void> => {
  const body: { [index: string]: unknown } = {}

  body.source_type = sourceType

  if (sourceType === TWITTER_HANDLE) {
    body.source = (data.source || '').replace(/[@]/g, '')
  } else {
    body.source = data.source
  }

  let lsatToken = ''

  // skipping this for end to end test because it requires a sphinx-relay to be connected
  await executeIfProd(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const enable = await sphinx.enable()

    body.pubkey = enable?.pubkey

    lsatToken = await getLSat()
  })

  try {
    const res: SubmitErrRes = await api.post(`/radar`, JSON.stringify(body), {
      Authorization: lsatToken,
    })

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }

    notify(NODE_ADD_SUCCESS)
    close()

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.status === 402) {
      const lsat = Lsat.fromHeader(err.headers.get('www-authenticate'))

      await payLsat(lsat)

      await updateBudget(setBudget)

      await handleSubmitForm(data, close, sourceType, setBudget)
    }

    if (err instanceof Error) {
      notify(NODE_ADD_ERROR)
      close()
    }
  }
}

export const AddSourceModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addSource')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form

  useEffect(
    () => () => {
      setCurrentStep(0)
      reset()
    },
    [visible, reset],
  )

  const type = watch('inputType')
  const sourceValue = watch('source')

  const source = watch('source')

  useEffect(() => {
    setValue('inputType', getInputType(source))
  }, [source, setValue])

  const handleClose = () => {
    close()
  }

  const onNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    await handleSubmitForm(data, handleClose, type, setBudget)
  })

  return (
    <BaseModal id="addSource" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {currentStep === 0 && <SourceStep onNextStep={onNextStep} value={sourceValue} />}
          {currentStep === 1 && <BudgetStep onClick={() => null} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
