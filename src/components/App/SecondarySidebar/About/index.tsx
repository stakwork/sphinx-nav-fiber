import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TAboutParams, getAboutData } from '~/network/fetchSourcesData'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { executeIfProd } from '~/utils/tests'
import { AboutAdminView } from './AdminView'
import { CommonView } from './CommonView'

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

const defaultData = {
  description: '',
  mission_statement: '',
  search_term: '',
  title: '',
}

export const About = () => {
  const [setIsAdmin, isAdmin, setPubKey, pubKey] = useUserStore((s) => [s.setIsAdmin, s.isAdmin, s.setPubKey, s.pubKey])
  const [loading, setLoading] = useState(false)
  const [initialValues, setInitialValues] = useState<TAboutParams>(defaultData)

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const response = await getAboutData()

        setInitialValues(response)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  const authorize = async () => {
    // skipping this for end to end test because it requires a sphinx-relay to be connected
    await executeIfProd(async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const enable = await sphinx.enable()
        const pubKeyRes = enable?.pubkey

        setPubKey(pubKeyRes)

        if (pubKeyRes) {
          setIsAdmin(pubKeyRes && admins.includes(pubKeyRes))
        }
      } catch (error) {
        console.warn(error)
      }
    })
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
      {loading ? (
        <ContentWrapper align="center" justify="center">
          <ClipLoader />
        </ContentWrapper>
      ) : (
        <ContentWrapper align="stretch" justify="flex-start">
          {!isAdmin ? <CommonView initialValues={initialValues} /> : <AboutAdminView initialValues={initialValues} />}
        </ContentWrapper>
      )}
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

  .value {
    color: ${colors.lightBlue400};
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
