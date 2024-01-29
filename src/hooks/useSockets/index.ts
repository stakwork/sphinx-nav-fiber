// useSocket.ts

import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { API_URL } from '~/utils/apiUrlFromSwarmHost'

const useSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const socketInstance = io(API_URL)

    setSocket(socketInstance)

    return () => {
      socketInstance.disconnect()
    }
  }, [])

  return socket
}

export default useSocket
