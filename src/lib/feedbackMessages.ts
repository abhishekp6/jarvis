export const getFeedbackMessage = (questionId: string, selectedValue: string): string => {
  const messages = {
    who: {
      solo: "Perfect! Solo travel is an amazing journey of self-discovery 🌟",
      couple: "Wonderful! Romantic adventures await you both 💕",
      family: "Excellent choice! Family memories are priceless 👨‍👩‍👧‍👦",
      friends: "Fantastic! Group adventures create lifelong bonds 👥"
    },
    vibe: {
      relaxing: "Great choice! Peaceful moments await you 🏖️",
      nature: "Beautiful! Nature has so much to offer 🌿",
      culture: "Excellent! Cultural experiences enrich the soul 🏛️",
      adventure: "Amazing! Adventure awaits around every corner 🏔️"
    },
    location: {
      domestic: "Smart choice! Local gems are often the best 🏠",
      international: "Exciting! The world is your oyster 🌍",
      both: "Perfect! Keeping all options open is wise 🎯"
    },
    popularity: {
      popular: "Great! Popular spots are popular for good reasons ⭐",
      offbeat: "Brilliant! Hidden gems offer unique experiences 💎",
      mix: "Excellent! Best of both worlds 🎪"
    },
    budget: {
      budget: "Smart! Great adventures don't need to break the bank 💰",
      'mid-range': "Perfect! Comfort and value combined ⚖️",
      luxury: "Fantastic! Premium experiences await 💎"
    },
    duration: {
      weekend: "Perfect! Quick getaways are refreshing 🚀",
      '3-5 days': "Great! Perfect balance of time and adventure 📅",
      '1 week': "Excellent! A week of amazing experiences awaits 📆",
      'long trip': "Amazing! Extended adventures create deep memories 🌟"
    },
    activity: {
      relaxed: "Wonderful! Taking it easy is sometimes the best choice 😌",
      moderate: "Perfect! Balanced activities for everyone ⚖️",
      adventurous: "Exciting! Thrilling experiences await you 🎯"
    }
  }

  return messages[questionId]?.[selectedValue] || "Great choice! Let's continue your journey ✨"
}

export const getProgressEncouragement = (currentStep: number, totalSteps: number): string => {
  const progress = (currentStep / totalSteps) * 100
  
  if (progress <= 25) {
    return "You're just getting started! 🌟"
  } else if (progress <= 50) {
    return "Halfway there! You're doing great! 🎯"
  } else if (progress <= 75) {
    return "Almost there! Your perfect trip is taking shape! ✨"
  } else {
    return "Final stretch! You're about to discover amazing places! 🚀"
  }
} 