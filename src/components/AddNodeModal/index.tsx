import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { TextArea } from "~/components/AddNodeModal/TextArea";
import { TextInput } from "~/components/AddNodeModal/TextInput";
import { Button } from "~/components/Button";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { BaseModal } from "~/components/Modal";
import { useModal } from "~/stores/useModalStore";
import { colors } from "~/utils/colors";

const CloseButton = styled(Flex)`
  cursor: pointer;

  span {
    font-size: 24px;
    color: ${colors.white};
  }
`;

const requiredRule = {
  required: {
    message: "The field is required",
    value: true,
  },
};

const CheckboxMessageWrapper = styled(Flex)`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;

  cursor: pointer;
`;

export const AddNodeModal = () => {
  const { close } = useModal("addNode");
  const [includePubkey, setIncludePubkey] = useState(false);

  const form = useForm({ mode: "onChange" });

  const handleToggle = () => setIncludePubkey((value) => !value);

  const onSubmit = form.handleSubmit((data) => console.log(data));

  return (
    <BaseModal id="addNode">
      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <Flex align="center" direction="row" justify="space-between" pb={32}>
            <Text kind="bigHeadingBold">Add Node</Text>

            <CloseButton onClick={close}>
              <span className="material-icons">close</span>
            </CloseButton>
          </Flex>

          <Flex>
            <TextInput
              label="Link"
              name="link"
              placeholder="Paste your link here..."
              rules={requiredRule}
            />
          </Flex>

          <Flex direction="row" pt={16}>
            <Flex basis="50%" pr={16}>
              <TextInput
                label="Start Time"
                name="startTime"
                placeholder="00:00:00"
                rules={{
                  pattern: {
                    message: "The start time should be a time string",
                    value: /\d{2}:\d{2}:\d{2}/,
                  },
                  ...requiredRule,
                }}
              />
            </Flex>

            <Flex basis="50%" pl={16}>
              <TextInput
                label="End Time"
                name="endTime"
                placeholder="00:00:00"
                rules={{
                  pattern: {
                    message: "The end time should be a time string",
                    value: /\d{2}:\d{2}:\d{2}/,
                  },
                  ...requiredRule,
                }}
              />
            </Flex>
          </Flex>

          <Flex pt={16}>
            <TextArea
              label="Clip Description"
              name="description"
              rules={requiredRule}
            />
          </Flex>

          <Flex align="center" direction="row" pt={16}>
            <input
              checked={includePubkey}
              onChange={() => handleToggle()}
              type="checkbox"
            />

            <CheckboxMessageWrapper onClick={handleToggle} pl={4}>
              <Text>Include your public key?</Text>
            </CheckboxMessageWrapper>
          </Flex>

          {includePubkey && (
            <Flex pt={16}>
              <TextInput
                label="Public Key"
                name="publicKey"
                placeholder="Your public key address"
                rules={requiredRule}
              />
            </Flex>
          )}

          <Flex align="flex-end" pt={32}>
            <Button kind="big" type="submit">
              Add node
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </BaseModal>
  );
};
