import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BaseTextArea, BaseTextAreaProps } from "~/components/BaseTextArea";
import { colors } from "~/utils/colors";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";

const Wrapper = styled(Flex).attrs({
  background: "inputBg2",
  px: 8,
  py: 12,
})`
  border-radius: 8px;
`;

type Props = BaseTextAreaProps & {
  label: string;
  message?: string;
  rules?: RegisterOptions;
};

export const TextArea = ({ label, message, name, rules, ...props }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <>
      <Flex align="center" direction="row" pb={4} pl={4}>
        <Text color="lightGray" kind="regularBold" tabIndex={0}>
          {label}
        </Text>
        <QuestionIcon role="tooltip" tabIndex={0}>
          <FaRegQuestionCircle color={colors.secondaryText4} />
          <div className="tooltip">{message}</div>
        </QuestionIcon>
      </Flex>

      <Wrapper>
        <Controller
          control={control}
          name={name}
          render={({ field: { onBlur, onChange, value } }) => (
            <BaseTextArea
              {...props}
              colorName="white"
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              placeholderTextColor="inputPlaceholder"
              value={value || ""}
            />
          )}
          rules={rules}
        />
      </Wrapper>

      {error && (
        <Flex pl={4} pt={8} shrink={1} tabIndex={0}>
          <Text color="primaryRed" kind="regularBold">
            <Flex align="center" direction="row" shrink={1}>
              <span
                className="material-icons md-18"
                style={{ fontSize: "18px" }}
              >
                error
              </span>

              <Flex pl={4} shrink={1}>
                {error.message}
              </Flex>
            </Flex>
          </Text>
        </Flex>
      )}
    </>
  );
};

const QuestionIcon = styled(Flex)`
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
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`;
