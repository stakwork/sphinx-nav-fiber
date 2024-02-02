import { useContext } from 'react'
import SocketContext from '~/components/App/Providers/Socket/SocketContext'

export const useSocket = () => {
  const context = useContext(SocketContext)

  return context?.socket
}
