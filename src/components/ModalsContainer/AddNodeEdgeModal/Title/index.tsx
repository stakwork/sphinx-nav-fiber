import { FC, useState } from 'react'
import styled from 'styled-components'
import ConnectorImage from '~/../public/Connector.png'
import ArrowRight from '~/components/Icons/ArrowRight'
import FlipIcon from '~/components/Icons/FlipIcon'
import NodeCircleIcon from '~/components/Icons/NodeCircleIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TEdge } from '~/types'
import { ConnectionType } from './ConnectionType'
import { ToNode } from './ToNode'

type Props = {
  from: string
  onSelect: (edge: TEdge | null) => void
  selectedType: string
  setSelectedType: (type: string) => void
  selectedToNode: TEdge | null
}

interface SectionProps {
  swap: boolean
}

export const TitleEditor: FC<Props> = ({ from, onSelect, selectedType, setSelectedType, selectedToNode }) => {
  const [swap, setSwap] = useState(true)

  const handleButtonClick = () => {
    setSwap(!swap)
  }

  return (
    <Flex mb={20}>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Add Edge</StyledText>
        </Flex>
      </Flex>

      <IconContainer>
        <img alt="a" src={ConnectorImage} />
        <IconTopContainer>
          <NodeCircleIcon />
        </IconTopContainer>
        <IconMidContainer onClick={handleButtonClick}>
          <FlipIcon />
        </IconMidContainer>
        <IconBottomContainer>
          <ArrowRight />
        </IconBottomContainer>
      </IconContainer>

      <Div>
        {swap ? (
          <>
            <FromSection swap={swap}>
              <FromLabel>From</FromLabel>
              <StyledText2>{from}</StyledText2>
            </FromSection>

            <TypeSection swap={swap}>
              <StyledLabel>Type</StyledLabel>
              <ConnectionType selectedType={selectedType} setSelectedType={setSelectedType} />
            </TypeSection>

            <ToSection swap={swap}>
              <ToLabel>To</ToLabel>
              <ToNode onSelect={onSelect} selectedValue={selectedToNode} />
            </ToSection>
          </>
        ) : (
          <>
            <ToSection swap={swap}>
              <ToLabel>To</ToLabel>
              <ToNode onSelect={onSelect} selectedValue={selectedToNode} />
            </ToSection>

            <TypeSection swap={swap}>
              <StyledLabel>Type</StyledLabel>
              <ConnectionType selectedType={selectedType} setSelectedType={setSelectedType} />
            </TypeSection>

            <FromSection swap={swap}>
              <FromLabel>From</FromLabel>
              <StyledText2>{from}</StyledText2>
            </FromSection>
          </>
        )}
      </Div>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`

const Div = styled.div`
  position: relative;
  color: white;
`

const FromSection = styled.div<SectionProps>`
  position: relative;
  width: 258px;
  height: 64px;
  margin-top: ${(props) => (props.swap ? '10px' : '10px')};
  left: 55px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  margin-bottom: ${(props) => (props.swap ? '10px' : '10px')};
  display: flex;
  align-items: center;
  z-index: -10;
`

const TypeSection = styled.div<SectionProps>`
  position: relative;
  width: 195px;
  height: 64px;
  top: 8px;
  left: 35px;
  opacity: 0px;
  margin-bottom: ${(props) => (props.swap ? '25px' : '25px')};
  display: flex;
  align-items: center;
  z-index: -10;
`

const ToSection = styled.div<SectionProps>`
  position: relative;
  width: 258px;
  height: 64px;
  margin-top: ${(props) => (props.swap ? '' : '10px')};
  margin-left: 55px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  z-index: -10;
`

const StyledText2 = styled(Text)`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`

const StyledLabel = styled.label`
  background-color: #23252f;
  font-family: 'Barlow';
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: relative;
  left: 30px;
  top: -34px;
`

const ToLabel = styled.label`
  font-family: 'Barlow';
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`

const FromLabel = styled.label`
  background-color: #23252f;
  font-family: 'Barlow';
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 10px;
  top: -10px;
`

const IconContainer = styled.div`
  position: absolute;
  top: 102px;
  left: 35px;
`

const IconTopContainer = styled.div`
  position: absolute;
  top: -6px;
  left: 33px;
  color: #23252f;
  width: 10px;
  height: 10px;
`

const IconMidContainer = styled.div`
  position: absolute;
  top: 70px;
  left: -12px;
  z-index: 999;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

const IconBottomContainer = styled.div`
  position: absolute;
  top: 160px;
  left: 28px;
  color: #6b7a8d;
`
