import { Controller, get, RegisterOptions, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BaseTextInput, BaseTextInputProps } from "~/components/BaseTextInput";
import { colors } from "~/utils/colors";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import InputMask from "react-input-mask";
import { WebTextInput } from "~/components/BaseTextInput/WebTextInput";
import { defaultProps } from "~/components/BaseTextInput/defaultProps";

const Wrapper = styled(Flex).attrs({
  background: "inputBg2",
  px: 8,
  py: 12,
})`
  border-radius: 8px;
`;

type QuestionIconProps = {
  name: string;
};

type Props = BaseTextInputProps & {
  label: string;
  message?: string;
  rules?: RegisterOptions;
  mask?: string;
};

export const TextInput = ({ label, mask = "", message, name, rules, ...props }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <Flex shrink={1}>
      <Flex align="center" direction="row" pb={4} pl={4}>
        <Text color="lightGray" kind="regularBold">
          {label}
        </Text>
        <QuestionIcon name={name}>
          <FaRegQuestionCircle color={colors.secondaryText4} />
          <div className="tooltip">{message}</div>
        </QuestionIcon>
      </Flex>
      <Wrapper>
        <Controller
          control={control}
          name={name}
          render={({ field: { onBlur, onChange, value, ref } }) => {
            const { disabled = defaultProps.disabled, textAlign = defaultProps.textAlign } = props;

            return mask ? (
              <InputMask
                alwaysShowMask
                disabled={false}
                inputRef={ref}
                mask={mask}
                maskChar="_"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              >
                <WebTextInput
                  colorName="white"
                  disabled={disabled}
                  placeholderTextColor="inputPlaceholder"
                  textAlign={textAlign}
                />
              </InputMask>
            ) : (
              <BaseTextInput
                {...props}
                colorName="white"
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                placeholderTextColor="inputPlaceholder"
                value={value || ""}
              />
            );
          }}
          rules={rules}
        />
      </Wrapper>

      {error && (
        <Flex pl={4} pt={8} shrink={1}>
          <Text color="primaryRed" kind="regularBold">
            <Flex align="center" direction="row" shrink={1}>
              <span className="material-icons md-18" style={{ fontSize: "18px" }}>
                error
              </span>

              <Flex pl={4} shrink={1}>
                {error.message}
              </Flex>
            </Flex>
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

const QuestionIcon = styled(Flex)<QuestionIconProps>`
  cursor: default;
  margin-left: 6px;
  position: relative;

  .tooltip {
    position: absolute;
    background-color: ${colors.dashboardHeader};
    border: 1px solid ${colors.secondaryText4};
    border-radius: 4px;
    color: ${colors.white};
    top: 22px;
    padding: 4px 8px;
    font-size: 13px;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  ${(props) =>
    props.name === "endTime" &&
    `
    .tooltip {
      left: -68px;
    }
  `}

  &:hover .tooltip {
    visibility: visible;
  }
`;
