import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal } from '~/components/Modal'
import { notify } from '~/components/common/Toast/toastMessage'
import {
  DOCUMENT,
  LINK,
  NODE_ADD_ERROR,
  NODE_ADD_SUCCESS,
  RSS,
  TWITTER_HANDLE,
  TWITTER_SOURCE,
  WEB_PAGE,
  YOUTUBE_CHANNEL,
} from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { executeIfProd, getLSat, payLsat, updateBudget } from '~/utils'
import { BudgetStep } from './BudgetStep'
import { LocationStep } from './LocationStep'
import { SourceStep } from './SourceStep'
import { validateSourceURL } from './SourceStep/utils'
import { SourceTypeStep } from './SourceTypeStep'
import { getInputType, isSource, twitterHandlePattern } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

interface ApiResponse {
  status: number
  source?: string
  content?: string
}

interface ApiError {
  status: number
  message?: string
}

const handleSubmitForm = async (
  data: FieldValues,
  close: () => void,
  sourceType: string,
  setBudget: (value: number | null) => void,
): Promise<void> => {
  const endPoint = isSource(sourceType) ? 'radar' : 'add_node'

  const body: { [index: string]: unknown } = {}

  if (sourceType === LINK) {
    body.media_url = data.source
    body.content_type = 'audio_video'
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
  } else if (sourceType === TWITTER_HANDLE) {
    const [, match] = (data.source || '').match(twitterHandlePattern) || []

    if (match) {
      body.source = match
      body.source_type = sourceType
    } else {
      return
    }
  } else if (sourceType === YOUTUBE_CHANNEL || sourceType === RSS) {
    body.source = data.source
    body.source_type = sourceType
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

      await handleSubmitForm(data, close, sourceType, setBudget)
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

export const AddContentModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addContent')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [isSourceRes, setIsSourceRes] = useState(false)
  const [isContentRes, setIsContentRes] = useState(false)

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

  const isValidSource = validateSourceURL(sourceValue)

  useEffect(() => {
    setValue('inputType', getInputType(source))
  }, [source, setValue])

  const handleClose = () => {
    close()
  }

  const onNextStep = async () => {
    if (currentStep === 0) {
      try {
        const data = { source }

        const response = (await api.post('/validate_content', JSON.stringify(data))) as ApiResponse

        console.log('valid api data', response)

        if (response.status === 404 || response.status === 400) {
          notify('Please enter a valid URL')
          reset()

          return
        }

        if (response.source) {
          setIsSourceRes(true)
          setCurrentStep(currentStep + 1)
        }

        if (response.content) {
          setIsContentRes(true)
          setCurrentStep(currentStep + 1)
        }
      } catch (e) {
        const error = e as ApiError

        if (error.status === 404 || error.status === 400) {
          notify('Please enter a valid URL')
          reset()
        }
      }
    }
  }

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true)

    try {
      await handleSubmitForm(data, handleClose, type, setBudget)
    } catch {
      notify(NODE_ADD_ERROR)
    } finally {
      setLoading(false)
    }
  })

  return (
    <BaseModal id="addContent" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {currentStep === 0 && <SourceStep allowNextStep={isValidSource} onNextStep={onNextStep} type={type} />}
          {currentStep === 1 && (
            <>
              {isSourceRes && (
                <LocationStep form={form} latitude={latitude} longitude={longitude} onNextStep={onNextStep} />
              )}
              {isContentRes && (
                <SourceTypeStep onNextStep={onNextStep} onPrevStep={onPrevStep} type={type} value={sourceValue} />
              )}
            </>
          )}
          {currentStep === 2 && <BudgetStep loading={loading} onClick={() => null} type={type} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
