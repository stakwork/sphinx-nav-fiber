/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseModal } from '~/components/Modal'
import { Schema } from '~/network/fetchSourcesData'
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

type Props = {
  onSchemaCreate: (schema: { type: string }) => void
  selectedSchema: Schema | null
  onDelete: (type: string) => void
  onClose: () => void
}

export const AddTypeModal = ({ onSchemaCreate, selectedSchema, onDelete, onClose }: Props) => {
  const { close } = useModal('blueprintGraph')

  const handleClose = () => {
    close()
    onClose()
  }

  return (
    <BaseModal id="addType" kind="regular" onClose={handleClose} preventOutsideClose>
      <Body onDelete={onDelete} onSchemaCreate={onSchemaCreate} selectedSchema={selectedSchema} />
    </BaseModal>
  )
}
