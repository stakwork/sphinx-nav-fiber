import { useEffect, useState } from 'react'
import { MdRestartAlt } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Pill } from '~/components/common/Pill'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import { getRadarData, triggerRadarJob } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { FetchRadarResponse, SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { executeIfProd } from '~/utils/tests'
import { sourcesMapper } from '../constants'
import { TPill } from '../types'
import Table from './Table'

const admins = [
  '02c431e64078b10925584d64824c9d1d12eca05e2c56660ffa5ac84aa6946adfe5',
  '03a9a8d953fe747d0dd94dd3c567ddc58451101e987e2d2bf7a4d1e10a2c89ff38',
]

export const Sources = () => {
  const [loading, setLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState('')
  const { open, setAddNodeModalData } = useModal('addNode')
  const [sources, setSources] = useDataStore((s) => [s.sources, s.setSources])
  const [setIsAdmin, isAdmin, setPubKey, pubKey] = useUserStore((s) => [s.setIsAdmin, s.isAdmin, s.setPubKey, s.pubKey])

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

  const handleOpenModal = () => {
    open()
    setAddNodeModalData('source')
  }

  const authorize = async () => {
    // skipping this for end to end test because it requires a sphinx-relay to be connected
    await executeIfProd(async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const enable = await sphinx.enable()
        const pubKeyRes = enable?.pubkey

        setPubKey(pubKeyRes)

        if (pubKeyRes) {
          setIsAdmin(pubKeyRes && admins.includes(pubKeyRes))
        }
      } catch (error) {
        console.warn(error)
      }
    })
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
    if (!pubKey) {
      return (
        <EditButton kind="small" onClick={authorize}>
          Admin
        </EditButton>
      )
    }

    if (pubKey && isAdmin) {
      return (
        <RunButton endIcon={<MdRestartAlt color={colors.white} />} kind="small" onClick={handleRunJob}>
          Run
        </RunButton>
      )
    }

    return <Text>You are not admin</Text>
  }

  const tableValues = sources?.filter((val) => !typeFilter || val.source_type === typeFilter)

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">Sources for this Graph</Text>
        {resolveAdminActions()}
      </Heading>
      <Flex className="filters" direction="row" pb={16}>
        <StyledPill onClick={() => onFilterChange('')} selected={!typeFilter}>
          All
        </StyledPill>
        {Object.keys(sourcesMapper).map((key: string) => (
          <StyledPill key={key} onClick={() => onFilterChange(key)} selected={key === typeFilter}>
            {sourcesMapper[key]}
          </StyledPill>
        ))}
      </Flex>
      <TableWrapper align="center" justify="flex-start">
        {loading ? <ClipLoader /> : <Table canEdit={isAdmin} data={tableValues} />}
      </TableWrapper>
      <AddButton id="add-sources" kind="small" onClick={handleOpenModal}>
        Add +
      </AddButton>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  border-radius: 8px;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
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

const StyledPill = styled(Pill)<TPill>`
  cursor: pointer;
  font-size: 12px;
  padding: 4px 8px;
  background: ${(props) => (props.selected ? colors.white : 'transparent')};
  color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
  &:hover {
    color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
    background: ${(props) => (props.selected ? colors.white : 'transparent')};
    opacity: 0.8;
  }
`

const RunButton = styled(Button)`
  margin-left: 8px;
`

const EditButton = styled(Button)`
  margin-left: auto;
`

const AddButton = styled(Button)`
  margin-top: 8px;
`

const Heading = styled(Flex)`
  margin-bottom: 16px;
  ${Text} {
    margin-bottom: 0;
  }
`
