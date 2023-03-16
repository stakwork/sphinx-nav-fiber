import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { MdClose, MdInfo } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { TextArea } from "~/components/AddNodeModal/TextArea";
import { TextInput } from "~/components/AddNodeModal/TextInput";
import { Button } from "~/components/Button";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { BaseModal } from "~/components/Modal";
import { isDevelopment, NODE_ADD_ERROR, NODE_ADD_SUCCESS } from "~/constants";
import { api } from "~/network/api";
import { useModal } from "~/stores/useModalStore";
import { colors } from "~/utils/colors";
import { getLSat } from "~/utils/getLSat";
import { timeToMilliseconds } from "~/utils/timeToMilliseconds";
import { ToastMessage } from "../common/Toast/toastMessage";
import { TagInput } from "./TagInput";

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
  /^(https:\/\/twitter.com\/[a-zA-Z0-9_]\/spaces\/.*)|(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)|(https?|ftp|file):\/\/(www.)?(.*?)\.(mp3)?$/;

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

const handleSubmit = async (
  data: FieldValues,
  close: () => void,
  reset: () => void,
  withTimeStamps: boolean
) => {
  const body: { [index: string]: unknown } = {
    media_url: data.link,
    ...(withTimeStamps
      ? {
          job_response: {
            tags: [
              {
                description: data.description,
                "end-time": timeToMilliseconds(data.endTime),
                "start-time": timeToMilliseconds(data.startTime),
                tag: data.tags?.join(", "),
              },
            ],
          },
        }
      : {}),
  };

  let lsatToken;

  if (!isDevelopment) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const enable = await sphinx.enable();

    body.pubkey = enable?.pubkey;

    lsatToken = await getLSat("adding_node");

    if (!lsatToken) {
      throw new Error("An error occured calling getLSat");
    }
  }

  try {
    const res: SubmitErrRes = await api.post(
      "/add_node",
      JSON.stringify(body),
      {
        Authorization: lsatToken,
      } as HeadersInit
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
  const [enableTimestamps, setEnableTimestamps] = useState(false);

  const form = useForm({ mode: "onSubmit" });

  const { reset, watch } = form;

  const { isSubmitting, errors } = form.formState;

  const onSubmit = form.handleSubmit(async (data) => {
    await handleSubmit(data, close, reset, enableTimestamps);
  });

  const startTime = watch("startTime");

  return (
    <BaseModal id="addNode" preventOutsideClose>
      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <Flex align="center" direction="row" justify="space-between" pb={32}>
            <Flex align="center" direction="row">
              <Text kind="bigHeadingBold">Add Content</Text>
              <InfoIcon role="tooltip" tabIndex={0}>
                <MdInfo />

                <div className="tooltip">{mainInfoMessage}</div>
              </InfoIcon>
            </Flex>

            {Object.keys(errors).length !== 0 && (
              <ErrorAlert data-test="add-node-error-alert" role="alert">
                {Object.keys(errors).length}
                {Object.keys(errors).length > 1 ? " errors" : " error"}
              </ErrorAlert>
            )}

            <CloseButton
              data-test="add-node-close-button"
              onClick={close}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  close();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <MdClose color="white" />
            </CloseButton>
          </Flex>

          <Flex>
            <TextInput
              id="add-node-link"
              label="Link"
              message="Paste a valid YouTube or Twitter Space link here."
              name="link"
              placeholder="Paste your link here..."
              rules={{
                ...requiredRule,
                pattern: {
                  message:
                    "You must enter a valid YouTube, Twitter Space or mp3 link.",
                  value: twitterOrYoutubeRegex,
                },
              }}
            />
          </Flex>

          <Flex direction="row" pt={12}>
            <CheckBoxWrapper>
              Add timestamps
              <button
                className="checkbox"
                onClick={() => setEnableTimestamps(!enableTimestamps)}
                type="button"
              >
                {enableTimestamps && <FaCheck color={colors.lightBlue500} />}
              </button>
            </CheckBoxWrapper>
          </Flex>

          {enableTimestamps && (
            <>
              <Flex direction="row" pt={12}>
                <Flex basis="50%" pr={16}>
                  <TextInput
                    id="add-node-start-time"
                    label="Start Time"
                    mask="99:99:99"
                    message="Enter start and end timestamps which will encompass the segment of video or audio you want to submit. [hh:mm:ss]"
                    name="startTime"
                    placeholder="00:00:00"
                    rules={{
                      pattern: {
                        message: "Timestamp must be in the format hh:mm:ss",
                        value: timeRegex,
                      },
                      ...{ ...requiredRule, required: enableTimestamps },
                    }}
                  />
                </Flex>

                <Flex basis="50%" pl={16}>
                  <TextInput
                    id="add-node-end-time"
                    label="End Time"
                    mask="99:99:99"
                    message="Enter start and end timestamps which will encompass the segment of video or audio you want to submit. [hh:mm:ss]"
                    name="endTime"
                    placeholder="00:00:00"
                    rules={{
                      pattern: {
                        message: "Timestamp must be in the format hh:mm:ss",
                        value: timeRegex,
                      },
                      validate: {
                        endTime: (value) =>
                          value > (startTime || "00:00:00") ||
                          "End time should be greater than start time",
                      },
                      ...{ ...requiredRule, required: enableTimestamps },
                    }}
                  />
                </Flex>
              </Flex>

              <Flex pt={12}>
                <TextArea
                  id="add-node-description"
                  label="Clip Description"
                  maxLength={100}
                  message="Enter a short description of your audio/video segment. Think of this as the title of your node. [max 100 characters]"
                  name="description"
                  rules={{ ...requiredRule, required: enableTimestamps }}
                />
              </Flex>

              <Flex pt={12}>
                <TagInput
                  id="add-node-tags"
                  label="Tags"
                  maxLength={50}
                  message="Enter some topic tags that capture the main ideas of your segment. Be specific! Generic tags aren't useful for anyone. Think, 'What term(s) would someone search to find my node? [max: 15, max characters per tag: 50]"
                  rules={tagRule}
                />
              </Flex>
            </>
          )}

          <Flex pt={16} px={4} tabIndex={0}>
            <Text color="lightGray" kind="tinyBold">
              Your pubkey will be submitted with your node, so you can receive
              sats that your node earns.
            </Text>
          </Flex>

          <Flex pt={8}>
            {isSubmitting ? (
              <SubmitLoader>
                <ClipLoader color={colors.white} size={20} />
              </SubmitLoader>
            ) : (
              <Button
                disabled={isSubmitting}
                id="add-node-submit-cta"
                kind="big"
                type="submit"
              >
                Add content
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

  svg {
    font-size: 24px;
    color: ${colors.white};
  }
`;

const InfoIcon = styled(Flex)`
  cursor: default;
  padding: 8px;
  position: relative;

  svg {
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

  &:focus .tooltip {
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

const CheckBoxWrapper = styled.div`
  color: ${colors.lightGray};
  font-size: 14px;
  font-weight: 600;
  display: flex;

  .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid ${colors.lightBlue400};
    margin-left: 16px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    padding: 0;
  }
`;

// hidden to the side so it doesn't affect the layout
const ErrorAlert = styled(Text).attrs({
  color: "secondaryRed",
  kind: "tinyBold",
})`
  position: relative;
  left: 50%;
`;
