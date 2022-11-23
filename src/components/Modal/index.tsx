import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";
import { Flex } from "~/components/common/Flex";
import { AvailableModals, useModal } from "~/stores/useModalStore";
import { colors } from "~/utils/colors";
import { media } from "~/utils/media";

const scaleAnimation = keyframes`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

const ModalContainer = styled(Flex)`
  background-color: ${colors.modalBg};
  z-index: 2000;
  width: 520px;
  margin: 0 auto;
  // pointer-events: none;
  animation: ${scaleAnimation} 0.2s ease-in-out;

  ${media.smallOnly`
    width: 100%;
    height: 100%;
    border-radius: 0;
  `}
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Bg = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray300};
  transition: all;
  z-index: 1500;
  animation: ${fadeAnimation} 0.2s ease-in-out;
`;

export const BaseModal = ({
  children,
  id,
}: PropsWithChildren<{ id: AvailableModals }>) => {
  const { visible, close } = useModal(id);

  if (!visible) {
    return null;
  }

  return (
    <>
      <Bg
        align="center"
        justify="center"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        <ModalContainer
          borderRadius={24}
          onClick={(e) => {
            e.stopPropagation();
          }}
          p={32}
        >
          {children}
        </ModalContainer>
      </Bg>
    </>
  );
};
