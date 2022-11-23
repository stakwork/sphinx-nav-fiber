import { KeyboardEvent, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { BaseTextInput, BaseTextInputProps } from "~/components/BaseTextInput";
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

type Props = Omit<BaseTextInputProps, "name"> & {
  label: string;
};

type Fields = { tags: string[] | undefined };

const name = "tags";

export const TagInput = ({ label, ...props }: Props) => {
  const { setValue, getValues } = useFormContext<Fields>();

  const [currentTag, setCurrentTag] = useState("");
  const tags = getValues(name);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") {
        return;
      }

      e.preventDefault();

      if (!currentTag.trim()) {
        return;
      }

      // Removes duplicates
      const tagsSet = new Set([...(tags || []), currentTag]);

      setValue(name, [...tagsSet]);

      setCurrentTag("");
    },
    [currentTag, setValue, tags]
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
      <Flex pb={4} pl={4}>
        <Text color="lightGray" kind="regularBold">
          {label}
        </Text>
      </Flex>
      <Wrapper>
        <BaseTextInput
          {...props}
          colorName="white"
          name={name}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          placeholderTextColor="inputPlaceholder"
          value={currentTag || ""}
        />
      </Wrapper>

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
