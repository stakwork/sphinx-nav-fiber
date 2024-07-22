import { useEffect, useState } from 'react'
import { MdBolt } from 'react-icons/md'
import ClipLoader from 'react-spinners/ClipLoader'
import BoostIcon from '~/components/Icons/BoostIcon'
import { Flex } from '~/components/common/Flex'
import { Pill } from '~/components/common/Pill'
import { Node } from '~/types'
import { boost } from '~/utils/boost'
import { colors } from '~/utils/colors'

type Props = {
  count?: number
  updateCount?: (newAmount: number) => void
  content?: Node | null
  refId?: string
  readOnly?: boolean
}

export const Booster = ({ count = 0, updateCount, content, readOnly, refId }: Props) => {
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
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

      if (updateCount) {
        updateCount(count + defaultBoostAmount)
      }
    } catch (e) {
      console.error(e)
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
      <Pill
        data-testid="booster-pill"
        disabled={submitting}
        onClick={async () => {
          if (submitting) {
            return
          }

          await doBoost()
        }}
        style={{
          padding: '4px 8px',
          borderWidth: 0,
          backgroundColor: '#303342',
          height: '25px',
          width: 'fit-content',
        }}
      >
        {submitting ? (
          <ClipLoader color="#fff" loading size={10} />
        ) : (
          <Flex align="center" data-testid="loader" direction="row" justify="space-around">
            <BoostIcon style={{ color: colors.white }} />

            <div style={{ marginLeft: 8, marginRight: 8 }}>Boost</div>
          </Flex>
        )}
      </Pill>
    </div>
  )
}
