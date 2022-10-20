import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { ColorName, colors } from "~/utils/colors";

const messages = [
  "Searching Podcast Index",
  "Searching YouTube",
  "Searching Twitter Spaces",
  "Finding Transcripts",
  "Loading Audio Clips",
  "Loading Video Clips",
  "Preparing Results",
];

type Props = {
  color?: ColorName;
};

export const Loader = ({ color = "white" }: Props) => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (msgIndex === messages.length - 1) {
      return;
    }

    const messageTimeout = setTimeout(
      () => setMsgIndex((index) => (index + 1) % messages.length),
      1000
    );

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(messageTimeout);
  }, [msgIndex]);

  return (
    <Flex align="center" grow={1} justify="center">
      <Flex align="center" py={8}>
        <Text color="textPrimary" kind="mediumBold">
          {messages[msgIndex]}...
        </Text>
      </Flex>

      <Flex pt={20}>
        <ClipLoader color={colors[color]} loading size={26} />
      </Flex>
    </Flex>
  );
};