import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
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

export const About = () => {
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const appMetaData = useAppStore((s) => s.appMetaData)

  if (!appMetaData) {
    return null
  }

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">About</Text>
      </Heading>
      <ContentWrapper align="stretch" justify="flex-start">
        {!isAdmin ? <CommonView initialValues={appMetaData} /> : <AboutAdminView initialValues={appMetaData} />}
      </ContentWrapper>
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
