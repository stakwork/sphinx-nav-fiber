import { useEffect, useRef, useState } from 'react'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'

interface UseAudioPlayerProps {
  mediaUrl: string | undefined
  timestamp: string | undefined
}

const audioPlayer = new Audio()

export const useAudioPlayer = ({ mediaUrl, timestamp }: UseAudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audioRef.current = audioPlayer

    audioRef.current.addEventListener('loadedmetadata', () => {
      setLoading(false)
      setDuration(audioRef.current!.duration)
    })

    audioRef.current.addEventListener('error', () => {
      console.log('errrrorr!!')
      setLoadError(true)
    })

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current!.currentTime)
    }

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audioRef.current!.pause()

      audioRef.current!.removeEventListener('loadedmetadata', () => {
        setDuration(0)
      })
      audioRef.current!.removeEventListener('timeupdate', handleTimeUpdate)
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!mediaUrl) {
      return
    }

    if (!audioRef.current) {
      audioRef.current = audioPlayer
    }

    audioRef.current.pause()
    audioRef.current.src = mediaUrl

    resetPlayer()
  }, [mediaUrl])

  const resetPlayer = () => {
    setLoading(true)
    setPlaying(false)
    setLoadError(false)
  }

  useEffect(() => {
    const formattedTimestamp = timestamp ? videoTimetoSeconds(timestamp) : 0
    setAudioCurrentTime(formattedTimestamp)
  }, [timestamp])

  const setAudioCurrentTime = (newTime: number) => {
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const playPauseToggle = () => {
    if (!loading && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setPlaying(true)
      } else {
        audioRef.current.pause()
        setPlaying(false)
      }
    }
  }

  return {
    audioRef,
    loading,
    playing,
    loadError,
    duration,
    currentTime,
    setCurrentTime: setAudioCurrentTime,
    playPauseToggle,
  }
}

export default useAudioPlayer
