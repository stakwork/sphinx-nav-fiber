import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelectedNode } from "~/stores/useDataStore";
import { api } from "~/network/api";
import { colors } from "~/utils/colors";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { Text } from "~/components/common/Text";
import { useAppStore } from "~/stores/useAppStore";

const ErrorWrapper = styled(Flex)`
  padding: 10px;
  border-bottom: 1px solid ${colors.divider2};
`;

const ErrorMsgWrapper = styled.textarea`
  resize: none;
  margin-bottom: 5px;
`;

type UserErrResponse = {
  error?: { message?: string };
};

export const ErrorSection = () => {
  const selectedNode = useSelectedNode();
  const [userErrorMsg, setUserErrorMsg] = useState("");
  const [userNotification, setUserNotification] = useState("");
  const setFlagErrorOpen = useAppStore((s) => s.setFlagErrorOpen);

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

  return (
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
  );
};
