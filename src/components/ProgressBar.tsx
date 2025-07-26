interface ProgressBarProps {
  current: number
  total: number
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100
  
  const getMessage = (percent: number) => {
    if (percent === 0) return "Ready to discover your perfect destination 🌟"
    if (percent < 30) return "Every choice helps us understand you better ✨"
    if (percent < 50) return "You're crafting a unique journey 💫"
    if (percent < 75) return "Your dream destination is taking shape 🌈"
    if (percent < 100) return "Almost ready with your perfect matches ✨"
    return "Get ready to be inspired! 🎉"
  }

  return (
    <div className="mb-8">
      {/* Progress text with emphasis */}
      <div className="text-center space-y-1 mb-3">
        <span className="text-white/90 text-sm font-medium inline-block px-4 py-1 rounded-full bg-white/5">
          {getMessage(progress)}
        </span>
      </div>
      
      {/* Progress bar with softer appearance */}
      <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-white/20 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}