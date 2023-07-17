import { styled } from '@mui/material'
import { useEffect, useRef } from 'react'
import { SiriLikeButton } from '~/components/common/SiriLikeButton'
import { useAppStore } from '~/stores/useAppStore'
import { createBtn } from '../../common/SiriLikeButton/createBtn'
import { useHelper } from './context'

export const OpenHelperBtn = () => {
  const { setIsShow } = useHelper()
  const [sidebarIsOpen] = useAppStore((s) => [s.sidebarIsOpen])
  const ref = useRef<HTMLCanvasElement>(null)
  const searchTerm = useAppStore((s) => s.currentSearch)

  useEffect(() => {
    const destroy = createBtn(ref)

    return () => {
      destroy?.()
    }
  }, [])

  if (!searchTerm) {
    return null
  }

  return (
    <FabContainer sidebarIsOpen={sidebarIsOpen}>
      <SiriLikeButton onClick={() => setIsShow((s) => !s)} />
    </FabContainer>
  )
}

const FabContainer = styled('div')<{ sidebarIsOpen: boolean }>(({ sidebarIsOpen, theme }) => ({
  position: 'absolute',
  bottom: '2rem',
  transition: theme.transitions.create(['right']),
  right: sidebarIsOpen ? 'calc((100% - 400px) / 2)' : '50%',
  transform: 'translate(50%)',
}))
