import { Flex } from '~/components/common/Flex'
import { Header } from './components/header'
import { Scene } from './components/Scene'
import { SideBar } from './components/sidebar'

export const MindSet = () => (
  <Flex>
    <Header />
    <SideBar />
    <Scene />
  </Flex>
)
