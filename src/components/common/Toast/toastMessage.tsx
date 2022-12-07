import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { BOOST_ERROR_BUDGET } from "~/constants";
import { colors } from "~/utils/colors";
import { Text } from "~/components/common/Text";
import { ToastContentProps, toast } from "react-toastify";

type Props = ToastContentProps & {
  message: string;
  toastProps: any;
};

const topupFromToast = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await sphinx.topup();

    if (!res) {
      throw new Error("Topup failed");
    }

    if (res.budget < 5) {
      throw new Error("You set a budget of less than 5 sats");
    } else {
      toast(
        <ToastMessage message={`You set a budget of ${res.budget} sats`} />,
        {
          icon: false,
          position: toast.POSITION.BOTTOM_CENTER,
          type: "success",
        }
      );
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      toast(<ToastMessage message={err.message} />, {
        icon: false,
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
      });
    }
  }
};

export const ToastMessage = ({ message }: Partial<Props>) => {
  if (message === BOOST_ERROR_BUDGET) {
    return (
      <div>
        {message}
        <ButtonWrapper onClick={topupFromToast} type="button">
          <Text color="white" kind="medium">
            Topup
          </Text>
        </ButtonWrapper>
      </div>
    );
  }

  return <div>{message}</div>;
};

const ButtonWrapper = styled.button`
  background: ${colors.gray200};
  border: 1px solid ${colors.white};
  border-radius: 2px;
  margin: 10px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.gray300};
  }
`;
