import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import { postTeachMe } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

export const TeachMe = () => {
  const data = useDataStore((s) => s.data)
  const [isTutorialLoading, setIsTutorialLoading] = useState(false)
  const searchTerm = useAppStore((s) => s.currentSearch)

  const handleTutorialStart = async () => {
    setIsTutorialLoading(true)

    try {
      const nodesWithTranscript = data?.nodes.filter((i) => i.text)
      const firstFiveItems = nodesWithTranscript?.slice(0, 5)

      if (searchTerm) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable()

        await postTeachMe({
          term: searchTerm,
          transcripts: firstFiveItems?.length ? firstFiveItems.map((i) => i.text).join(' ') : '',
        })

        setIsTutorialLoading(false)

        toast(<ToastMessage message="We started preparing tutorial for you" />, {
          type: 'success',
        })
      }
    } catch (error) {
      setIsTutorialLoading(false)

      toast(<ToastMessage message="An error happened" />, {
        type: 'error',
      })
    }
  }

  return (
    <>
      {!isTutorialLoading ? (
        <Flex p={12}>
          <Button kind="big" onClick={() => handleTutorialStart()}>
            Teach me
          </Button>
        </Flex>
      ) : (
        <Flex align="center" direction="row" justify="center" py={12}>
          <Flex px={12}>
            <Text>Generating Tutorial</Text>
          </Flex>
          <ClipLoader color={colors.white} />
        </Flex>
      )}
    </>
  )
}
