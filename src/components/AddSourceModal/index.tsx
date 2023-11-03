import { Lsat } from 'lsat-js'
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { MdCheckCircle, MdWarning } from 'react-icons/md'
import { toast } from 'react-toastify'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { BaseModal } from '~/components/Modal'
import {
  DOCUMENT,
  GITHUB_REPOSITORY,
  NODE_ADD_ERROR,
  NODE_ADD_SUCCESS,
  RSS,
  TOPIC,
  TWITTER_HANDLE,
  YOUTUBE_CHANNEL,
} from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { getLSat } from '~/utils/getLSat'
import { payLsat } from '~/utils/payLsat'
import { updateBudget } from '~/utils/setBudget'
import { executeIfProd } from '~/utils/tests'
import { ToastMessage } from '../common/Toast/toastMessage'
import { BudgetStep } from './BudgetStep'
import { SourceStep } from './SourceStep'

const twitterHandlePattern = /@(\w+)/g
const youtubeChannelPattern = /https?:\/\/(www\.)?youtube\.com\/(@)?([\w-]+)/i
const githubRepoPattern = /https?:\/\/github\.com\/([\w-]+)\/([\w-]+)/i
const genericUrlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

export type FormData = {
  input: string
  inputType: string
  source: string
}

const notify = (message: string) => {
  toast(<ToastMessage message={message} />, {
    icon:
      message === NODE_ADD_SUCCESS ? (
        <MdCheckCircle color={colors.primaryGreen} />
      ) : (
        <MdWarning color={colors.primaryRed} />
      ),
    position: toast.POSITION.BOTTOM_CENTER,
    type: message === NODE_ADD_SUCCESS ? 'success' : 'error',
  })
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
    let inputType = DOCUMENT

    if (youtubeChannelPattern.test(source)) {
      inputType = YOUTUBE_CHANNEL
    } else if (twitterHandlePattern.test(source)) {
      inputType = TWITTER_HANDLE
    } else if (githubRepoPattern.test(source)) {
      inputType = GITHUB_REPOSITORY
    } else if (genericUrlRegex.test(source)) {
      inputType = RSS
    } else {
      inputType = TOPIC
    }

    setValue('inputType', inputType)
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
