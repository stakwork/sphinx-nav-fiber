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

type Fields = { hostNames: string[] | undefined };

const name = "hostNames";

export const NameInput = ({ label, ...props }: Props) => {
  const { setValue, getValues } = useFormContext<Fields>();

  const [currentHostName, setCurrentHostName] = useState("");
  const hostNames = getValues(name);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") {
        return;
      }

      e.preventDefault();

      if (!currentHostName.trim()) {
        return;
      }

      // Removes duplicates
      const hostNamesSet = new Set([...(hostNames || []), currentHostName]);

      setValue(name, [...hostNamesSet]);

      setCurrentHostName("");
    },
    [currentHostName, setValue, hostNames]
  );

  const handleNameRemove = useCallback(
    (hostName: string) => {
      if (!hostNames) {
        return;
      }

      const targetIndex = hostNames.findIndex((t) => t === hostName);

      hostNames.splice(targetIndex, 1);

      setValue(name, [...hostNames], {
        shouldValidate: true,
      });
    },
    [setValue, hostNames]
  );

  const handleOnChange = useCallback(
    (v: string) => {
      setCurrentHostName(v);
    },
    [setCurrentHostName]
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
          value={currentHostName || ""}
        />
      </Wrapper>

      <Flex direction="row" grow={0} pt={8} shrink={1} wrap="wrap">
        {hostNames?.map((hostName) => (
          <Flex key={hostName} pr={4} pt={4}>
            <Flex
              align="center"
              background="white"
              borderRadius={12}
              direction="row"
              px={8}
              py={4}
            >
              <Flex>
                <Text color="black">{hostName}</Text>
              </Flex>

              <CloseButton onClick={() => handleNameRemove(hostName)}>
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
