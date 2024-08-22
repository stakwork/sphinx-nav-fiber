import { debounce } from 'lodash'
import { FC, useMemo, useState } from 'react'
import { OPTIONS } from '~/components/AddItemModal/SourceTypeStep/constants'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import { ALPHABETICALLY, StyledIconButton } from '~/components/SourcesTableModal/SourcesView/constants'
import { getEdges } from '~/network/fetchSourcesData'
import { FetchEdgesResponse, TEdge } from '~/types'

type Props = {
  topicId: string
  onSelect: (topic: TEdge | null) => void
  selectedValue: TEdge | null
  dataId: string
}

export const ToNode: FC<Props> = ({ topicId, onSelect, selectedValue, dataId }) => {
  const [options, setOptions] = useState<TEdge[]>([])
  const [optionsIsLoading, setOptionsIsLoading] = useState(false)

  const debouncedSearch = useMemo(() => {
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

        const filteredData = responseData.data.filter((item) => item?.ref_id !== topicId)

        setOptions(filteredData)
      } catch (error) {
        setOptions([])
      } finally {
        setOptionsIsLoading(false)
      }
    }

    return debounce(handleSearch, 300)
  }, [topicId])

  const handleChange = (e: string) => {
    const inputValue = e.trim()

    if (!inputValue) {
      setOptions([])

      return
    }

    if (inputValue.length > 2) {
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
      <StyledIconButton onClick={() => onSelect(null)} size="medium">
        <ClearIcon />
      </StyledIconButton>
    </Flex>
  ) : (
    <AutoComplete
      dataId={dataId}
      handleInputChange={handleChange}
      isLoading={optionsIsLoading}
      onSelect={handleSelect}
      options={resolveOptions(options) || OPTIONS}
      selectedValue={selectedValue ? resolveOption(selectedValue) : null}
    />
  )
}
