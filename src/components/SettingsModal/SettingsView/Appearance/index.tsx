import React, { FC } from 'react'
import styled from 'styled-components'
import { GraphViewControl } from '~/components/App/ActionsToolbar/GraphViewControl'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useDataStore } from '~/stores/useDataStore'

type Props = {
  onClose: () => void
}

export const Appearance: FC<Props> = ({ onClose }) => {
  const [graphStyle] = useDataStore((s) => [s.graphStyle])

  const handleSave = () => {
    localStorage.setItem('graphStyle', graphStyle)
    onClose()
  }

  return (
    <Wrapper direction="column">
      <StyledText>Default graph view:</StyledText>
      <GraphViewControl />
      <Flex mt={308}>
        <Button kind="big" onClick={handleSave}>
          Save Changes
        </Button>
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  display: flex;
  gap: 10px;
  padding: 36px;
`

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`
