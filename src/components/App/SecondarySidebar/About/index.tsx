import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getAboutData, TAboutParams } from '~/network/fetchSourcesData'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { AboutAdminView } from './AdminView'
import { CommonView } from './CommonView'

export const requiredRule = {
  required: {
    message: 'The field is required',
    value: true,
  },
}

const defaultData = {
  description: '',
  mission_statement: '',
  search_term: '',
  title: '',
}

export const About = () => {
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
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

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">About</Text>
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

const Heading = styled(Flex)`
  margin-bottom: 16px;
  ${Text} {
    margin-bottom: 0;
  }
`
