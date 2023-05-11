import { io, Socket } from 'socket.io-client'
import { API_URL } from '~/constants'

let socket: Socket

export const connectSocket = () => {
  socket = io(API_URL) // Replace with your server URL

  socket.on('connect', () => {
    console.log('Connected to server')
  })

  socket.on('teachmehook', () => {
    console.log('teachmehook')
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from server')
  })

  // Additional event listeners and emit logic if needed

  return socket
}

export const disconnectSocket = () => {
  if (socket) {
    socket.close()
  }
}
