import { Button } from '@mui/material'
import styled from 'styled-components'
import MenuIcon from '~/components/Icons/MenuIcon'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils'

export const UniverseQuestionControl = () => {
  const { setUniverseQuestionIsOpen, setSidebarOpen, setShowCollapseButton } = useAppStore((s) => ({
    setUniverseQuestionIsOpen: s.setUniverseQuestionIsOpen,
    setSidebarOpen: s.setSidebarOpen,
    setShowCollapseButton: s.setShowCollapseButton,
  }))

  const handleOpenChatModal = () => {
    setUniverseQuestionIsOpen()
    setSidebarOpen(false)
    setShowCollapseButton(false)
  }

  return (
    <StyledButton
      color="secondary"
      href=""
      onClick={handleOpenChatModal}
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
      margin-left: 2px;
      color: ${colors.white};
    }
  }
`
