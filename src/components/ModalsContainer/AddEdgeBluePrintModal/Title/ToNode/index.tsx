import { IconButton } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { OPTIONS } from '~/components/AddItemModal/SourceTypeStep/constants'
import ClearIcon from '~/components/Icons/ClearIcon'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { useForm } from 'react-hook-form'
import { FormData } from '~/components/ModalsContainer/BlueprintModal/Body/Editor'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'

type Props = {
  onSelect: (type: string) => void
  selectedValue: string
}

const defaultValues = {
  type: '',
  parent: '',
}

export const ToNode: FC<Props> = ({ onSelect, selectedValue }) => {
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
      <IconButton onClick={() => onSelect('')} size="small">
        <ClearIcon />
      </IconButton>
    </Flex>
  ) : (
    <AutoComplete
      isLoading={optionsIsLoading}
      onSelect={handleSelect}
      options={options || OPTIONS}
      selectedValue={resolvedParentValue()}
    />
  )
}
