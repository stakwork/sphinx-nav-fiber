import clsx from 'clsx'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils/colors'

type Props = {
  fullSize?: boolean
}

export const Preloader = ({ fullSize = true }: Props) => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)

  return (
    <Loader align="center" className={clsx({ 'sidebar-is-open': sidebarIsOpen && !fullSize })} justify="center">
      <ClipLoader color={colors.SECONDARY_BLUE} size={64} />
    </Loader>
  )
}

const Loader = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${colors.black};
  z-index: 1;

  &.sidebar-is-open {
    span {
      margin-left: -390px;
    }
  }
`
