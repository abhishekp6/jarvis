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
      onComplete() // Immediately complete
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`
        bg-white/70 backdrop-blur-sm rounded px-3 py-1.5 shadow-sm
        transition-all duration-100 ease-out
        ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}
      `}>
        <p className="text-gray-600 text-xs font-medium">{message}</p>
      </div>
    </div>
  )
}