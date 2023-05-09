import { ChangeEvent, forwardRef, useCallback } from 'react'
import { defaultProps } from './defaultProps'
import { BaseTextAreaProps, ForwardedRef } from './types'
import { WebTextArea } from './WebTextArea'

export const BaseTextArea = forwardRef(
  (
    {
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
      value,
    }: BaseTextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
          onChange(event.target.value)
        }
      },
      [onChange],
    )

    return (
      <WebTextArea
        ref={ref}
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
        value={value}
      />
    )
  },
)

BaseTextArea.displayName = 'BaseTextArea'

export type { BaseTextAreaProps }
