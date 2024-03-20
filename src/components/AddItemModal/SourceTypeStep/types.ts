import { AddItemModalStepID } from '..'

export type Props = {
  skipToStep: (step: AddItemModalStepID) => void
  allowNextStep?: boolean
  onSelectType: (val: string) => void
  selectedType: string
}

export type TOption = {
  label: string
  value: string
  type?: string
  action?: () => void
}
