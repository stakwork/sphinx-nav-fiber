import styled from "styled-components";
import { colors } from "~/utils/colors";
import { useState } from "react";
import { Button } from "~/components/Button";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { useFormContext } from "react-hook-form";

type GuestObject = {
  guestName: string;
  twitterHandle: string;
  profilePicture: string;
};

type FieldValues = Record<string, any>;

type Props = {
  getVals: () => FieldValues;
  openPreview: () => void;
};

type Fields = { guestHandles: GuestObject[] | undefined };

const name = "guestHandles";

export const GuestHandle = ({ getVals, openPreview }: Props) => {
  const { setValue, getValues } = useFormContext<Fields>();
  const [currentGuestHandle, setCurrentGuestHandle] = useState({});
  const guestHandles = getValues(name);

  const handleGuestAdd = () => {
    const { guestName, twitterHandle, profilePicture } = getVals();

    if (!guestName) {
      console.log("no guest name");
    } else {
      const guestObject = {
        guestName,
        profilePicture: profilePicture || "",
        twitterHandle: twitterHandle || "",
      };

      setValue(name, [...(guestHandles || []), guestObject]);
      setCurrentGuestHandle(guestObject);

      console.log("guest added");
    }
  };

  return (
    <Flex align="center" direction="row" pl={16} pt={8}>
      <Button kind="small" onClick={handleGuestAdd} type="button">
        Add guest
      </Button>

      {guestHandles && guestHandles.length > 0 && (
        <GuestMarker num={guestHandles.length} openPreview={openPreview} />
      )}
    </Flex>
  );
};

type GuestMarkerProps = {
  num: number;
  openPreview: () => void;
};

const GuestMarker = ({ num, openPreview }: GuestMarkerProps) => (
  <Flex pl={12}>
    <Marker onClick={openPreview}>
      <Text color="white">{num}</Text>
      <Flex>
        <span className="material-icons">arrow_drop_up</span>
      </Flex>
    </Marker>
  </Flex>
);

const Marker = styled(Flex).attrs({
  direction: "row",
  px: 4,
})`
  cursor: pointer;

  span {
    color: ${colors.white};
  }
`;
