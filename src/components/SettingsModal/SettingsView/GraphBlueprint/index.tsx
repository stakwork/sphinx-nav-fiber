import React from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

export const GraphBlueprint: React.FC = () => (
  <Flex direction="column">
    <StyledText>Graph Blueprint settings will go here.</StyledText>
  </Flex>
)

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 120px;
`
