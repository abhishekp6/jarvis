import { useState, useEffect } from 'react'
import { questions } from './data/questions'
import { getTravelRecommendations, type Answers, type Recommendation } from './lib/llm'
import { getDynamicTheme, getThemeEmoji, getPersonalizedMessage } from './lib/themeUtils'
import { getProgressEncouragement } from './lib/feedbackMessages'
import { QuizStep } from './components/QuizStep'
import { ResultScreen } from './components/ResultScreen'
import { ProgressBar } from './components/ProgressBar'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Console logging for debugging
  useEffect(() => {
    if (currentStep === 0 && Object.keys(answers).length === 0) {
      console.log('🚀 Travel Recommendations App Started')
    }
  }, [currentStep, answers])

  const handleOptionSelect = (value: string) => {
    const questionId = questions[currentStep].id
    const newAnswers = { ...answers, [questionId]: value }
    
    setAnswers(newAnswers)
    
    // Quick transition to next step
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleQuizComplete(newAnswers)
    }
  }

  const handleQuizComplete = async (finalAnswers: Answers) => {
    console.log('🎯 Quiz Complete! Generating recommendations...')
    console.log('📋 Answers:', Object.entries(finalAnswers).map(([k, v]) => `${k}: ${v}`).join(', '))
    setIsLoading(true)
    setShowResults(true)

    try {
      const recs = await getTravelRecommendations(finalAnswers)
      setRecommendations(recs)
      console.log('✨ Recommendations Generated:', recs.length, 'destinations')
    } catch (error) {
      console.error('❌ Error getting recommendations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    console.log('🔄 Starting New Quiz...')
    setCurrentStep(0)
    setAnswers({})
    setRecommendations([])
    setShowResults(false)
    setIsLoading(false)
  }

  const currentTheme = getDynamicTheme(answers)
  const currentEmoji = getThemeEmoji(answers)
  const personalizedMessage = getPersonalizedMessage(answers)

  if (showResults) {
    return (
      <div className={`min-h-screen py-12 px-4 transition-all duration-1000 ${currentTheme}`}>
        <div className="max-w-6xl mx-auto">
          <ResultScreen 
            recommendations={recommendations}
            onRetry={handleRetry}
            isLoading={isLoading}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen py-12 px-4 transition-all duration-1000 ${currentTheme}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-float">
            {currentEmoji} Travel Recommendations
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            {personalizedMessage}
          </p>
        </div>

        {/* Progress */}
        <ProgressBar current={currentStep + 1} total={questions.length} />

        {/* Quiz Step */}
        <QuizStep
          question={questions[currentStep]}
          selectedValue={answers[questions[currentStep].id]}
          onSelect={handleOptionSelect}
        />

        {/* Step indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <span className="text-white font-semibold">Step {currentStep + 1}</span>
            <span className="text-white/60">of {questions.length}</span>
          </div>
          <p className="text-white/80 text-sm mt-2 animate-pulse">
            {getProgressEncouragement(currentStep + 1, questions.length)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App