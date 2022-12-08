import styled from "styled-components";
import * as sphinx from "sphinx-bridge-kevkevinpal";
import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { api } from "~/network/api";
import { TextArea } from "~/components/AddNodeModal/TextArea";
import { TextInput } from "~/components/AddNodeModal/TextInput";
import { TagInput } from "./TagInput";
import { Button } from "~/components/Button";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { BaseModal } from "~/components/Modal";
import { useModal } from "~/stores/useModalStore";
import { colors } from "~/utils/colors";
import { timeToSeconds } from "~/utils/timeToSeconds";
import { getLSat } from "~/utils/getLSat";
import { toast } from "react-toastify";
import { ToastMessage } from "../common/Toast/toastMessage";
import { NODE_ADD_SUCCESS, NODE_ADD_ERROR } from "~/constants";

const requiredRule = {
  required: {
    message: "The field is required",
    value: true,
  },
};

const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

type SubmitErrRes = {
  error?: { message?: string };
};

const notify = (message: string) => {
  toast(<ToastMessage message={message} />, {
    icon: false,
    position: toast.POSITION.BOTTOM_CENTER,
    type: message === NODE_ADD_SUCCESS ? "success" : "error",
  });
};

const handleSubmit = async (
  data: FieldValues,
  close: () => void,
  reset: () => void
) => {
  const body: { [index: string]: any } = {
    job_response: {
      tags: [
        {
          description: data.description,
          "end-time": timeToSeconds(data.endTime),
          "start-time": timeToSeconds(data.startTime),
          tag: data.tags?.join(", "),
        },
      ],
    },
    media_url: data.link,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const enable = await sphinx.enable();

  body.pubkey = enable?.pubkey;

  const lsatToken = await getLSat("adding_node");

  if (!lsatToken) {
    throw new Error("An error occured calling getLSat");
  }

  try {
    const res: SubmitErrRes = await api.post(
      "/add_node",
      JSON.stringify(body),
      { Authorization: lsatToken }
    );

    if (res.error) {
      const { message } = res.error;

      throw new Error(message);
    }

    notify(NODE_ADD_SUCCESS);
    close();
    reset();
  } catch (err: unknown) {
    if (err instanceof Error) {
      notify(NODE_ADD_ERROR);
      close();
    }
  }
};

export const AddNodeModal = () => {
  const { close } = useModal("addNode");

  const form = useForm({ mode: "onChange" });

  const { reset } = form;

  const { isSubmitting } = form.formState;

  const onSubmit = form.handleSubmit((data) => {
    handleSubmit(data, close, reset);
  });

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

          <Flex direction="row" pt={12}>
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

          <Flex pt={12}>
            <TextArea
              label="Clip Description"
              name="description"
              rules={requiredRule}
            />
          </Flex>

          <Flex pt={12}>
            <TagInput label="Tags" placeholder="Add a tag and press Enter" />
          </Flex>

          <Flex pt={16} px={4}>
            <Text color="lightGray" kind="tinyBold">
              Your pubkey will be submitted with your node, so you can recieve
              sats that your node earns.
            </Text>
          </Flex>

          <Flex pt={8}>
            <Button disabled={isSubmitting} kind="big" type="submit">
              Add node
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </BaseModal>
  );
};

const CloseButton = styled(Flex)`
  cursor: pointer;

  span {
    font-size: 24px;
    color: ${colors.white};
  }
`;
