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
`

export const SuccessNotify = (isAdmin?: boolean, type?: string) => {
  let toastMessage = ''
  const toastId = 'uniqueToastId'

  switch (type) {
    case 'source':
      toastMessage = 'Source Added'
      break
    case 'addContent':
      toastMessage = 'Content Submitted'
      break
    case 'additem':
      if (isAdmin) {
        toastMessage = 'Item Added'
      }

      break
    case 'edge':
      toastMessage = 'Link Created'
      break
    default:
      toastMessage = 'Success'
  }

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
