import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'

type Props = {
  title?: string
  description?: string
}

export const HoverCard = ({ title, description }: Props) => (
  <Portal>
    <TooltipContainer>
      <ContentWrapper>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </ContentWrapper>
    </TooltipContainer>
  </Portal>
)

const Portal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`

const TooltipContainer = styled(Flex)`
  width: 390px;
  min-height: 100px;
  background: ${colors.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  padding-bottom: 3px !important;
  position: fixed;
  flex-direction: column;
  gap: 4px;
  top: calc(-230px);
  left: 100%;
  z-index: 1000;
  margin-left: 450px;
  pointer-events: auto;
`

const ContentWrapper = styled(Flex)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
`

const Title = styled(Text)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${colors.white};
  margin: 0;
`

const Description = styled(Text)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.white};
  margin: 0;
  opacity: 0.8;
`
