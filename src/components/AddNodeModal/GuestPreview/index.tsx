import styled from "styled-components";
import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { colors } from "~/utils/colors";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { type } from "os";

type Props = {
  openPreview: () => void;
};

type GuestObject = {
  guestName: string;
  twitterHandle: string;
  profilePicture: string;
};

type Fields = { guestHandles: GuestObject[] | undefined };

const name = "guestHandles";

export const GuestPreview = ({ openPreview }: Props) => {
  const { setValue, getValues } = useFormContext<Fields>();

  const guests = getValues(name);

  const handleGuestRemove = useCallback(
    (guestName: string) => {
      if (!guests) {
        return;
      }

      const targetIndex = guests.findIndex((t) => t.guestName === guestName);

      if (targetIndex === -1) {
        return;
      }

      guests.splice(targetIndex, 1);

      setValue(name, guests);
      openPreview();
    },
    [guests, setValue, openPreview]
  );

  return (
    <Wrapper>
      <Flex align="flex-end">
        <CloseButton onClick={openPreview}>
          <span className="material-icons">close</span>
        </CloseButton>
      </Flex>
      {guests &&
        guests.length > 0 &&
        guests.map((guest) => (
          <Flex
            key={guest.guestName}
            direction="row"
            p={6}
            style={{ overflow: "auto" }}
          >
            <Flex p={6}>
              <Text>Name: {guest.guestName}</Text>
              <Text>Twitter: {guest.twitterHandle}</Text>
              <Text>Picture: {guest.profilePicture}</Text>
            </Flex>
            <DeleteButton onClick={() => handleGuestRemove(guest.guestName)}>
              <span className="material-icons">close</span>
            </DeleteButton>
          </Flex>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled(Flex).attrs({
  borderRadius: 8,
  borderSize: 1,
  p: 8,
})`
  background-color: ${colors.dashboardHeader};
  width: 88%;
  position: absolute;
  bottom: 182px;
`;

const DeleteButton = styled(Flex)`
  cursor: pointer;
  padding: 2px;

  span {
    font-size: 12px;
    color: ${colors.white};
  }
`;

const CloseButton = styled(Flex)`
  cursor: pointer;
  padding: 2px;

  span {
    font-size: 14px;
    color: ${colors.lightBlue500};
  }
`;


