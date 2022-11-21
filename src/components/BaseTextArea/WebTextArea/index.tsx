import styled from "styled-components";
import { colors } from "~/utils/colors";
import { BaseTextAreaProps } from "../types";

type Props = Required<
  Pick<
    BaseTextAreaProps,
    "colorName" | "disabled" | "placeholderTextColor" | "textAlign"
  >
>;

export const WebTextArea = styled.textarea<Props>`
  -webkit-appearance: none;
  -webkit-text-fill-color: ${({ colorName }) => colors[colorName]};
  background: transparent;
  border: none;
  color: ${({ colorName }) => colors[colorName]};
  cursor: ${({ disabled }) => (disabled ? "default" : "text")};
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 0;
  text-align: ${({ textAlign }) => textAlign};

  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
    -webkit-text-fill-color: ${({ placeholderTextColor }) =>
      colors[placeholderTextColor]};
    color: ${({ placeholderTextColor }) => colors[placeholderTextColor]};
  }

  min-height: 100px;
`;

WebTextArea.displayName = "WebTextInput";
