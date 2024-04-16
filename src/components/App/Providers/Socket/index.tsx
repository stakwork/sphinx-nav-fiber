// SocketProvider.tsx
import { FC, ReactNode } from 'react'
import { io } from 'socket.io-client'
import { API_URL, removeApi } from '~/utils/apiUrlFromSwarmHost'
import SocketContext from './SocketContext'

interface SocketProviderProps {
  children: ReactNode
}

const contextValue = {
  socket: io(removeApi(API_URL), { autoConnect: false }),
}

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => (
  <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>
)
