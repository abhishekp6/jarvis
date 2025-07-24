import { LucideIcon } from 'lucide-react'

interface OptionCardProps {
  icon: LucideIcon
  label: string
  selected: boolean
  onClick: () => void
}

export const OptionCard = ({ icon: Icon, label, selected, onClick }: OptionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full p-8 rounded-3xl transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-2xl active:scale-98 overflow-hidden
        ${selected 
          ? 'glass-card border-2 border-white shadow-xl transform scale-105' 
          : 'glass-card border-2 border-transparent hover:border-white/50 hover:shadow-xl'
        }
      `}
    >
      {/* Animated background gradient */}
      <div className={`
        absolute inset-0 rounded-3xl transition-all duration-500
        ${selected 
          ? 'bg-gradient-to-br from-blue-500/10 to-purple-600/10' 
          : 'bg-gradient-to-br from-white/5 to-blue-500/5 group-hover:from-blue-500/10 group-hover:to-purple-600/10'
        }
      `}></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="relative flex flex-col items-center gap-6">
        <div className={`
          p-4 rounded-2xl transition-all duration-500 transform
          ${selected 
            ? 'bg-white/30 backdrop-blur-sm text-white shadow-xl scale-110' 
            : 'bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/30 group-hover:scale-105'
          }
        `}>
          <Icon className="w-10 h-10" />
        </div>
        <div className="text-center">
          <span className={`font-bold text-lg transition-all duration-300 ${
            selected ? 'text-white' : 'text-white/90 group-hover:text-white'
          }`}>
            {label}
          </span>
          {selected && (
            <div className="mt-2 w-6 h-1 bg-white rounded-full mx-auto animate-fade-in-scale"></div>
          )}
        </div>
        
        {/* Success sparkles when selected */}
        {selected && (
          <>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -top-2 right-2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-1 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }}></div>
          </>
        )}
      </div>
    </button>
  )
} 