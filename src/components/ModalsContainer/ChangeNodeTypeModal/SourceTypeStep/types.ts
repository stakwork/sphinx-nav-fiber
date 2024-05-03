import { MapNodeTypeModalStepID } from '..'

export type Props = {
  skipToStep: (step: MapNodeTypeModalStepID) => void
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
