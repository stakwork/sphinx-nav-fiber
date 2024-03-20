import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { fetchNode } from '~/network/fetchGraphDataNew'
import { Attributes, NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { colors } from '~/utils/colors'

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'absolute',
  top: '65px',
  right: '55px',
  width: '300px',
  pointerEvents: 'none',
  background: colors.dashboardHeader,
  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
  color: colors.primaryText1,
  zIndex: 100,
  transition: 'opacity 0.6s',
  padding: theme.spacing(2, 3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
  },
}))

type Props = {
  node: NodeExtendedNew
}

export const Tooltip = ({ node }: Props) => {
  const [attributes, setAttributes] = useState<Attributes>({})
  const [loading, setLoading] = useState(false)

  const { node_type: nodeType, name, ref_id: refId } = node

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const data = await fetchNode(refId)

        if (data?.properties) {
          setAttributes(data.properties)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [refId])

  if (!node) {
    return null
  }

  return (
    <Wrapper align="flex-start" borderRadius={8} px={24} py={16}>
      <>
        <Flex direction="row" mb={12}>
          <Flex align="flex-start">
            <Text>{nodeType?.toUpperCase()}</Text>
          </Flex>
        </Flex>
        <Flex direction="row" mb={12}>
          <Flex align="flex-start">
            <Text>{name}</Text>
          </Flex>
        </Flex>
        {loading ? (
          <ClipLoader color={colors.white} />
        ) : (
          Object.entries(attributes).map(([key, value]) => (
            <Flex key={key} direction="row" justify="flex-start" mb={12}>
              <Flex>
                <Text>{key}: </Text>
              </Flex>
              <Flex ml={8}>
                <Text>{value}</Text>
              </Flex>
            </Flex>
          ))
        )}
      </>
    </Wrapper>
  )
}
