export type Props = {
  onNextStep: () => void
  allowNextStep?: boolean
  onSelectType: (val: string) => void
  selectedType: string
}

export type TOption = {
  label: string
  value: string
  type?: string
}
