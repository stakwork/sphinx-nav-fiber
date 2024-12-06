import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

interface VideoCardProps {
  imageUrl: string
  title: string
  subtitle: string
  onClick: () => void
}

export const VideoCard = ({ imageUrl, title, subtitle, onClick }: VideoCardProps) => {
  const truncatedTitle = title.length > 35 ? `${title.substring(0, 32)}...` : title
  const truncatedSubtitle = subtitle.length > 50 ? `${subtitle.substring(0, 47)}...` : subtitle

  return (
    <CardWrapper onClick={onClick}>
      <ImageWrapper>
        <Avatar height={140} src={imageUrl} type="Episode" width={170} />
      </ImageWrapper>
      <TextWrapper>
        <CardTitle>{truncatedTitle}</CardTitle>
        <CardSubtitle>{truncatedSubtitle}</CardSubtitle>
      </TextWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled(Flex)`
  background: ${colors.BG1};
  width: 170px;
  height: 200px;
  color: ${colors.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: ${colors.SEEDQUESTION_HOVER};
  }
  &:active {
    background: ${colors.SEEDQUESTION};
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 140px; /* Fixed height for images */
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`

const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${colors.white};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardSubtitle = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${colors.GRAY6};
  margin: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
