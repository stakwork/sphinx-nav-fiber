import { parsedObjProps } from '~/components/ModalsContainer/BlueprintModal/Body/Editor/utils'

export const capitalizeString = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)
export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ')

export const sortAttributesByRequired = (attributes: parsedObjProps[] | undefined) =>
  attributes ? [...attributes].sort((a, b) => Number(b.required) - Number(a.required)) : []
