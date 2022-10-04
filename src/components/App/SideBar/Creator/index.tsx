import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { api } from "~/network/api";
import { colors } from "~/utils/colors";
import { useEffect, useMemo, useState } from "react";
import { Divider } from "~/components/common/Divider";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { Pill } from "~/components/common/Pill";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { getSelectedNodeTimestamps } from "~/utils/getSelectedNodeTimestamps";
import { useAppStore } from "~/stores/useAppStore";
import { Relevance } from "../Relevance";
import { Heading } from "./Heading";
import { Timestamp } from "./Timestamp";

const ErrorWrapper = styled(Flex)`
  height: 30%;
  padding: 10px;
`;

const ErrorMsgWrapper = styled.textarea`
  resize: none;
  margin-bottom: 5px;
`;

type UserErrResponse = {
  error?: { message?: string };
};

export const Creator = () => {
  const data = useGraphData();
  const selectedNode = useSelectedNode();

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode]
  );

  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp);

  const [flagErrorIsOpen, setFlagErrorOpen] = useAppStore((s) => [
    s.flagErrorIsOpen,
    s.setFlagErrorOpen,
  ]);

  const [userErrorMsg, setUserErrorMsg] = useState("");
  const [userNotification, setUserNotification] = useState("");

  const submitUserError = async () => {
    const body = {
      content_node_ref_id: selectedNode?.ref_id,
      message: userErrorMsg,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const trySphinx = await sphinx.enable(true);

    if (!trySphinx) {
      console.log("Sphinx enable failed");
    }

    try {
      const res: UserErrResponse = await api.post(
        "/prediction/feedback",
        JSON.stringify(body)
      );

      if (res.error) {
        const { message } = res.error;

        throw new Error(message);
      }

      setUserErrorMsg("");
      setUserNotification("Sent successfully");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setUserNotification(err.message || "Failed to send");
      }
    }
  };

  useEffect(() => {
    if (!userErrorMsg) {
      setUserNotification("");
    }
  }, [userErrorMsg]);

  useEffect(() => {
    if (selectedNodeTimestamps?.length) {
      setSelectedTimestamp(selectedNodeTimestamps[0]);
    }
  }, [selectedNodeTimestamps, setSelectedTimestamp]);

  if (!selectedNode) {
    return null;
  }

  return (
    <>
      <Heading />

      {flagErrorIsOpen && (
        <ErrorWrapper>
          <Flex align="center" justify="center" p={6}>
            <Text color="white" kind="medium">
              Report Error
            </Text>
          </Flex>
          <ErrorMsgWrapper
            cols={1}
            onChange={(e) => {
              const { value } = e.target;

              setUserErrorMsg(value);
            }}
            placeholder="flag incorrect information (misspelled words, etc)"
            rows={10}
            value={userErrorMsg}
          />
          <Flex direction="row" justify="flex-end" p={8}>
            {userNotification && (
              <Flex
                justify="center"
                pb={3}
                style={{
                  color:
                    userNotification === "Sent successfully"
                      ? colors.green400
                      : "#FF8F80",
                  marginRight: "20px",
                }}
              >
                {userNotification}
              </Flex>
            )}

            <Pill disabled={!userErrorMsg} onClick={submitUserError}>
              Send
            </Pill>
            <Pill
              onClick={() => {
                setFlagErrorOpen(false);
                setUserErrorMsg("");
              }}
            >
              Cancel
            </Pill>
          </Flex>
        </ErrorWrapper>
      )}

      {!!selectedNodeTimestamps?.length && (
        <>
          <Flex pb={20}>
            {selectedNodeTimestamps?.map((timestamp, index) => (
              <Timestamp
                // eslint-disable-next-line react/no-array-index-key
                key={`${timestamp.episode_title}_${index}`}
                onClick={() => setSelectedTimestamp(timestamp)}
                timestamp={timestamp}
              />
            ))}
          </Flex>

          <Divider />
        </>
      )}

      <Relevance
        header={
          <Flex px={20} py={16}>
            <Text kind="medium">More like this...</Text>
          </Flex>
        }
      />
    </>
  );
};
