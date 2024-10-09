import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { OPTIONS } from '~/components/AddItemModal/SourceTypeStep/constants'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'
import { FormData } from '~/components/ModalsContainer/BlueprintModal/Body/Editor'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { colors } from '~/utils'

type Props = {
  onSelect: (type: string) => void
  dataTestId?: string
  hideSelectAll?: boolean
  edgeLink?: string
  placeholder?: string
}

const defaultValues = {
  type: '',
  parent: '',
}

export const ToNode: FC<Props> = ({ onSelect, dataTestId, edgeLink, hideSelectAll, placeholder }) => {
  const form = useForm<FormData>({
    mode: 'onChange',
    defaultValues,
  })

  const { watch, setValue } = form

  const [options, setOptions] = useState<TOption[]>([])
  const [optionsIsLoading, setOptionsIsLoading] = useState(false)

  const handleSelect = (val: TAutocompleteOption | null) => {
    setValue('parent', val?.value || '')
    onSelect(val?.value as string)
  }

  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

  useEffect(() => {
    const init = async () => {
      setOptionsIsLoading(true)

      try {
        const data = await getNodeSchemaTypes()

        const schemaOptions = data.schemas
          .filter((schema) => !schema.is_deleted && schema.type)
          .map((schema) =>
            schema.type === 'thing'
              ? { label: 'No Parent', value: schema.type }
              : {
                  label: capitalizeFirstLetter(schema.type),
                  value: schema.type,
                },
          )
          .filter((option, index, self) => index === self.findIndex((o) => o.value === option.value))

        const allOption = { label: 'Select all', value: 'all' }

        setOptions(hideSelectAll ? schemaOptions : [allOption, ...schemaOptions])

        if (edgeLink) {
          setValue('parent', edgeLink)
        }
      } catch (error) {
        console.warn(error)
      } finally {
        setOptionsIsLoading(false)
      }
    }

    init()
  }, [edgeLink, setValue, hideSelectAll])

  const parent = watch('parent')

  const resolvedParentValue = (): TAutocompleteOption | undefined => {
    const option = options?.find((i) => i.value === parent)

    if (option) {
      return option
    }

    if (edgeLink) {
      return { label: edgeLink, value: edgeLink }
    }

    return undefined
  }

  return (
    <StyledAutoComplete
      dataTestId={dataTestId}
      disabled={!!edgeLink}
      isLoading={optionsIsLoading}
      onSelect={handleSelect}
      options={options || OPTIONS}
      placeholder={placeholder}
      selectedValue={resolvedParentValue()}
    />
  )
}

const StyledAutoComplete = styled(AutoComplete)`
  .MuiInputBase-input {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${colors.white};
    padding-right: -8px;

    &::placeholder {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: left;
      color: ${colors.GRAY7};
      opacity: 1;
    }
  }

  && .MuiInput-input.MuiInputBase-input {
    padding-left: 0;
  }
`
