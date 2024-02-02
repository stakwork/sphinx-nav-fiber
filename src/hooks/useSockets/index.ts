import { useContext,useEffect, useState } from 'react'
import SocketContext from '~/components/App/Providers/Socket/SocketContext'
import { Socket, io } from 'socket.io-client'
import { API_URL } from '~/utils/apiUrlFromSwarmHost'

export const useSocket = () => {
  const context = useContext(SocketContext)

  return context?.socket
}
