import styled from 'styled-components'
import { colors } from '~/utils'
import { ColorPickerPopoverView } from './ColorPickerPopoverView'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ColorPickerPopover = ({ isOpen, onClose }: Props) => (
  <ModalBackground isOpen={isOpen}>
    <ModalContent>
      <ColorPickerPopoverView onClose={onClose} />
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
  top: 40%;
  left: 34%;
  transform: translate(-50%, -50%);
  background: ${colors.BG1};
  width: 300px;
  height: 460px;
  z-index: 1001;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 1550px) {
    top: 44%;
    left: 38%;
  }

  @media (max-width: 1024px) {
    top: 58%;
    left: 56%;
  }

  @media (max-width: 768px) {
    top: 50%;
    left: 64%;
  }

  @media (max-width: 480px) {
    top: 37%;
    left: 76%;
  }
`
