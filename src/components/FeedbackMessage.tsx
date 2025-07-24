import { useState, useEffect } from 'react'

interface FeedbackMessageProps {
  message: string
  isVisible: boolean
  onComplete: () => void
}

export const FeedbackMessage = ({ message, isVisible, onComplete }: FeedbackMessageProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        onComplete()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className={`
        bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl
        transition-all duration-500 ease-out
        ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-breathe">
            <span className="text-2xl">✨</span>
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-lg">{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 