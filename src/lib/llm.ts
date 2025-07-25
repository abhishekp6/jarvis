export interface Recommendation {
  destination: string
  explanation: string
}

export interface Answers {
  [key: string]: string
}

const buildPrompt = (answers: Answers): string => {
  const { who, vibe, location, popularity, budget, duration, activity } = answers
  
  return `Suggest top 5 travel destinations for a ${who} who wants a ${vibe} trip, ${location}, ${popularity} spots, ${budget} budget, for ${duration}, with ${activity} activity level. 
  
  For each destination, provide:
  1. Destination name
  2. One-line explanation of why it fits their preferences
  
  Format as JSON array with "destination" and "explanation" fields.
  Note following context:
  1. 'Domestic' means inside India.
  `
}

const mockRecommendations: Recommendation[] = [
  {
    destination: "Bali, Indonesia",
    explanation: "Perfect for couples seeking a relaxing, nature-filled escape with luxury accommodations and moderate activities."
  },
  {
    destination: "Kyoto, Japan", 
    explanation: "Ideal for cultural immersion with beautiful temples, gardens, and traditional experiences for families."
  },
  {
    destination: "New Zealand",
    explanation: "Adventure paradise with stunning landscapes, perfect for friends seeking outdoor activities and offbeat experiences."
  }
]

interface LanguageModel {
  params: () => Promise<{
    available: string;
    defaultTemperature: number;
    defaultTopK: number;
    maxTopK: number;
  }>;
  create: () => Promise<{
    prompt: (text: string) => Promise<string>;
  }>;
}

declare global {
  interface Window {
    LanguageModel: LanguageModel;
  }
}

export const getTravelRecommendations = async (answers: Answers): Promise<Recommendation[]> => {
  try {
    if (typeof window !== 'undefined' && window.LanguageModel) {
      console.log('🤖 Checking language model availability...')
      
      const { available } = await window.LanguageModel.params()
      
      if (available !== "no") {
        const session = await window.LanguageModel.create()
        const prompt = buildPrompt(answers)
        
        const response = await session.prompt(prompt)

        try {
          // Extract JSON from potential markdown code block
          const jsonStr = response.includes('```json')
            ? response.split('```json')[1].split('```')[0].trim()
            : response.trim()
            
          const parsed = JSON.parse(jsonStr)
          if (Array.isArray(parsed) && parsed.length > 0 
              && parsed.every(item => item.destination && item.explanation)) {
            console.log('✅ LLM recommendations parsed successfully')
            return parsed
          } else {
            throw new Error('Invalid recommendation format')
          }
        } catch (parseError) {
          console.log('⚠️ LLM response parsing failed:', parseError.message)
        }
      } else {
        console.log('⚠️ Language model not available, using fallback')
      }
    }
    
    console.log('🔄 Using fallback recommendations')
    return mockRecommendations
    
  } catch (error) {
    console.error('❌ Error:', error.message)
    return mockRecommendations
  }
}