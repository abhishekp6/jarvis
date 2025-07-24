import { Question } from '../data/questions'
import { OptionCard } from './OptionCard'

interface QuizStepProps {
  question: Question
  selectedValue?: string
  onSelect: (value: string) => void
}

export const QuizStep = ({ question, selectedValue, onSelect }: QuizStepProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {question.text}
        </h2>
        <div className="w-24 h-1 bg-white/30 rounded-full mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {question.options.map((option) => (
          <div key={option.value}>
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