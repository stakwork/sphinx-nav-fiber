import { FC, useState } from 'react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { GraphViewControl } from '~/components/App/ActionsToolbar/GraphViewControl'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useGraphStore } from '~/stores/useGraphStore'
import { ClipLoader } from 'react-spinners'
import { colors } from '~/utils'

type Props = {
  onClose: () => void
}

export const Appearance: FC<Props> = ({ onClose }) => {
  const [graphStyle] = useGraphStore((s) => [s.graphStyle])
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    localStorage.setItem('graphStyle', graphStyle)
    setLoading(false)
    onClose()
  }

  return (
    <Wrapper direction="column">
      <StyledText>Default graph view:</StyledText>
      <GraphViewControl />

      <Flex mt={308} py={8}>
        <Button
          color="secondary"
          disabled={loading}
          id="add-node-submit-cta"
          onClick={handleSave}
          size="large"
          startIcon={
            loading && (
              <IconWrapper>
                <ClipLoader color={colors.lightGray} size={12} />
              </IconWrapper>
            )
          }
          type="submit"
          variant="contained"
        >
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
  color: ${colors.lightGray};
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`
