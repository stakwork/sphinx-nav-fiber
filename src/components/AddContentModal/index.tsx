import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal } from '~/components/Modal'
import {
  DOCUMENT,
  GITHUB_REPOSITORY,
  isE2E,
  LINK,
  NODE_ADD_ERROR,
  RSS,
  TWITTER_HANDLE,
  TWITTER_SOURCE,
  WEB_PAGE,
  YOUTUBE_CHANNEL,
} from '~/constants'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { sphinxBridge } from '~/testSphinxBridge'
import { SubmitErrRes } from '~/types'
import { getLSat, payLsat, updateBudget } from '~/utils'
import { SuccessNotify } from '../common/SuccessToast'
import { BudgetStep } from './BudgetStep'
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

const handleSubmitForm = async (
  data: FieldValues,
  sourceType: string,
  setBudget: (value: number | null) => void,
  setRunningProjectId: (value: string) => void,
): Promise<void> => {
  const endPoint = isSource(sourceType) ? 'radar' : 'add_node'

  const body: { [index: string]: unknown } = {}

  if (sourceType === LINK) {
    body.media_url = data.source
    body.content_type = 'audio_video'
  } else if (sourceType === TWITTER_SOURCE) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s

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
  } else if (sourceType === YOUTUBE_CHANNEL || sourceType === RSS || sourceType === GITHUB_REPOSITORY) {
    body.source = data.source
    body.source_type = sourceType
  }

  if (data.latitude && data.longitude) {
    body.latitude = data.latitude
    body.longitude = data.longitude
  }

  let lsatToken = ''

  let enable

  if (!isE2E) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    enable = await sphinx.enable()
  } else {
    enable = await sphinxBridge.enable()
  }

  body.pubkey = enable?.pubkey

  lsatToken = await getLSat()

  try {
    const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body), {
      Authorization: lsatToken,
    })

    await updateBudget(setBudget)

    if (res.data.project_id) {
      setRunningProjectId(res.data.project_id)
    }

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.status === 402) {
      await payLsat(setBudget)

      await handleSubmitForm(data, sourceType, setBudget, setRunningProjectId)
    } else {
      let errorMessage = NODE_ADD_ERROR

      if (err.status === 400) {
        try {
          const errorRes = await err.json()

          errorMessage = errorRes.message || errorRes.status || errorRes?.errorCode || NODE_ADD_ERROR
        } catch (parseError) {
          errorMessage = NODE_ADD_ERROR
        }
      } else if (err instanceof Error) {
        errorMessage = err.message || NODE_ADD_ERROR
      }

      throw new Error(errorMessage)
    }
  }
}

export const AddContentModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addContent')
  const { setBudget } = useUserStore((s) => s)
  const { setRunningProjectId } = useDataStore((s) => s)
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

  const source = watch('source')

  const isValidSource = validateSourceURL(sourceValue)

  useEffect(() => {
    const updateInputType = async () => {
      const inputType = await getInputType(source)

      setValue('inputType', inputType)
    }

    updateInputType()
  }, [source, setValue])

  const handleClose = () => {
    close()
  }

  const onNextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(isSource(type) ? 1 : 2)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true)

    try {
      await handleSubmitForm(data, type, setBudget, setRunningProjectId)
      SuccessNotify('Content Added')
      handleClose()
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = NODE_ADD_ERROR

      if (err?.status === 400) {
        const errorRes = await err.json()

        errorMessage = errorRes.errorCode || errorRes?.status || NODE_ADD_ERROR
      } else if (err instanceof Error) {
        errorMessage = err.message
      }

      setError(String(errorMessage))
    } finally {
      setLoading(false)
    }
  })

  return (
    <BaseModal id="addContent" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {currentStep === 0 && <SourceStep allowNextStep={isValidSource} onNextStep={onNextStep} type={type} />}
          {currentStep === 1 && isSource(type) && (
            <SourceTypeStep onNextStep={onNextStep} onPrevStep={onPrevStep} type={type} value={sourceValue} />
          )}
          {currentStep === 2 && <BudgetStep error={error} loading={loading} onClick={() => null} type={type} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
