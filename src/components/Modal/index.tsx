import { PropsWithChildren } from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex } from "~/components/common/Flex";
import { AvailableModals, useModal } from "~/stores/useModalStore";
import { ColorName, colors } from "~/utils/colors";
import { media } from "~/utils/media";

const scaleAnimation = keyframes`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

const getModalKindStyles = ({ kind = "regular" }: Pick<Props, "kind">) => {
  switch (kind) {
    case "small":
      return css`
        width: 320px;
      `;
    case "large":
      return css`
        width: 720px;
      `;
    default:
      return css`
        width: 520px;
      `;
  }
};

const ModalContainer = styled(Flex)<Pick<Props, "kind">>`
  z-index: 2000;
  margin: 0 auto;
  animation: ${scaleAnimation} 0.2s ease-in-out;

  ${getModalKindStyles}

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

const Bg = styled(Flex)<{ hideBg?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  transition: all;
  z-index: 1500;
  animation: ${fadeAnimation} 0.2s ease-in-out;

  ${({ hideBg }) =>
    !hideBg &&
    css`
      background-color: ${colors.gray300};
    `}
`;

type ModalKind = "small" | "regular" | "large";

type Props = PropsWithChildren<{
  id: AvailableModals;
  background?: ColorName;
  onClose?: () => void;
  hideBg?: boolean;
  kind?: ModalKind;
}>;

export const BaseModal = ({
  background = "modalBg",
  children,
  id,
  hideBg,
  kind,
  onClose,
}: Props) => {
  const { visible, close } = useModal(id);

  if (!visible) {
    return null;
  }

  return (
    <>
      <Bg
        align="center"
        hideBg={hideBg}
        justify="center"
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();

          close();
        }}
      >
        <ModalContainer
          background={background}
          borderRadius={16}
          kind={kind}
          onClick={(e) => {
            e.stopPropagation();
          }}
          px={24}
          py={32}
        >
          {children}
        </ModalContainer>
      </Bg>
    </>
  );
};
