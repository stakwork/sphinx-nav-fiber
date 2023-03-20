import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import styled from "styled-components";
import { BaseTextArea, BaseTextAreaProps } from "~/components/BaseTextArea";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { colors } from "~/utils/colors";

const Wrapper = styled(Flex).attrs({
  background: "inputBg2",
  px: 8,
  py: 12,
})`
  border-radius: 8px;
`;

type Props = BaseTextAreaProps & {
  id: string;
  label: string;
  message?: string;
  rules?: RegisterOptions;
};

export const TextArea = ({
  id,
  label,
  message,
  name,
  rules,
  ...props
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <>
      <Flex align="center" direction="row" pb={4} pl={4}>
        <Label htmlFor={id}>{label}</Label>
        <QuestionIcon role="tooltip">
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
              id={id}
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
              <MdError />

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

const Label = styled.label`
  color: ${colors.lightGray};
  font-size: 14px;
  font-weight: 600;
`;
