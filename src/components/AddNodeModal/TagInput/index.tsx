import { KeyboardEvent, useCallback, useState } from "react";
import {
  useFormContext,
  RegisterOptions,
  get,
  Controller,
} from "react-hook-form";
import styled from "styled-components";
import { BaseTextInput, BaseTextInputProps } from "~/components/BaseTextInput";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { colors } from "~/utils/colors";

const Wrapper = styled(Flex).attrs({
  background: "inputBg2",
  basis: "25%",
  px: 8,
  py: 12,
})`
  border-radius: 8px;
  margin-right: 8px;
`;

type Props = Omit<BaseTextInputProps, "name"> & {
  label: string;
  message?: string;
  rules?: RegisterOptions;
};

type Fields = { tags: string[] | undefined };

const name = "tags";

export const TagInput = ({ label, message, rules, ...props }: Props) => {
  const {
    setValue,
    getValues,
    clearErrors,
    formState: { errors },
  } = useFormContext<Fields>();

  const error = get(errors, name);

  const [currentTag, setCurrentTag] = useState("");
  const tags = getValues(name);

  const handleEvent = useCallback(
    (e: KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>) => {
      if (e.type === "keydown") {
        if ((e as KeyboardEvent).key !== "Enter") {
          return;
        }

        e.preventDefault();
      }

      if (!currentTag.trim()) {
        return;
      }

      // Removes duplicates
      const tagsSet = new Set([...(tags || []), currentTag]);

      setValue(name, [...tagsSet]);

      setCurrentTag("");
      clearErrors(name);
    },
    [currentTag, setValue, tags, clearErrors]
  );

  const handleTagRemove = useCallback(
    (tag: string) => {
      if (!tags) {
        return;
      }

      const targetIndex = tags.findIndex((t) => t === tag);

      tags.splice(targetIndex, 1);

      setValue(name, [...tags], {
        shouldValidate: true,
      });
    },
    [setValue, tags]
  );

  const handleOnChange = useCallback(
    (v: string) => {
      setCurrentTag(v);
    },
    [setCurrentTag]
  );

  return (
    <Flex shrink={1}>
      <Flex align="center" direction="row" pb={4} pl={4}>
        <Text color="lightGray" kind="regularBold">
          {label}
        </Text>
        <QuestionIcon>
          <span className="material-icons">question_mark</span>
          <div className="tooltip">{message}</div>
        </QuestionIcon>
      </Flex>
      <Flex direction="row">
        <Wrapper>
          <Controller
            name={name}
            render={() => (
              <BaseTextInput
                {...props}
                colorName="white"
                name={name}
                onChange={handleOnChange}
                onKeyDown={handleEvent}
                placeholderTextColor="inputPlaceholder"
                value={currentTag || ""}
              />
            )}
            rules={rules}
          />
        </Wrapper>
        <AddTagButton onClick={handleEvent}>
          <Text color="lightGray" kind="regular">
            Add Tag
          </Text>
          <span className="material-icons" style={{ fontSize: 16 }}>
            add
          </span>
        </AddTagButton>
      </Flex>

      <Flex direction="row" grow={0} pt={8} shrink={1} wrap="wrap">
        {tags?.map((tag) => (
          <Flex key={tag} pr={4} pt={4}>
            <Flex
              align="center"
              background="white"
              borderRadius={12}
              direction="row"
              px={8}
              py={4}
            >
              <Flex>
                <Text color="black">{tag}</Text>
              </Flex>

              <CloseButton onClick={() => handleTagRemove(tag)}>
                <span className="material-icons">close</span>
              </CloseButton>
            </Flex>
          </Flex>
        ))}
      </Flex>

      {error && (
        <Flex pl={4} pt={8} shrink={1}>
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
    </Flex>
  );
};

const CloseButton = styled(Flex)`
  cursor: pointer;

  span {
    font-size: 12px;
    color: ${colors.black};
  }
`;

const AddTagButton = styled(Flex).attrs({
  align: "center",
  borderRadius: 8,
  borderSize: 1,
  direction: "row",
  px: 8,
  py: 8,
})`
  border-color: ${colors.gray500};
  cursor: pointer;
  color: ${colors.lightGray};
`;

const QuestionIcon = styled(Flex).attrs({})`
  cursor: default;
  margin-left: 4px;
  position: relative;

  span {
    color: ${colors.secondaryText4};
    font-size: 12px;
  }

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
    width: 250px;
  }

  &:hover .tooltip {
    visibility: visible;
  }
`;
