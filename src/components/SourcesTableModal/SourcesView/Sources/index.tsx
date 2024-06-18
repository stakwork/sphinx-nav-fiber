import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getRadarData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { FetchRadarResponse, Sources as TSources } from '~/types'
import { colors } from '~/utils/colors'
import { Heading, StyledPill } from '../common'
import { sourcesMapper } from '../constants'
import Search from '~/components/SourcesTableModal/SourcesView/common/search'
import Table from './Table'

export const Sources = () => {
  const [loading, setLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState('')
  const [sources, setSources] = useDataStore((s) => [s.sources, s.setSources])
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const data: FetchRadarResponse = await getRadarData()

        setSources(data.data)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [setSources])

  const onFilterChange = (val: string) => {
    if (typeFilter === val || !val) {
      setTypeFilter('')
    } else {
      setTypeFilter(val)
    }
  }

  const tableValues = useMemo(
    () =>
      sources?.filter(
        (val: TSources) =>
          (!typeFilter || val.source_type === typeFilter) &&
          (val.source.toLowerCase().startsWith(search.toLowerCase()) ||
            val.source.toLowerCase().includes(search.toLowerCase()) ||
            `@${val.source.toLowerCase()}`.startsWith(search.toLowerCase()) ||
            `@${val.source.toLowerCase()}`.includes(search.toLowerCase())),
      ),
    [search, typeFilter, sources],
  )

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">Sources for this Graph</Text>
      </Heading>
      <InputWrapper>
        <Search
          activeIcon={<ClearIcon />}
          defaultIcon={<SearchIcon />}
          loading={loading}
          loadingIcon={<ClipLoader color={colors.lightGray} size={24} />}
          onSearch={setSearch}
          placeholder="Find Source"
        />
      </InputWrapper>
      <Flex className="filters" direction="row" pb={16} px={36}>
        <StyledPill className={clsx({ selected: !typeFilter })} onClick={() => onFilterChange('')} size="small">
          All
        </StyledPill>
        {Object.keys(sourcesMapper).map((key: string) => (
          <StyledPill
            key={key}
            className={clsx({ selected: key === typeFilter })}
            onClick={() => onFilterChange(key)}
            size="small"
          >
            {sourcesMapper[key]}
          </StyledPill>
        ))}
      </Flex>
      <TableWrapper align="center" justify={loading ? 'center' : 'flex-start'}>
        {loading ? <ClipLoader color={colors.white} /> : <Table canEdit={isAdmin} data={tableValues} />}
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${colors.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`

const InputWrapper = styled(Flex)`
  margin: 0 0 16px 36px;
`
