import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { OPTIONS } from '~/components/AddItemModal/SourceTypeStep/constants'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'
import ClearIcon from '~/components/Icons/ClearIcon'
import { FormData } from '~/components/ModalsContainer/BlueprintModal/Body/Editor'
import { StyledIconButton } from '~/components/SourcesTableModal/SourcesView/constants'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'

type Props = {
  onSelect: (type: string) => void
  selectedValue: string
  dataTestId?: string
}

const defaultValues = {
  type: '',
  parent: '',
}

export const ToNode: FC<Props> = ({ onSelect, selectedValue, dataTestId }) => {
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

  const handleClear = () => {
    setValue('parent', '')
    onSelect('')
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
            schema?.type === 'thing'
              ? { label: 'No Parent', value: schema.type }
              : {
                  label: capitalizeFirstLetter(schema.type),
                  value: schema.type,
                },
          )

        setOptions(schemaOptions)
      } catch (error) {
        console.warn(error)
      } finally {
        setOptionsIsLoading(false)
      }
    }

    init()
  }, [])

  const parent = watch('parent')

  const resolvedParentValue = () => options?.find((i) => i.value === parent)

  return selectedValue ? (
    <Flex align="center" basis="100%" direction="row" grow={1} shrink={1}>
      <span>{selectedValue}</span>
      <StyledIconButton onClick={handleClear} size="medium">
        <ClearIcon />
      </StyledIconButton>
    </Flex>
  ) : (
    <AutoComplete
      dataTestId={dataTestId}
      isLoading={optionsIsLoading}
      onSelect={handleSelect}
      options={options || OPTIONS}
      selectedValue={resolvedParentValue()}
    />
  )
}
