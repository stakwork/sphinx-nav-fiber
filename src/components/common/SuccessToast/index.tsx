import { MdCheckCircle } from 'react-icons/md'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { colors } from '~/utils/colors'

const StyledDiv = styled.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const SuccessNotify = (message?: string) => {
  const toastMessage = message || 'Success'
  const toastId = 'uniqueToastId'

  if (!toast.isActive(toastId)) {
    toast.success(
      <StyledDiv>
        <MdCheckCircle color={colors.white} fontSize={24} />
        {toastMessage}
      </StyledDiv>,
      {
        toastId,
        autoClose: 5000,
        icon: false,
        closeButton: false,
      },
    )
  }
}
