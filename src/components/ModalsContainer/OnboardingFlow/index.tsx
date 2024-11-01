import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SuccessNotify } from '~/components/common/SuccessToast'
import { BaseModal } from '~/components/Modal'
import { NODE_ADD_ERROR } from '~/constants'
import { postAboutData, TAboutParams } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { GraphDetailsStep } from './GraphDetailsStep'

export type FormData = {
  title: string
  description: string
}

export const OnboardingModal = () => {
  const { close, visible } = useModal('onboardingFlow')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { reset } = form
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (!visible) {
      reset()
      setError('')
    }
  }, [visible, reset])

  const submitGraphDetails = async (
    data: TAboutParams,
    successCallback: () => void,
    onError: (error: string) => void,
  ) => {
    try {
      const res = (await postAboutData(data)) as Awaited<{ status: string }>

      if (res.status === 'success') {
        SuccessNotify('Graph details saved')
        successCallback()
      }
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = NODE_ADD_ERROR

      if (err?.status === 400) {
        const errorRes = await err.json()

        errorMessage = errorRes.errorCode || errorRes?.status || NODE_ADD_ERROR
      } else if (err instanceof Error) {
        errorMessage = err.message
      }

      onError(String(errorMessage))
    }
  }

  const onSubmit = form.handleSubmit(async (data) => {
    await submitGraphDetails(
      data,
      () => {
        close()
      },
      setError,
    )
  })

  return (
    <BaseModal id="onboardingFlow" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="onboardingFlow-form" onSubmit={onSubmit}>
          <GraphDetailsStep error={error} onSubmit={onSubmit} />
        </form>
      </FormProvider>
    </BaseModal>
  )
}
