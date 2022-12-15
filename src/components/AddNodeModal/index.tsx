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
import { ClipLoader } from "react-spinners";

const requiredRule = {
  required: {
    message: "The field is required",
    value: true,
  },
};

const tagRule = {
  required: {
    message: "You need to enter at least 1 topic tag to submit a node.",
    value: true,
  },
};

const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

const youtubeRegex =
  /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

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

  const form = useForm({ mode: "onBlur" });

  const { reset, watch } = form;

  const { isSubmitting } = form.formState;

  const onSubmit = form.handleSubmit(async (data) => {
    await handleSubmit(data, close, reset);
  });

  const startTime = watch("startTime");

  return (
    <BaseModal id="addNode" preventOutsideClose>
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
              rules={{
                ...requiredRule,
                pattern: {
                  message: "You must enter a valid YouTube or Twitter Space link.",
                  value: youtubeRegex,
                },
              }}
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
                  validate: {
                    endTime: (value) =>
                      value > (startTime || "00:00:00") || "End time should be greater than start time",
                  },
                  ...requiredRule,
                }}
              />
            </Flex>
          </Flex>

          <Flex pt={12}>
            <TextArea label="Clip Description" name="description" rules={requiredRule} />
          </Flex>

          <Flex pt={12}>
            <TagInput label="Tags" rules={tagRule} />
          </Flex>

          <Flex pt={16} px={4}>
            <Text color="lightGray" kind="tinyBold">
              Your pubkey will be submitted with your node, so you can receive sats that your node earns.
            </Text>
          </Flex>

          <Flex pt={8}>
            {isSubmitting ? (
              <SubmitLoader>
                <ClipLoader color={colors.white} size={20} />
              </SubmitLoader>
            ) : (
              <Button disabled={isSubmitting} kind="big" type="submit">
                Add node
              </Button>
            )}
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

const SubmitLoader = styled(Flex).attrs({
  align: "center",
  background: "primaryButton",
  borderRadius: 8,
  justify: "center",
})`
  padding: 16px 24px;
  opacity: 0.5;
`;
