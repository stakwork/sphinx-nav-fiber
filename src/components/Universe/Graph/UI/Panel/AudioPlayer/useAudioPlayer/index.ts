import { useEffect, useRef, useState } from 'react'
import { usePlayerStore } from '~/stores/usePlayerStore'
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

  const [isPlaying, setIsPlaying] = usePlayerStore((s) => [s.isPlaying, s.setIsPlaying])

  useEffect(() => {
    setPlaying(isPlaying)
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }

      setIsPlaying(playing)
    }
  }, [playing, setIsPlaying])

  useEffect(() => {
    audioRef.current = audioPlayer

    audioRef.current.addEventListener('loadedmetadata', () => {
      setLoading(false)

      if (audioRef.current) {
        setDuration(audioRef.current.duration)
      }

      setPlaying((prevPlaying) => {
        if (prevPlaying) {
          audioRef.current!.play()
        }

        return prevPlaying
      })
    })

    audioRef.current.addEventListener('error', () => {
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
    if (!audioRef.current) {
      audioRef.current = audioPlayer
    }

    if (!mediaUrl) {
      resetPlayer()
      audioRef.current!.pause()

      return
    }

    audioRef.current.src = mediaUrl

    resetPlayer()
  }, [mediaUrl])

  const resetPlayer = () => {
    setLoading(true)
    setLoadError(false)
  }

  useEffect(() => {
    const formattedTimestamp = timestamp ? videoTimetoSeconds(timestamp).start : 0

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
