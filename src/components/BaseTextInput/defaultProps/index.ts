import { BaseTextInputProps } from "../types";

type DefaultProps = Required<
  Pick<
    BaseTextInputProps,
    | "autoComplete"
    | "colorName"
    | "disabled"
    | "maxLength"
    | "placeholder"
    | "placeholderTextColor"
    | "returnKeyType"
    | "textAlign"
    | "type"
  >
>;

export const defaultProps: DefaultProps = {
  autoComplete: "off",
  colorName: "black",
  disabled: false,
  maxLength: 524288,
  placeholder: "",
  placeholderTextColor: "gray100",
  returnKeyType: "done",
  textAlign: "left",
  type: "text",
};
