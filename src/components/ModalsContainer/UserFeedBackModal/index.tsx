import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { BaseModal } from '~/components/Modal'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { SuccessNotify } from '../../common/SuccessToast'
import { FeedBackStep } from './FeedBackStep'

export type FormData = {
  message: string
}

const handleSubmitForm = async (data: FieldValues): Promise<void> => {
  try {
    const res = (await api.post('/prediction/feedback', JSON.stringify(data))) as { error?: { message: string } }

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err.message || 'Error submitting feedback')
  }
}

export const UserFeedBackModal = () => {
  const { close, visible } = useModal('feedback')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, reset } = form
  const [error, setError] = useState<string>('')

  useEffect(
    () => () => {
      setError('')
      reset()
    },
    [visible, reset],
  )

  const message = watch('message')
  const isValidMessage = !!message && message.length > 0

  const handleClose = () => {
    close()
  }

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await handleSubmitForm(data)
      SuccessNotify('Feedback Submitted')
      handleClose()
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(String(err.message))
    }
  })

  return (
    <BaseModal id="feedback" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="feedback-form" onSubmit={onSubmit}>
          <FeedBackStep allowNextStep={isValidMessage} error={error} />
        </form>
      </FormProvider>
    </BaseModal>
  )
}
