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

const twitterOrYoutubeRegex =
  /^(https:\/\/twitter.com\/[a-zA-Z0-9_]\/spaces\/.*)|(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

const mainInfoMessage =
  'Come across an interesting or useful part of a video or audio you\'d like to share? You can add it to the knowledge graph here!\n\nEnter a valid link to the YouTube video or Twitter Space you were watching, choose a start and end timestamp to encompass the segment you found interesting or useful, provide a brief description of what the segment is about, and add topic tags that are relevant to the segment. Hit "Add node", and your clip will be added to the graph shortly.\n\nYour pubkey will be submitted with your clip, and any boosts your clip receives will go to you!';

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

const handleSubmit = async (data: FieldValues, close: () => void, reset: () => void) => {
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
    const res: SubmitErrRes = await api.post("/add_node", JSON.stringify(body), { Authorization: lsatToken });

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
            <Flex align="center" direction="row">
              <Text kind="bigHeadingBold">Add Node</Text>
              <InfoIcon>
                <span className="material-icons-outlined">info</span>
                <div className="tooltip">{mainInfoMessage}</div>
              </InfoIcon>
            </Flex>

            <CloseButton onClick={close}>
              <span className="material-icons">close</span>
            </CloseButton>
          </Flex>

          <Flex>
            <TextInput
              label="Link"
              message="Paste a valid YouTube or Twitter Space link here."
              name="link"
              placeholder="Paste your link here..."
              rules={{
                ...requiredRule,
                pattern: {
                  message: "You must enter a valid YouTube or Twitter Space link.",
                  value: twitterOrYoutubeRegex,
                },
              }}
            />
          </Flex>

          <Flex direction="row" pt={12}>
            <Flex basis="50%" pr={16}>
              <TextInput
                label="Start Time"
                message="Enter start and end timestamps which will encompass the segment of video or audio you want to submit."
                name="startTime"
                placeholder="00:00:00"
                rules={{
                  pattern: {
                    message: "Timestamp must be in the format hh:mm:ss",
                    value: timeRegex,
                  },
                  ...requiredRule,
                }}
              />
            </Flex>

            <Flex basis="50%" pl={16}>
              <TextInput
                label="End Time"
                message="Enter start and end timestamps which will encompass the segment of video or audio you want to submit."
                name="endTime"
                placeholder="00:00:00"
                rules={{
                  pattern: {
                    message: "Timestamp must be in the format hh:mm:ss",
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
            <TextArea
              label="Clip Description"
              message="Enter a short description of your audio/video segment. Think of this as the title of your node."
              name="description"
              rules={requiredRule}
            />
          </Flex>

          <Flex pt={12}>
            <TagInput
              label="Tags"
              message="Enter some topic tags that capture the main ideas of your segment. Be specific! Generic tags aren't useful for anyone. Think, 'What term(s) would someone search to find my node?"
              rules={tagRule}
            />
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

const InfoIcon = styled(Flex)`
  cursor: default;
  padding: 8px;
  position: relative;

  span {
    font-size: 22px;
    color: ${colors.secondaryText4};
  }

  .tooltip {
    position: absolute;
    background-color: ${colors.dashboardHeader};
    border: 1px solid ${colors.secondaryText4};
    border-radius: 4px;
    color: ${colors.white};
    top: 40px;
    left: -142px;
    padding: 4px 8px;
    font-size: 13px;
    visibility: hidden;
    width: 470px;
    white-space: pre-wrap;
    z-index: 1;
  }

  span:hover + .tooltip {
    visibility: visible;
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
