import { useForm } from 'react-hook-form'
import { BaseModal, ModalKind } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import * as React from 'react'

import { Body } from '~/components/ModalsContainer/CreateBountyModal/Body'

export type FormData = {
  nodeType: string
  budget: string
} & Partial<{ [k: string]: string }>

export const CreateBountyModal = () => {
  const { close } = useModal('createBounty')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { setValue } = form

  const handleClose = () => {
    setValue('budget', '')
    setValue('nodeType', '')
    close()
  }

  const modalKind: ModalKind = 'small'

  return (
    <BaseModal id="createBounty" kind={modalKind} onClose={handleClose} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}
