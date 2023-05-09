import { FC } from 'react'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TAboutParams } from '~/network/fetchSourcesData'

type Props = {
  initialValues: TAboutParams
}

export const CommonView: FC<Props> = ({ initialValues }) => (
  <>
    {initialValues.title && (
      <Flex pt={12}>
        <Text kind="regular">Graph Title</Text>
        <Flex pt={12}>
          <Text className="value" kind="medium">
            {initialValues.title}
          </Text>
        </Flex>
      </Flex>
    )}
    {initialValues.description && (
      <Flex pt={12}>
        <Text kind="regular">Graph Description</Text>
        <Flex pt={12}>
          <Text className="value" kind="medium">
            {initialValues.description}
          </Text>
        </Flex>
      </Flex>
    )}
    {initialValues.mission_statement && (
      <Flex pt={12}>
        <Text kind="regular">Mission Statement</Text>
        <Flex pt={12}>
          <Text className="value" kind="medium">
            {initialValues.mission_statement}
          </Text>
        </Flex>
      </Flex>
    )}
  </>
)
