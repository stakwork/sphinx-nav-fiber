/* eslint-disable react/button-has-type */
import { MdCheckCircle } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { NODE_ADD_SUCCESS } from '~/constants'
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
`

export const SuccessNotify = (message: string) =>
  toast(
    <StyledDiv>
      <MdCheckCircle color={colors.white} fontSize={24} />
      {message === NODE_ADD_SUCCESS ? 'Source Submitted!' : null}
    </StyledDiv>,
  )

export const Toast = () => (
  <div>
    <StyledContainer hideProgressBar position="top-right" />
  </div>
)
