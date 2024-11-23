import { Flex } from '~/components/common/Flex'
import { Header } from './components/header'
import { LandingPage } from './components/LandingPage'
import { SideBar } from './components/sidebar'

export const MindSet = () => (
  <Flex>
    <Header />
    <LandingPage />
    <SideBar />
  </Flex>
)
