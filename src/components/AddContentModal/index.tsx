import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal } from '~/components/Modal'
import {
  DOCUMENT,
  LINK,
  NODE_ADD_ERROR,
  RSS,
  TWITTER_HANDLE,
  TWITTER_SOURCE,
  WEB_PAGE,
  YOUTUBE_CHANNEL,
  isE2E,
} from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { sphinxBridge } from '~/testSphinxBridge'
import { SubmitErrRes } from '~/types'
import { getLSat, payLsat, updateBudget } from '~/utils'
import { SuccessNotify } from '../common/SuccessToast'
import { BudgetStep } from './BudgetStep'
import { LocationStep } from './LocationStep'
import ProcessSteping from './ProcessingStep'
import { SourceStep } from './SourceStep'
import { validateSourceURL } from './SourceStep/utils'
import { SourceTypeStep } from './SourceTypeStep'
import { extractTweetId, getInputType, isSource, twitterHandlePattern } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

const getEndpoint = (sourceType: string) => (isSource(sourceType) ? 'radar' : 'add_node')

const buildRequestBody = (data: FieldValues, sourceType: string) => {
  const body: { [index: string]: unknown } = {}

  switch (sourceType) {
    case LINK:
      body.media_url = data.source
      body.content_type = 'audio_video'
      break
    case TWITTER_SOURCE:
      body.tweet_id = extractTweetId(data.source)
      body.content_type = 'tweet'
      break
    case WEB_PAGE:
      body.content_type = 'webpage'
      body.web_page = data.source
      break
    case DOCUMENT:
      body.content_type = 'document'
      body.text = data.source
      break

    case TWITTER_HANDLE: {
      const [, match] = (data.source || '').match(twitterHandlePattern) || []

      if (match) {
        body.source = match
        body.source_type = sourceType
      } else {
        return null
      }

      break
    }

    case YOUTUBE_CHANNEL:
    case RSS:
      body.source = data.source
      body.source_type = sourceType
      break

    default:
      break
  }

  if (data.latitude && data.longitude) {
    body.latitude = data.latitude
    body.longitude = data.longitude
  }

  return body
}

const submitFormWithLSat = async (data: FieldValues, sourceType: string, setBudget: (value: number | null) => void) => {
  const body = buildRequestBody(data, sourceType)

  if (!body) {
    return
  }

  const lsatToken = await getLSat()

  const enable = isE2E
    ? await sphinxBridge.enable()
    : await (sphinx as { enable: () => Promise<{ [k: string]: unknown }> }).enable()

  body.pubkey = enable?.pubkey

  try {
    const res: SubmitErrRes = await api.post(`/${getEndpoint(sourceType)}`, JSON.stringify(body), {
      Authorization: lsatToken,
    })

    if (res.error) {
      throw new Error(res.error.message)
    }
  } catch (err) {
    await handleSubmissionError(err as unknown as Response, data, sourceType, setBudget)
  }
}

const handleSubmissionError = async (
  err: Response,
  data: FieldValues,
  sourceType: string,
  setBudget: (value: number | null) => void,
) => {
  if (err.status === 402) {
    await payLsat(setBudget)
    await updateBudget(setBudget)
    await submitFormWithLSat(data, sourceType, setBudget)
  } else {
    throw new Error(await getErrorMessage(err))
  }
}

const getErrorMessage = async (err: Response): Promise<string> => {
  if (err.status === 400) {
    try {
      const errorRes = await err.json()

      return errorRes.message || errorRes.status || errorRes?.errorCode || NODE_ADD_ERROR
    } catch {
      return NODE_ADD_ERROR
    }
  } else if (err instanceof Error) {
    return err.message || NODE_ADD_ERROR
  }

  return NODE_ADD_ERROR
}

export const AddContentModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addContent')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  useEffect(
    () => () => {
      setError('')
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

  const onNextStep = () => setCurrentStep(currentStep + 1)
  const onPrevStep = () => setCurrentStep(currentStep - 1)

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true)

    try {
      await submitFormWithLSat(data, type, setBudget)
      SuccessNotify('Content Added')

      if (!isSource(type)) {
        setCurrentStep(3)
      }
    } catch (err) {
      const errorMessage = await getErrorMessage(err as unknown as Response)

      setError(errorMessage)
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
              {!isSource(type) ? (
                <LocationStep form={form} latitude={latitude} longitude={longitude} onNextStep={onNextStep} />
              ) : (
                <SourceTypeStep onNextStep={onNextStep} onPrevStep={onPrevStep} type={type} value={sourceValue} />
              )}
            </>
          )}
          {currentStep === 2 && <BudgetStep error={error} loading={loading} onClick={() => null} type={type} />}
          {currentStep === 3 && <ProcessSteping source={source} type={type} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
