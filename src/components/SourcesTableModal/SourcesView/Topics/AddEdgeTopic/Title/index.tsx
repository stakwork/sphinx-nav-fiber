import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { DropdownSearch } from './Autocomplete'
import { Dropdown } from './Dropdown'

type Props = {
  from: string
  onSelect: (topic: Topic | null) => void
  selectedTopic: Topic | null
  selectedType: string
  setSelectedType: (type: string) => void
}

export const TitleEditor: FC<Props> = ({ from, onSelect, selectedTopic, selectedType, setSelectedType }) => (
  <Flex>
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
        <Dropdown selectedType={selectedType} setSelectedType={setSelectedType} />
      </SectionWrapper>
      <SectionWrapper>
        <div className="label">To</div>
        <DropdownSearch onSelect={onSelect} selectedTopic={selectedTopic} />
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
  align: 'flex-start',
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
`
