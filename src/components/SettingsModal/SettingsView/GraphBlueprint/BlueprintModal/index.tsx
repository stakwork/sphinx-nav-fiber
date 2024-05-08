/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
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

export const BlueprintModal = () => {
  const { close } = useModal('blueprintGraph')

  const handleClose = () => {
    close()
  }

  return (
    <BaseModal background={colors.black} id="blueprintGraph" kind="full" onClose={handleClose} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}
