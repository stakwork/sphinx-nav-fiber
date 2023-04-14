import React, { useState } from 'react'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ConfirmPopover from '~/components/common/ConfirmPopover'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { approveRadarData, deleteRadarData, putRadarData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { RadarRequest, Sources } from '~/types'
import { colors } from '~/utils/colors'

const TWITTER_LINK = 'https://twitter.com'

type Props = {
  data: Sources[] | undefined
}

type TdProps = {
  width?: string
}

interface ISourceMap {
  [key: string]: string
}

const sourcesMapper: ISourceMap = {
  'Github repository': 'Github repository',
  'Youtube channel': 'Youtube channel',
  topic: 'Topic',
  twitter_handle: 'Twitter Handle',
}

const Table: React.FC<Props> = ({ data }) => {
  const setSources = useDataStore((s) => s.setSources)

  const [loadingId, setLoadingId] = useState('')

  const handleApprove = async (id: string) => {
    if (data?.length) {
      try {
        await approveRadarData(id)

        setSources(data.filter((i) => i.id !== id));
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleRemove = async (id: string) => {
    if (!id || !data?.length) {
      return
    }

    setLoadingId(id)

    try {
      await deleteRadarData(id)
      setSources(data?.filter((i) => i.id !== id))
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingId('')
    }
  }

  return !data?.length ? (
    <Text>There is not any results for selected filters</Text>
  ) : (
    <StyledTable>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Source</Th>
          <Th />
        </tr>
      </thead>
      {data?.length && (
        <tbody>
          {data?.map((i: Sources) => (
            <Tr key={i.source}>
              <Td>{sourcesMapper[i.source_type]}</Td>
              <Td width="268px">
                {i.source_type === 'twitter_handle' ? (
                  <StyledLink href={`${TWITTER_LINK}/${i.source}`} target="_blank">
                    @{i.source}
                  </StyledLink>
                ) : (
                  <div>{i.source}</div>
                )}
              </Td>

              <Td className="cell-center">
                <Flex direction="row">
                  <div className="approve-wrapper">
                    <IconWrapper className="centered" onClick={() => handleApprove(i.id)}>
                      <MdCheckCircle color={colors.primaryGreen} />
                    </IconWrapper>
                  </div>
                  <div className="delete-wrapper">
                    {loadingId === i.id ? (
                      <ClipLoader color={colors.white} />
                    ) : (
                      <ConfirmPopover message="Are you sure ?" onConfirm={() => handleRemove(i.id)}>
                        <IconWrapper className="centered">
                          <MdCancel color={colors.primaryRed} />
                        </IconWrapper>
                      </ConfirmPopover>
                    )}
                  </div>
                </Flex>
              </Td>
            </Tr>
          ))}
        </tbody>
      )}
    </StyledTable>
  )
}

export default Table

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: ${colors.white};
`

const Th = styled.th`
  border: 1px solid ${colors.white};
  padding: 8px;
`

const Tr = styled.tr`
  height: 40px;
`

const Td = styled.td<TdProps>`
  border: 1px solid ${colors.white};
  width: ${(props) => props.width || 'auto'};
  line-height: 28px;
  padding: 8px;
  &.cell-center {
    text-align: center;
    vertical-align: middle;
  }

  .delete-wrapper, .approve-wrapper {
    flex: 1;
  }
`

const IconWrapper = styled(Flex)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${colors.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  &:visited {
    color: ${colors.white};
  }
`
