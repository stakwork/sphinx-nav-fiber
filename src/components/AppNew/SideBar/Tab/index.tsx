import styled from 'styled-components'
import ChevronRightIcon from '~/components/Icons/ChevronRightIcon'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils/colors'

export const Tab = () => {
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)

  return (
    <ExpandButton
      onClick={() => {
        setSidebarOpen(true)
      }}
    >
      <ChevronRightIcon />
    </ExpandButton>
  )
}

const ExpandButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 8,
})(({ theme }) => ({
  backgroundColor: colors.BG1_NORMAL,
  cursor: 'pointer',
  transitionDuration: '0.2s',
  position: 'absolute',
  top: '50%',
  zIndex: 1,
  width: '24px',
  height: '48px',
  transform: 'translateY(-50%)',
  borderRadius: '0px 6px 6px 0px',
  boxShadow: '2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset',
  color: colors.white,

  [theme.breakpoints.up('sm')]: {
    left: '64px',
  },
  '&:hover': {
    backgroundColor: colors.BG1_HOVER,
  },
  '&:active': {
    backgroundColor: colors.BG1_PRESS,
    color: colors.GRAY6,
  },
}))
