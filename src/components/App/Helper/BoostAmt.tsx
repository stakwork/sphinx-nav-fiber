import styled from 'styled-components'
import BoostIcon from '~/components/Icons/BoostIcon'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type Props = {
  amt: number
}
export const BoostAmt = ({ amt }: Props) => (
  <Wrapper align="center" direction="row" justify="flex-start">
    <div className="icon">
      <BoostIcon />
    </div>
    <div className="value">{amt}</div>
    <div className="text">sat</div>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.GRAY7};
  .icon {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: ${colors.GRAY7};
    color: ${colors.BG1};
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .value {
    margin: 0 4px 0 8px;
    color: ${colors.white};
  }
`
