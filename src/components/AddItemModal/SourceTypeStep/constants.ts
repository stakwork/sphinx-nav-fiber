import { TOption } from './types'

export const initialValue = {
  label: 'Not selected',
  value: '',
}

export const OPTIONS: TOption[] = [
  {
    label: 'Corporation',
    value: 'Corporation',
    type: 'Topic',
  },
  {
    label: 'Event',
    value: 'Event',
    type: 'Topic',
  },
  {
    label: 'Image',
    value: 'Image',
    type: 'Topic',
  },
  {
    label: 'Organization',
    value: 'Organization',
    type: 'Topic',
  },
  {
    label: 'Person',
    value: 'Person',
    type: 'Topic',
  },
  {
    label: 'Place',
    value: 'Place',
    type: 'Topic',
  },
  {
    label: 'Project',
    value: 'Project',
    type: 'blue',
  },
  {
    label: 'Software',
    value: 'Software',
    type: 'blue',
  },
  {
    label: 'Topic',
    value: 'Topic',
    type: 'blue',
  },
  initialValue,
]
