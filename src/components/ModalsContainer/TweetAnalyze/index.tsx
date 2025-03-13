import { FC } from 'react'
import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'

export const TweetAnalyze: FC = () => {
  const { close, visible } = useModal('tweetAnalyze')

  const handleClose = () => {
    close()
  }

  return (
    <BaseModal
      data-testid="tweet-analyze-modal"
      id="tweetAnalyze"
      kind="full"
      noWrap
      onClose={handleClose}
      preventOutsideClose
    >
      {visible && <Body />}
    </BaseModal>
  )
}
