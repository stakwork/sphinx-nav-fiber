import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TEdge } from '~/types'
import { colors } from '~/utils/colors'
import { ConnectionType } from './ConnectionType'
import { ToNode } from './ToNode'

type Props = {
  from: string
  onSelect: (edge: TEdge | null) => void
  selectedType: string
  setSelectedType: (type: string) => void
  selectedToNode: TEdge | null
}

export const TitleEditor: FC<Props> = ({ from, onSelect, selectedType, setSelectedType, selectedToNode }) => (
  <Flex mb={20}>
    <Flex align="center" direction="row" justify="space-between" mb={18}>
      <Flex align="center" direction="row">
        <StyledText>Add edge</StyledText>
      </Flex>
    </Flex>

    <Content mb={12}>
      <SectionWrapper>
        <div className="label">From</div>
        <div>{from}</div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="label">Type</div>
        <ConnectionType selectedType={selectedType} setSelectedType={setSelectedType} />
      </SectionWrapper>
      <SectionWrapper>
        <div className="label">To</div>
        <ToNode onSelect={onSelect} selectedValue={selectedToNode} />
      </SectionWrapper>
    </Content>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`

const Content = styled(Flex).attrs({
  align: 'stretch',
  direction: 'row',
  justify: 'flex-start',
})`
  color: ${colors.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${colors.GRAY3};
  }
`

const SectionWrapper = styled(Flex)`
  flex: 1 1 100%;
  padding: 0 8px;
`
