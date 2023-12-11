import { Button } from '@mui/material'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { MdRestartAlt } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import { getRadarData, triggerRadarJob } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { FetchRadarResponse, Sources as TSources, SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { Heading, StyledPill } from '../common'
import { sourcesMapper } from '../constants'
import { Search } from './Search'
import Table from './Table'

export const Sources = () => {
  const [loading, setLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState('')
  const [sources, setSources] = useDataStore((s) => [s.sources, s.setSources])
  const [isAdmin, pubKey] = useUserStore((s) => [s.isAdmin, s.pubKey])
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

  const handleRunJob = async () => {
    try {
      const res: SubmitErrRes = await triggerRadarJob()

      if (res?.error) {
        toast(<ToastMessage message="An error happened" />, {
          icon: false,
          position: toast.POSITION.BOTTOM_CENTER,
          type: 'error',
        })

        return
      }

      toast(<ToastMessage message="Job started" />, {
        icon: false,
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'success',
      })
    } catch (error) {
      toast(<ToastMessage message="An error happened" />, {
        icon: false,
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'error',
      })
    }
  }

  const resolveAdminActions = () => {
    if (pubKey && isAdmin) {
      return (
        <RunButton endIcon={<MdRestartAlt color={colors.white} />} onClick={handleRunJob} size="small">
          Run
        </RunButton>
      )
    }

    return null
  }

  const tableValues = useMemo(
    () =>
      sources
        ?.filter(
          (val: TSources) =>
            (!typeFilter || val.source_type === typeFilter) &&
            (val.source.toLowerCase().startsWith(search.toLowerCase()) ||
              val.source.toLowerCase().includes(search.toLowerCase())),
        )
        .reverse(),
    [search, typeFilter, sources],
  )

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">Sources for this Graph</Text>
        {resolveAdminActions()}
      </Heading>
      <Search onSearch={setSearch} />
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

const RunButton = styled(Button)`
  margin-left: 8px;
`
