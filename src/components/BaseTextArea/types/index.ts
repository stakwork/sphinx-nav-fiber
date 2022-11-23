import { KeyboardEvent, MutableRefObject } from "react";
import { ColorName } from "~/utils/colors";

export type ForwardedRef<T> =
  | ((instance: T | null) => void)
  | MutableRefObject<T | null>
  | null;

type TextAlign = "left" | "right";

type ReturnKeyType = "done" | "go" | "next" | "search" | "send";

export type InputType =
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url";

export type BaseTextAreaProps = {
  autoFocus?: boolean;
  className?: string;
  colorName?: ColorName;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  name: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onSubmitEditing?: (value: string) => void;
  placeholder?: string;
  placeholderTextColor?: ColorName;
  returnKeyType?: ReturnKeyType;
  textAlign?: TextAlign;
  type?: InputType;
  value?: string;
};
