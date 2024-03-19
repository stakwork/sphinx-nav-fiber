import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'absolute',
  top: '65px',
  left: '55px',
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

export const TypesNavigation = () => {
  const [nodeTypes] = useGraphStore((s) => [s.nodeTypes])

  return (
    <Wrapper align="flex-start" borderRadius={8} px={24} py={16}>
      <>
        {nodeTypes.map((type) => (
          <Flex key={type} direction="row" justify="flex-start" mb={12}>
            <Text>{type}</Text>
          </Flex>
        ))}
      </>
    </Wrapper>
  )
}
