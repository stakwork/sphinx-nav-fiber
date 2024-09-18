import { FC } from 'react'
import styled from 'styled-components'
import { noSpacePattern } from '~/components/AddItemModal/SourceTypeStep/constants'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { colors } from '~/utils'
import { ToNode } from './ToNode'

type Props = {
  selectedType: string
  setSelectedFromNode: (type: string) => void
  setSelectedToNode: (type: string) => void
  selectedFromNode: string
  selectedToNode: string
  edgeLinkData?: { refId: string; edgeType: string; source: string; target: string }
}

export const TitleEditor: FC<Props> = ({
  selectedType,
  setSelectedFromNode,
  setSelectedToNode,
  edgeLinkData,
  selectedFromNode,
  selectedToNode,
}) => {
  const hideSelectAllInSource = selectedToNode === 'all'
  const hideSelectAllInTarget = selectedFromNode === 'all'

  return (
    <Flex mt={8}>
      <Flex mb={25}>
        <Flex mb={5}>
          <StyledLabel>Source</StyledLabel>
        </Flex>
        <ToNode
          dataTestId="from_node"
          edgeLink={edgeLinkData?.source}
          hideSelectAll={hideSelectAllInSource}
          onSelect={setSelectedFromNode}
          placeholder="Source Name"
        />
      </Flex>

      <Flex mb={10}>
        <Flex mb={5}>
          <StyledLabel>Edge Name</StyledLabel>
        </Flex>
        <Flex mb={12}>
          <TextInput
            id="cy-item-name"
            maxLength={250}
            name="type"
            placeholder="Enter Edge Name"
            rules={{
              ...requiredRule,
              pattern: {
                message: 'No leading whitespace allowed',
                value: noSpacePattern,
              },
            }}
            value={selectedType}
          />
        </Flex>
      </Flex>

      <Flex mb={25}>
        <Flex mb={5}>
          <StyledLabel>Destination</StyledLabel>
        </Flex>
        <ToNode
          dataTestId="to_node"
          edgeLink={edgeLinkData?.target}
          hideSelectAll={hideSelectAllInTarget}
          onSelect={setSelectedToNode}
          placeholder="Select Destination"
        />
      </Flex>
    </Flex>
  )
}

const StyledLabel = styled(Text)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${colors.mainBottomIcons};
`
