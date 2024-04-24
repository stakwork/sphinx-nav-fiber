import { PropsWithChildren, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { AvailableModals, useModal } from '~/stores/useModalStore'
import { ColorName, colors } from '~/utils/colors'
import ClearIcon from '../Icons/ClearIcon'

const scaleAnimation = keyframes`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`

const getModalKindStyles = ({ kind = 'regular' }: Pick<Props, 'kind'>) => {
  switch (kind) {
    case 'small':
      return css`
        width: 370px;
      `
    case 'large':
      return css`
        width: 709px;
      `
    case 'full':
      return css`
        width: 100%;
        height: 100%;
      `
    default:
      return css`
        width: 520px;
      `
  }
}

const ModalContainer = styled(Flex)<Pick<Props, 'kind'>>`
  z-index: 2000;
  margin: 0 auto;
  overflow: visible;
  animation: ${scaleAnimation} 0.2s ease-in-out;
  position: relative;
  max-width: 100%;
  overflow: visible;
  background: ${colors.BG1};
  ${getModalKindStyles}
`

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Bg = styled(Flex)<{ hideBg?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: all;
  z-index: 1500;
  animation: ${fadeAnimation} 0.2s ease-in-out;
  padding: 1rem;

  ${({ hideBg }) =>
    !hideBg &&
    css`
      background-color: ${colors.modalWhiteOverlayBg};
    `}
`

const CloseButton = styled(Flex)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: ${colors.GRAY6};
  cursor: pointer;
  z-index: 1;
`

export type ModalKind = 'small' | 'regular' | 'large' | 'full'

type Props = PropsWithChildren<{
  id: AvailableModals
  background?: ColorName
  hideBg?: boolean
  kind?: ModalKind
  preventOutsideClose?: boolean
  noWrap?: boolean
  onClose?: () => void
}>

export const BaseModal = ({
  background = 'modalBg',
  children,
  id,
  hideBg,
  kind,
  preventOutsideClose,
  noWrap = false,
  onClose,
}: Props) => {
  const { visible, close } = useModal(id)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        close()
      }
    }

    if (visible) {
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('keydown', handleEsc) // Cleanup
    }
  }, [visible, close])

  if (!visible) {
    return null
  }

  return (
    <>
      <Bg
        align="center"
        data-testid="modal-overlay"
        hideBg={hideBg}
        justify="center"
        onClick={(e) => {
          if (!preventOutsideClose) {
            e.stopPropagation()
            close()
          }
        }}
      >
        <ModalContainer
          background={background}
          borderRadius={9}
          id={id}
          kind={kind}
          onClick={(e) => {
            e.stopPropagation()
          }}
          px={noWrap ? 0 : 20}
          py={noWrap ? 0 : 20}
        >
          {onClose && (
            <CloseButton data-testid="close-modal" onClick={onClose}>
              <ClearIcon />
            </CloseButton>
          )}
          {children}
        </ModalContainer>
      </Bg>
    </>
  )
}
