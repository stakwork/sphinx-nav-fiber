import { ColorPickerPopoverView } from './ColorPickerPopoverView'
import styled from 'styled-components'
import { colors } from '~/utils'

type Props = {
  isOpen: boolean
}

export const ColorPickerPopover = ({ isOpen }: Props) => (
  <ModalBackground isOpen={isOpen}>
    <ModalContent>
      <ColorPickerPopoverView />
    </ModalContent>
  </ModalBackground>
)

const ModalBackground = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`

const ModalContent = styled.div`
  position: fixed;
  top: 38%;
  left: 34%;
  transform: translate(-50%, -50%);
  background: ${colors.BG1};
  width: 300px;
  height: 443px;
  z-index: 1001;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`
