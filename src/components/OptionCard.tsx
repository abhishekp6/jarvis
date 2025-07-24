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
        group relative w-full p-8 rounded-3xl transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg active:scale-98 overflow-hidden
        ${selected 
          ? 'glass-card border-2 border-white shadow-lg transform scale-105' 
          : 'glass-card border-2 border-transparent hover:border-white/50'}
      `}
    >
      {/* Simple gradient background */}
      <div className={`
        absolute inset-0 rounded-3xl transition-opacity duration-300
        ${selected 
          ? 'bg-gradient-to-br from-blue-500/10 to-purple-600/10' 
          : 'bg-gradient-to-br from-white/5 to-blue-500/5 group-hover:from-blue-500/10 group-hover:to-purple-600/10'
        }
      `}></div>
      
      <div className="relative flex flex-col items-center gap-6">
        <div className={`
          p-4 rounded-2xl transition-all duration-300 transform
          ${selected 
            ? 'bg-white/30 backdrop-blur-sm text-white shadow-lg scale-110' 
            : 'bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/30 group-hover:scale-105'
          }
        `}>
          <Icon className="w-10 h-10" />
        </div>
        <div className="text-center">
          <span className={`font-bold text-lg transition-colors duration-300 ${
            selected ? 'text-white' : 'text-white/90 group-hover:text-white'
          }`}>
            {label}
          </span>
          {selected && (
            <div className="mt-2 w-6 h-1 bg-white rounded-full mx-auto"></div>
          )}
        </div>
      </div>
    </button>
  )
}