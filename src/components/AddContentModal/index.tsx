import { Lsat } from 'lsat-js'
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { MdCheckCircle, MdWarning } from 'react-icons/md'
import { toast } from 'react-toastify'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { BaseModal } from '~/components/Modal'
import { DOCUMENT, LINK, NODE_ADD_ERROR, NODE_ADD_SUCCESS, TWITTER_SOURCE, WEB_PAGE } from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { colors, getLSat, payLsat, updateBudget, executeIfProd } from '~/utils'
import { ToastMessage } from '../common/Toast/toastMessage'
import { BudgetStep } from './BudgetStep'
import { LocationStep } from './LocationStep'
import { SourceStep } from './SourceStep'
import { getInputType } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
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

  if (sourceType === LINK) {
    body.media_url = data.source

    body.content_type === 'audio_video'
  } else if (sourceType === TWITTER_SOURCE) {
    const regex = /(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s

    if (regex.test(data.source)) {
      const idRegex = /\/status\/(\d+)/

      const match = data.source.match(idRegex)

      if (match?.[1]) {
        const [, id] = match

        body.tweet_id = id
      }
    } else {
      body.tweet_id = data.source
    }

    body.content_type = 'tweet'
  } else if (sourceType === WEB_PAGE) {
    body.content_type = 'webpage'
    body.web_page = data.source
  } else if (sourceType === DOCUMENT) {
    body.content_type = 'document'
    body.text = data.source
  }

  if (data.latitude && data.longitude) {
    body.latitude = data.latitude
    body.longitude = data.longitude
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
    const res: SubmitErrRes = await api.post(`/add_node`, JSON.stringify(body), {
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

export const AddContentModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addContent')
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

  const longitude = watch('longitude')
  const latitude = watch('latitude')

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
    <BaseModal id="addContent" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {currentStep === 0 && <SourceStep onNextStep={onNextStep} type={type} value={sourceValue} />}
          {currentStep === 1 && (
            <LocationStep form={form} latitude={latitude} longitude={longitude} onNextStep={onNextStep} />
          )}
          {currentStep === 2 && <BudgetStep onClick={() => null} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
