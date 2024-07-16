import { Button } from '@mui/material'
import styled from 'styled-components'
import MenuIcon from '~/components/Icons/MenuIcon'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils'

export const UniverseQuestionControl = () => {
  const setUniverseQuestionIsOpen = useAppStore((s) => s.setUniverseQuestionIsOpen)

  return (
    <StyledButton
      color="secondary"
      href=""
      onClick={() => setUniverseQuestionIsOpen()}
      size="medium"
      startIcon={<MenuIcon />}
      variant="contained"
    />
  )
}

const StyledButton = styled(Button)`
  && {
    padding: 0;
    width: 32px;
    border-radius: 50%;
    min-width: auto;
    justify-content: center;
    align-items: center;
    pointer-events: all;
    margin-right: 8px;

    .MuiButton-startIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2px;
      color: ${colors.white};
    }
  }
`
