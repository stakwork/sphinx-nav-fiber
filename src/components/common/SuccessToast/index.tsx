import { MdCheckCircle } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { colors } from '~/utils/colors'

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #49c998ff;
    color: white;
    font-weight: 500;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    opacity: 200;
    font-family: Barlow;
    position: absolute;
    top: 60px;
    right: 35px;
  }
  .Toastify__close-button {
    display: none;
  }
`

const StyledDiv = styled.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .Toastify__toast {
    background-color: #49c998ff;
    color: white;
    font-weight: 500;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    opacity: 200;
    font-family: Barlow;
    position: absolute;
    top: 60px;
    right: 35px;
  }
  .Toastify__close-button {
    display: none;
  }
`

export const SuccessNotify = (message?: string) => {
  const toastMessage = message || 'Success'
  const toastId = 'uniqueToastId'

  if (!toast.isActive(toastId)) {
    toast(
      <StyledDiv>
        <MdCheckCircle color={colors.white} fontSize={24} />
        {toastMessage}
      </StyledDiv>,
      {
        toastId,
        autoClose: 5000,
      },
    )
  }
}

export const Toast = () => (
  <div>
    <StyledContainer hideProgressBar position="top-right" />
  </div>
)
