import { Question } from '../data/questions'
import { OptionCard } from './OptionCard'

interface QuizStepProps {
  question: Question
  selectedValue?: string
  onSelect: (value: string) => void
}

export const QuizStep = ({ question, selectedValue, onSelect }: QuizStepProps) => {
  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          {question.text}
        </h2>
        <div className="w-24 h-1 bg-white/30 rounded-full mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {question.options.map((option, index) => (
          <div 
            key={option.value} 
            className="animate-slide-in-up" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <OptionCard
              icon={option.icon}
              label={option.label}
              selected={selectedValue === option.value}
              onClick={() => onSelect(option.value)}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 