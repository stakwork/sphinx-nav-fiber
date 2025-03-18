import { FC } from 'react'
import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'

type Props = {
  tweetId: string
}

export const TweetAnalyze: FC<Props> = ({ tweetId }) => {
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
      {visible && <Body tweetId={tweetId} />}
    </BaseModal>
  )
}
