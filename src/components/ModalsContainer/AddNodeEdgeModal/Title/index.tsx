import { FC, useState } from 'react'
import styled from 'styled-components'
import ArrowRight from '~/components/Icons/ArrowRight'
import FlipIcon from '~/components/Icons/FlipIcon'
import NodeCircleIcon from '~/components/Icons/NodeCircleIcon'
import NodeConnectionIcon from '~/components/Icons/NodeConnectionIcon'
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
        <NodeConnectionIcon fill="none" height="170" width="37" />
        <IconTopContainer>
          <NodeCircleIcon fill="#23252f" stroke="#6B7A8D" />
        </IconTopContainer>
        <IconMidContainer onClick={handleButtonClick}>
          <FlipIcon color="#303342" height="2em" width="2em" />
        </IconMidContainer>
        <IconBottomContainer>
          <ArrowRight color="#6B7A8D" height={11} width={11} />
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
  top: -8px;
  left: 33px;
`

const IconMidContainer = styled.div`
  position: absolute;
  top: 70px;
  left: -12px;
  z-index: 999;
  cursor: pointer;
`

const IconBottomContainer = styled.div`
  position: absolute;
  top: 157px;
  left: 31px;
`
