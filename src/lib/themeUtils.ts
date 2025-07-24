export interface Answers {
  [key: string]: string
}

export const getDynamicTheme = (answers: Answers): string => {
  const { who, vibe, budget, activity } = answers
  
  // Priority order: vibe > who > budget > activity
  if (vibe) {
    switch (vibe) {
      case 'adventure': return 'bg-adventure'
      case 'relaxing': return 'bg-relaxing'
      case 'nature': return 'bg-nature'
      case 'culture': return 'bg-culture'
      case 'spiritual': return 'bg-spiritual'
    }
  }
  
  if (who) {
    switch (who) {
      case 'family': return 'bg-family'
      case 'couple': return 'bg-couple'
      case 'solo': return 'bg-solo'
      case 'friends': return 'bg-friends'
    }
  }
  
  if (budget) {
    switch (budget) {
      case 'luxury': return 'bg-luxury'
      case 'budget': return 'bg-budget'
    }
  }
  
  if (activity) {
    switch (activity) {
      case 'adventurous': return 'bg-adventure'
      case 'relaxed': return 'bg-relaxing'
    }
  }
  
  // Default theme
  return 'bg-gradient-to-br from-blue-500 to-purple-600'
}

export const getThemeEmoji = (answers: Answers): string => {
  const { vibe, who, budget } = answers
  
  if (vibe) {
    switch (vibe) {
      case 'adventure': return '🏔️'
      case 'relaxing': return '🏖️'
      case 'nature': return '🌿'
      case 'culture': return '🏛️'
      case 'spiritual': return '🧘'
    }
  }
  
  if (who) {
    switch (who) {
      case 'family': return '👨‍👩‍👧‍👦'
      case 'couple': return '💑'
      case 'solo': return '🧳'
      case 'friends': return '👥'
    }
  }
  
  if (budget) {
    switch (budget) {
      case 'luxury': return '💎'
      case 'budget': return '💰'
    }
  }
  
  return '✈️'
}

export const getPersonalizedMessage = (answers: Answers): string => {
  const { who, vibe, budget, duration } = answers
  
  if (who && vibe) {
    const messages = {
      family: {
        relaxing: "Perfect family getaway for creating memories",
        nature: "Adventure awaits the whole family",
        culture: "Educational and fun for everyone",
        adventure: "Exciting family adventure ahead"
      },
      couple: {
        relaxing: "Romantic escape for two",
        nature: "Peaceful nature retreat together",
        culture: "Cultural exploration as a couple",
        adventure: "Thrilling adventure for two"
      },
      solo: {
        relaxing: "Your perfect solo retreat",
        nature: "Personal nature exploration",
        culture: "Cultural immersion on your terms",
        adventure: "Your solo adventure awaits"
      },
      friends: {
        relaxing: "Fun getaway with friends",
        nature: "Group nature adventure",
        culture: "Cultural journey with friends",
        adventure: "Epic adventure with your crew"
      }
    }
    
    return messages[who]?.[vibe] || "Your perfect travel experience"
  }
  
  if (budget && duration) {
    return `${budget} ${duration} trip - let's find your perfect match`
  }
  
  return "Discover your perfect travel destinations"
} 