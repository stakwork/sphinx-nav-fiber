// Import the necessary dependencies
import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import animationData from './lottie.json' // Replace with your animation file

// Your React component
export const Equalizer = () => {
  // Create a ref to hold the Lottie animation instance
  const lottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    // Initialize Lottie animation
    const container = document.getElementById('lottie-container')

    // Check if the container exists before initializing Lottie animation
    if (container) {
      lottieRef.current = lottie.loadAnimation({
        container,
        animationData,
        loop: true,
        autoplay: true,
      })
    }

    // Cleanup on component unmount
    return () => {
      if (lottieRef.current) {
        lottieRef.current.destroy()
      }
    }
  }, [])

  return <div id="lottie-container" style={{ width: '40px', height: '40px' }} />
}
