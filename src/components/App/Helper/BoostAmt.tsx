import { Text } from '~/components/common/Text'
import styled from 'styled-components'
import BoostIcon from '~/components/Icons/BoostIcon'

type Props = {
  amt: number
}
export const BoostAmt = ({ amt }: Props) => (
  <div style={{ alignSelf: 'center' }}>
    <BoostIcon />

    <StyledText color="white">{amt}</StyledText>
  </div>
)

const StyledText = styled(Text)`
  padding-left: 10px;
`
