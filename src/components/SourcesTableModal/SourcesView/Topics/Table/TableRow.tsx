import { IconButton } from '@mui/material'
import React, { FC, memo, useState } from 'react'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ThreeDotsIcons from '~/components/Icons/ThreeDotsIcons'
import { Flex } from '~/components/common/Flex'
import { putNodeData } from '~/network/fetchSourcesData'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableRow } from '../../common'

type TTableRaw = {
  topic: Topic
  onClick: (event: React.MouseEvent<HTMLButtonElement>, refId: string) => void
  onSearch: (search: string) => void
}

const TableRowComponent: FC<TTableRaw> = ({ topic, onClick, onSearch }) => {
  const [ids, total] = useTopicsStore((s) => [s.ids, s.total])
  const [loading, setLoading] = useState(false)

  const date = topic.date_added_to_graph.toString()

  const handleMute = async (refId: string, shouldMute: boolean) => {
    setLoading(true)

    try {
      await putNodeData(refId, { muted_topic: shouldMute })

      useTopicsStore.setState({
        ids: ids.filter((i) => i !== refId),
        total: total - 1,
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const handleClickTopic = (topicItem: Topic) => {
    onSearch(topicItem.topic)
  }

  return (
    <StyledTableRow key={topic.topic}>
      <StyledTableCell className="empty" />
      <StyledTableCell onClick={() => handleClickTopic(topic)}>
        <ClickableText>{topic.topic}</ClickableText>
      </StyledTableCell>
      <StyledTableCell>{topic.edgeCount}</StyledTableCell>
      <StyledTableCell>{topic.edgeList.join(', ')}</StyledTableCell>
      <StyledTableCell>
        <span>{new Date(Number(date) * 1000).toDateString()}</span>
      </StyledTableCell>

      <StyledTableCell className="cell-center">
        <Flex direction="row" justify="space-between">
          <div className="approve-wrapper">
            {loading ? (
              <ClipLoader color={colors.white} size={16} />
            ) : (
              <>
                {topic.muted_topic ? (
                  <IconWrapper className="centered" onClick={() => handleMute(topic.ref_id, false)}>
                    <MdCheckCircle color={colors.primaryGreen} fontSize={24} />
                  </IconWrapper>
                ) : (
                  <IconWrapper className="centered" onClick={() => handleMute(topic.ref_id, true)}>
                    <MdCancel color={colors.primaryRed} fontSize={24} />
                  </IconWrapper>
                )}
              </>
            )}
          </div>
        </Flex>
      </StyledTableCell>
      <StyledTableCell>
        <IconButton onClick={(e) => onClick(e, topic.ref_id)}>
          <ThreeDotsIcons data-testid="ThreeDotsIcons" />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  )
}

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

const ClickableText = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const TopicRow = memo(TableRowComponent)
