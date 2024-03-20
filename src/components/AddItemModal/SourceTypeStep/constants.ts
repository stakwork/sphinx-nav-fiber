import { TOption } from './types'

export const initialValue: TOption = {
  label: 'Not Selected',
  value: 'Not Selected',
}

export const createNewNodeType: TOption = {
  label: 'Create custom type',
  value: 'Create custom type',
  action: () => null,
}

export const NoParent: TOption = {
  label: 'No Parent',
  value: 'No Parent',
}

export const OPTIONS: TOption[] = [
  {
    label: 'Corporation',
    value: 'Corporation',
  },
  {
    label: 'Event',
    value: 'Event',
  },
  {
    label: 'Image',
    value: 'Image',
  },
  {
    label: 'Organization',
    value: 'Organization',
  },
  {
    label: 'Person',
    value: 'Person',
  },
  {
    label: 'Place',
    value: 'Place',
  },
  {
    label: 'Project',
    value: 'Project',
  },
  {
    label: 'Software',
    value: 'Software',
  },
  {
    label: 'Topic',
    value: 'Topic',
  },
]
