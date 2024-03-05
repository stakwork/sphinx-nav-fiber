// SocketContext.ts
import { createContext, useContext } from 'react'
import { Socket } from 'socket.io-client'

interface SocketContextType {
  socket: Socket
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

export const useSocket = () => {
  const context = useContext(SocketContext)

  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider')
  }

  return context.socket
}

export default SocketContext
