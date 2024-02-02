// SocketProvider.tsx
import { FC, ReactNode } from 'react'
import { io } from 'socket.io-client'
import { API_URL } from '~/constants'
import SocketContext from './SocketContext'

interface SocketProviderProps {
  children: ReactNode
}

const contextValue = {
  socket: io(API_URL),
}

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => (
  <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>
)
