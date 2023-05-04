import { useEffect, useState } from 'react'
import { MdBolt } from 'react-icons/md'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'
import { Flex } from '~/components/common/Flex'
import { Pill } from '~/components/common/Pill'
import { BOOST_ERROR_BUDGET, BOOST_SUCCESS } from '~/constants'
import { Node } from '~/types'
import { boost } from '~/utils/boost'
import { ToastMessage } from '../common/Toast/toastMessage'

type Props = {
  count?: number
  content?: Node | null
  refId?: string
  readOnly?: boolean
}

const notify = (message: string) => {
  toast(<ToastMessage message={message} />, {
    icon: false,
    position: toast.POSITION.BOTTOM_CENTER,
    type: message === BOOST_SUCCESS ? 'success' : 'error',
  })
}

export const Booster = ({ count, content, readOnly, refId }: Props) => {
  const [submitting, setSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    setIsSuccess(false)
    setSubmitting(false)
  }, [refId])

  let { image_url: imageUrl } = content || {}

  if (imageUrl) {
    imageUrl = imageUrl.replace('.jpg', '_l.jpg')
  }

  const defaultBoostAmount = 5

  async function doBoost() {
    if (submitting || !refId) {
      return
    }

    setSubmitting(true)

    // eslint-disable-next-line no-useless-catch
    try {
      await boost(refId, defaultBoostAmount)

      setIsSuccess(true)
      notify(BOOST_SUCCESS)
    } catch (e) {
      notify(BOOST_ERROR_BUDGET)
    }

    setSubmitting(false)
  }

  if (readOnly) {
    if (!count) {
      return null
    }

    return (
      <Pill className="booster__pill" style={{ padding: '1px 8px 1px 3px', width: 'fit-content' }}>
        <Flex align="center" direction="row" justify="center">
          <MdBolt fontSize={12} />
          <div style={{ fontSize: 10 }}>{count || 0}</div>
        </Flex>
      </Pill>
    )
  }

  return (
    <div>
      {isSuccess ? (
        <Flex align="center" direction="row" justify="center">
          <MdBolt color="#49c998" fontSize={20} />
        </Flex>
      ) : (
        <Pill
          disabled={isSuccess || submitting}
          onClick={() => {
            if (isSuccess || submitting) {
              return
            }

            doBoost()
          }}
          style={{ padding: '4px 8px', width: 'fit-content' }}
        >
          {submitting ? (
            <ClipLoader color="#fff" loading size={10} />
          ) : (
            <Flex align="center" direction="row" justify="center">
              <MdBolt fontSize={14} />

              <div style={{ marginRight: 8 }}>Boost</div>
            </Flex>
          )}
        </Pill>
      )}
    </div>
  )
}
