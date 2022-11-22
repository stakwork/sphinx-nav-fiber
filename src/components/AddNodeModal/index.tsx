import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { TagInput } from "~/components/AddNodeModal/TagInput";
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

const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

export const AddNodeModal = () => {
  const { close } = useModal("addNode");

  const form = useForm({ mode: "onChange" });

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
                    value: timeRegex,
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
                    value: timeRegex,
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

          <Flex pt={16}>
            <TagInput label="Tags" placeholder="Add a tag and press Enter" />
          </Flex>

          <Flex pt={32} px={4}>
            <Text color="lightGray" kind="tinyBold">
              Your pubkey will be submitted with your node, so you can recieve
              sats that your node earns.
            </Text>
          </Flex>

          <Flex pt={8}>
            <Button kind="big" type="submit">
              Add node
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </BaseModal>
  );
};
