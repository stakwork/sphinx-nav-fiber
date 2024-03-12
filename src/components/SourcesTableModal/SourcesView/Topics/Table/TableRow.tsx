import React, { FC, memo, useState } from 'react'
import { IconButton } from '@mui/material'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import SettingsIcon from '~/components/Icons/SettingsIcon'
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

export const TableRowComponent: FC<TTableRaw> = ({ topic, onClick, onSearch }) => {
  const [ids, total] = useTopicsStore((s) => [s.ids, s.total])
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState<Topic>(topic)

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

  const handleMouseEnter = (hoveredTopic: Topic) => {
    setPopupContent(hoveredTopic)
    setShowPopup(true)
  }

  const handleMouseLeave = () => {
    setShowPopup(false)
  }

  const lettersToShow = topic.edgeList.slice(0, 1)
  const hiddenLettersCount = topic.edgeList.length - lettersToShow.length

  return (
    <StyledTableRow key={topic.topic}>
      <StyledTableCell className="empty" />
      <StyledTableCell onClick={() => handleClickTopic(topic)}>
        <ClickableText>{topic.topic}</ClickableText>
      </StyledTableCell>
      <StyledTableCell>{topic.edgeCount}</StyledTableCell>
      <StyledTableCell onMouseEnter={() => handleMouseEnter(topic)} onMouseLeave={() => handleMouseLeave()}>
        {showPopup && (
          <PopupContent>
            <div>{popupContent.edgeList.join(', ')}</div>
          </PopupContent>
        )}
        {lettersToShow.join(', ')}
        {hiddenLettersCount > 0 && `,...`}
      </StyledTableCell>
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
          <SettingsIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  )
}

const PopupContent = styled.div`
  position: absolute;
  cursor: pointer;
  height: auto;
  width: 150px;
  border-radius: 4px;
  right: 206px;
  background-color: #000000;
  padding: 10px;
  border: none;
  word-wrap: break-word;
  opacity: 0.8;
  z-index: 9999;
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

const ClickableText = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const TopicRow = memo(TableRowComponent)
