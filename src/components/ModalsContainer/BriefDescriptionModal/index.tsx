import { FC } from 'react'
import { create } from 'zustand'
import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Trending } from '~/types'
import { BriefDescriptionContent } from './BriefDescriptionContent'

type BriefDescriptionStore = {
  trend: Trending | null
  setTrend: (trend: Trending | null) => void
}

export const useBriefDescriptionStore = create<BriefDescriptionStore>((set) => ({
  trend: null,
  setTrend: (trend) => set({ trend }),
}))

export const BriefDescription: FC = () => {
  const { close } = useModal('briefDescription')
  const { trend, setTrend } = useBriefDescriptionStore()

  const handleClose = () => {
    setTrend(null)
    close()
  }

  if (!trend) {
    return null
  }

  return (
    <BaseModal
      data-testid="brief-description-modal"
      id="briefDescription"
      kind="regular"
      noWrap
      onClose={handleClose}
      preventOutsideClose
    >
      <BriefDescriptionContent onClose={handleClose} trend={trend} />
    </BaseModal>
  )
}
