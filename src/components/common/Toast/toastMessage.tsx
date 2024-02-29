import { MdCheckCircle, MdWarning } from 'react-icons/md'
import { ToastContentProps, TypeOptions, toast } from 'react-toastify'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Text } from '~/components/common/Text'
import { BOOST_ERROR_BUDGET, NODE_ADD_SUCCESS } from '~/constants'
import { colors } from '~/utils/colors'

type Props = ToastContentProps & {
  message: string
}

const topupFromToast = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await sphinx.topup()

    if (!res) {
      throw new Error('Topup failed')
    }

    if (res.budget < 5) {
      throw new Error('You set a budget of less than 5 sats')
    } else {
      toast(<ToastMessage message={`You set a budget of ${res.budget} sats`} />, {
        icon: false,
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'success',
      })
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      toast(<ToastMessage message={err.message} />, {
        icon: false,
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'error',
      })
    }
  }
}

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
    )
  }

  return <div>{message}</div>
}

export const notify = (message: string, type?: TypeOptions) => {
  toast(<ToastMessage message={message} />, {
    icon:
      message === NODE_ADD_SUCCESS ? (
        <MdCheckCircle color={colors.primaryGreen} />
      ) : (
        <MdWarning color={colors.primaryRed} />
      ),
    position: toast.POSITION.BOTTOM_CENTER,
    type: type || message === NODE_ADD_SUCCESS ? 'success' : 'error',
  })
}

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
`
