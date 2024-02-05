import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal } from '~/components/Modal'
import { notify } from '~/components/common/Toast/toastMessage'
import { NODE_ADD_ERROR, NODE_ADD_SUCCESS } from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { executeIfProd, getLSat, payLsat, updateBudget } from '~/utils'
import { BudgetStep } from './BudgetStep'
import { SourceStep } from './SourceStep'
import { SourceTypeStep } from './SourceTypeStep'

export type FormData = {
  name: string
  nodeType: string
  sourceLink?: string
}

const handleSubmitForm = async (
  data: FieldValues,
  close: () => void,
  setBudget: (value: number | null) => void,
): Promise<void> => {
  const endPoint = 'node'

  const body: { [index: string]: unknown } = {}

  body.node_type = data.nodeType
  body.name = data.name

  if (data.nodeType === 'Image') {
    body.node_data = {
      source_link: data.sourceLink,
    }
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
    const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body), {
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
      await payLsat(setBudget)

      await updateBudget(setBudget)

      await handleSubmitForm(data, close, setBudget)
    }

    if (err.status === 400) {
      const error = await err.json()

      notify(error?.status || NODE_ADD_ERROR)
      close()
    }

    if (err instanceof Error) {
      notify(err.message || NODE_ADD_ERROR)
      close()
    }
  }
}

export const AddItemModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addItem')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)

  useEffect(
    () => () => {
      setCurrentStep(0)
      reset()
    },
    [visible, reset],
  )

  const nodeType = watch('nodeType')
  const name = watch('name')
  const sourceLink = watch('sourceLink')

  const handleClose = () => {
    close()
  }

  const onNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true)

    try {
      await handleSubmitForm(data, handleClose, setBudget)
    } catch {
      notify(NODE_ADD_ERROR)
    } finally {
      setLoading(false)
    }
  })

  const handleSelectType = (val: string) => setValue('nodeType', val)

  return (
    <BaseModal id="addItem" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {currentStep === 0 && (
            <SourceTypeStep
              allowNextStep={!!nodeType}
              onNextStep={onNextStep}
              onSelectType={handleSelectType}
              selectedType={nodeType}
            />
          )}
          {currentStep === 1 && (
            <SourceStep
              name={name}
              onNextStep={onNextStep}
              onPrevStep={onPrevStep}
              sourceLink={sourceLink || ''}
              type={nodeType}
            />
          )}
          {currentStep === 2 && <BudgetStep loading={loading} onClick={() => null} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
