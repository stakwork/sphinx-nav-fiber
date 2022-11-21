import { ChangeEvent, forwardRef, useCallback } from "react";
import { defaultProps } from "./defaultProps";
import { autoCompleteValuesWeb } from "./tokens/autoComplete";
import { BaseTextInputProps, ForwardedRef } from "./types";
import { WebTextInput } from "./WebTextInput";

export const BaseTextInput = forwardRef(
  (
    {
      autoCapitalize,
      autoComplete = defaultProps.autoComplete,
      autoFocus,
      className,
      colorName = defaultProps.colorName,
      defaultValue,
      disabled = defaultProps.disabled,
      id,
      maxLength = defaultProps.maxLength,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder = defaultProps.placeholder,
      placeholderTextColor = defaultProps.placeholderTextColor,
      textAlign = defaultProps.textAlign,
      type = defaultProps.type,
      value,
    }: BaseTextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event.target.value);
        }
      },
      [onChange]
    );

    return (
      <WebTextInput
        ref={ref}
        autoCapitalize={autoCapitalize}
        autoComplete={autoCompleteValuesWeb[autoComplete]}
        autoFocus={autoFocus}
        className={className}
        colorName={colorName}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        textAlign={textAlign}
        type={type}
        value={value}
      />
    );
  }
);

BaseTextInput.displayName = "BaseTextInput";

export type { BaseTextInputProps };
