import { IconButton } from '@mui/material'
import { debounce } from 'lodash'
import { FC, useMemo, useState } from 'react'
import { OPTIONS } from '~/components/AddItemModal/SourceTypeStep/constants'
import ClearIcon from '~/components/Icons/ClearIcon'
import { ALPHABETICALLY } from '~/components/SourcesTableModal/SourcesView/constants'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { getEdges } from '~/network/fetchSourcesData'
import { FetchEdgesResponse, TEdge } from '~/types'

type Props = {
  onSelect: (topic: TEdge | null) => void
  selectedValue: TEdge | null
}

export const ToNode: FC<Props> = ({ onSelect, selectedValue }) => {
  const [options, setOptions] = useState<TEdge[]>([])
  const [optionsIsLoading, setOptionsIsLoading] = useState(false)

  const handleSearch = async (val: string) => {
    const filters = {
      is_muted: 'False',
      sort_by: ALPHABETICALLY,
      search: val,
      skip: '0',
      limit: '1000',
    }

    setOptionsIsLoading(true)

    try {
      const responseData: FetchEdgesResponse = await getEdges(filters.search)

      setOptions(responseData.data)
    } catch (error) {
      setOptions([])
    } finally {
      setOptionsIsLoading(false)
    }
  }

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [])

  const handleChange = (e: string) => {
    if (!e) {
      setOptions([])

      return
    }

    if (e.length > 2) {
      debouncedSearch(e)
    }
  }

  const handleSelect = (val: TAutocompleteOption | null) => {
    const option = val ? options.find((i) => i.ref_id === val.value) : null

    onSelect(option || null)
  }

  const resolveOption = (i: TEdge) => ({ label: i.search_value, value: i.ref_id, type: i.node_type })

  const resolveOptions = (values: TEdge[]) => values.map(resolveOption)

  return selectedValue ? (
    <Flex align="center" basis="100%" direction="row" grow={1} shrink={1}>
      <span>{selectedValue.search_value}</span>
      <IconButton onClick={() => onSelect(null)} size="small">
        <ClearIcon />
      </IconButton>
    </Flex>
  ) : (
    <AutoComplete
      handleInputChange={handleChange}
      isLoading={optionsIsLoading}
      onSelect={handleSelect}
      options={resolveOptions(options) || OPTIONS}
      selectedValue={selectedValue ? resolveOption(selectedValue) : null}
    />
  )
}
