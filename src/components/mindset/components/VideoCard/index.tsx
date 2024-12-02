import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

interface VideoCardProps {
  imageUrl: string
  title: string
  subtitle: string
  onClick: () => void
}

export const VideoCard = ({ imageUrl, title, subtitle, onClick }: VideoCardProps) => (
  <CardWrapper onClick={onClick}>
    <ImageWrapper>
      <CardImage alt={title} src={imageUrl} />
    </ImageWrapper>
    <TextWrapper>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </TextWrapper>
  </CardWrapper>
)

const CardWrapper = styled(Flex)`
  background: ${colors.BG1};
  width: 26%;
  height: 200px;
  color: ${colors.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: left;
  &:hover {
    background: ${colors.SEEDQUESTION_HOVER};
  }

  &:active {
    background: ${colors.SEEDQUESTION};
  }
  svg {
    width: 20px;
    height: 20px;
  }

  path {
    fill: ${colors.modalWhiteOverlayBg};
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`

const CardTitle = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  color: ${colors.white};
  margin: 0;
`

const CardSubtitle = styled.p`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: ${colors.GRAY6};
  line-height: 16.94px;
  margin: 0;
`
