import { RefreshCw, MapPin } from 'lucide-react'
import { Recommendation } from '../lib/llm'

interface ResultScreenProps {
  recommendations: Recommendation[]
  onRetry: () => void
  isLoading?: boolean
}

export const ResultScreen = ({ recommendations, onRetry, isLoading }: ResultScreenProps) => {
  if (isLoading) {
    return (
      <div className="animate-fade-in-scale max-w-2xl mx-auto text-center">
        <div className="mb-12">
          {/* Soothing loading animation */}
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto relative">
              {/* Outer ring */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              {/* Animated ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
              {/* Inner circle */}
              <div className="absolute inset-2 bg-white/10 rounded-full animate-breathe"></div>
              {/* Center dot */}
              <div className="absolute inset-6 bg-white rounded-full animate-pulse"></div>
            </div>
            
            {/* Floating particles around loader */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400/40 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-blue-300/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-1 right-4 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4 animate-gentle-wave">
            🤔 Let me think...
          </h3>
          <p className="text-white/90 text-lg mb-6">
            I'm carefully selecting the perfect destinations that match your preferences...
          </p>
          
          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        <p className="text-white/50 text-sm mt-8">
          Analyzing with Gemini Nano 🤖
        </p>
      </div>
    )
  }

  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          I've Found Perfect Places For You!
        </h2>
        <p className="text-white/90 text-lg">Based on what you've told me, I think you'll love these destinations:</p>
        <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4 animate-gentle-wave">
            Let me think about this... 🤔
          </h3>
          <p className="text-white/90 text-lg">
            I'm carefully selecting the perfect destinations for you...
          </p>
        </div>
      )}
      
      <div className="grid gap-6 mb-12">
        {recommendations.map((rec, index) => (
          <div 
            key={rec.destination}
            className="animate-slide-in-up glass-card p-8 rounded-2xl"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-white mb-3">
                  {rec.destination}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {rec.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button
          onClick={onRetry}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
          <span className="font-semibold text-lg">Let's Plan Another Trip!</span>
        </button>
      </div>

      <div className="text-center mt-8">
        <p className="text-white/50 text-sm">
          Recommendations powered by Gemini Nano 🤖
        </p>
      </div>
    </div>
  )
}