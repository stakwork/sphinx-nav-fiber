import TextField from '@mui/material/TextField'
import { FC, useState } from 'react'
import styled from 'styled-components'
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
        <NodeConnectorDiv />
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

      <Div swap={swap}>
        <FromSection label="From" swap={swap} value={from} />

        <TypeSection swap={swap}>
          <StyledLabel>Type</StyledLabel>
          <ConnectionType selectedType={selectedType} setSelectedType={setSelectedType} />
        </TypeSection>

        <ToSection swap={swap}>
          <ToLabel>To</ToLabel>
          <ToNode onSelect={onSelect} selectedValue={selectedToNode} />
        </ToSection>
      </Div>
    </Flex>
  )
}

const NodeConnectorDiv = styled.div`
  position: absolute;
  top: 6px;
  left: 4px;
  width: 35px;
  height: 165px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
`

const Div = styled.div<SectionProps>`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${(props) => (props.swap ? 'column' : 'column-reverse')};
  margin-bottom: 10px;
`

const FromSection = styled(TextField)<SectionProps>`
  position: relative;
  width: 250px;
  height: 64px;
  top: ${(props) => (props.swap ? '12px' : '25px')};
  left: 55px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  z-index: -10;
`

const ToSection = styled.div<SectionProps>`
  position: relative;
  width: 250px;
  height: 64px;
  top: ${(props) => (props.swap ? '18px' : '8px')};
  margin-left: 55px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
  z-index: -10;
`

const TypeSection = styled.div<SectionProps>`
  position: relative;
  width: 195px;
  height: 64px;
  top: ${(props) => (props.swap ? '25px' : '25px')};
  left: 35px;
  opacity: 0px;
  margin-bottom: ${(props) => (props.swap ? '25px' : '25px')};
  display: flex;
  align-items: center;
  z-index: -10;
`

const StyledLabel = styled.label`
  background-color: #23252f;
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
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`

const IconContainer = styled.div`
  position: absolute;
  top: 102px;
  left: 35px;
`

const IconTopContainer = styled.div`
  position: absolute;
  top: -2px;
  left: 33px;
  color: #23252f;
  width: 10px;
  height: 10px;
`

const IconMidContainer = styled.div`
  position: absolute;
  top: 70px;
  left: -10px;
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
  top: 162px;
  left: 28px;
  color: #6b7a8d;
`
