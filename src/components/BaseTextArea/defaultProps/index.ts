import { BaseTextAreaProps } from "../types";

type DefaultProps = Required<
  Pick<
    BaseTextAreaProps,
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
  colorName: "black",
  disabled: false,
  maxLength: 524288,
  placeholder: "",
  placeholderTextColor: "gray100",
  returnKeyType: "done",
  textAlign: "left",
  type: "text",
};
