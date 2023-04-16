import { useEffect, useState } from 'react'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { TextInput } from '~/components/AddNodeModal/TextInput'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { isDevelopment } from '~/constants'
import { getAdminId } from '~/network/fetchGraphData'
import { getAboutData } from '~/network/fetchSourcesData'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'

export const requiredRule = {
  required: {
    message: 'The field is required',
    value: true,
  },
}

const admins = [
  '02c431e64078b10925584d64824c9d1d12eca05e2c56660ffa5ac84aa6946adfe5',
  '03a9a8d953fe747d0dd94dd3c567ddc58451101e987e2d2bf7a4d1e10a2c89ff38',
]

export const About = () => {
  const [setIsAdmin, isAdmin, setPubKey, pubKey] = useUserStore((s) => [s.setIsAdmin, s.isAdmin, s.setPubKey, s.pubKey])
  const [admId, setAdmId] = useState('')

  useEffect(() => {
    const init = async () => {
      await getAboutData()
    }

    init()
  }, [])

  const authorize = async () => {
    if (!isDevelopment) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const enable = await sphinx.enable()
        const pubKeyRes = enable?.pubkey

        setPubKey(pubKeyRes)

        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)

        const tribeId = urlParams.get('tribe')
        let id

        if (pubKeyRes) {
          // id = getAdminId(tribeId)
          setIsAdmin(pubKeyRes && admins.includes(pubKeyRes))
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const resolveAdminActions = () => {
    if (!pubKey) {
      return (
        <EditButton kind="small" onClick={authorize}>
          Admin
        </EditButton>
      )
    }

    if (pubKey && isAdmin) {
      return null
    }

    return <Text>You are not admin</Text>
  }

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">About</Text>
        {resolveAdminActions()}
      </Heading>
      <ContentWrapper align="stretch" justify="flex-start">
        <Flex pt={12}>
          <Text kind="regular">Graph Title</Text>
          <Flex pt={12}>
            <Text kind="medium">title</Text>
          </Flex>
        </Flex>
        <Flex pt={12}>
          <Text kind="regular">Graph Description</Text>
          <Flex pt={12}>
            <Text kind="medium">description</Text>
          </Flex>
        </Flex>
        <Flex pt={12}>
          <Text kind="regular">Mission Statement</Text>
          <Flex pt={12}>
            <Text kind="medium">mission</Text>
          </Flex>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  border-radius: 8px;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`

const ContentWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`

const EditButton = styled(Button)`
  margin-left: auto;
`

const Heading = styled(Flex)`
  margin-bottom: 16px;
  ${Text} {
    margin-bottom: 0;
  }
`
