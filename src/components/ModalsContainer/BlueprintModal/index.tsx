/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from 'react'
import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'

const defaultValues = {
  type: '',
  parent: '',
}

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

// eslint-disable-next-line no-underscore-dangle
const _BlueprintModal = () => {
  const { close } = useModal('blueprintGraph')

  const handleClose = () => {
    close()
  }

  return (
    <BaseModal background="black" id="blueprintGraph" kind="full" onClose={handleClose} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}

export const BlueprintModal = memo(_BlueprintModal)
