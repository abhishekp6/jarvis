export const getFeedbackMessage = (questionId: string, selectedValue: string): string => {
  const messages = {
    who: {
      solo: "Perfect for solo adventures 🌟",
      couple: "Romantic spots ahead 💕",
      family: "Family fun coming up 👨‍👩‍👧‍👦",
      friends: "Group adventures await 👥"
    },
    vibe: {
      relaxing: "Time to unwind 🏖️",
      nature: "Nature calls 🌿",
      culture: "Cultural wonders ahead 🏛️",
      adventure: "Adventure time 🏔️"
    },
    location: {
      domestic: "Local gems await 🏠",
      international: "World exploration 🌍",
      both: "All options open 🎯"
    }
  }

  return messages[questionId]?.[selectedValue] || "Got it! ✨"
}

export const getProgressEncouragement = (currentStep: number, totalSteps: number): string => {
  const progress = (currentStep / totalSteps) * 100
  
  if (progress <= 25) {
    return "Just getting started 🌟"
  } else if (progress <= 50) {
    return "Looking good 🎯"
  } else if (progress <= 75) {
    return "Almost there ✨"
  } else {
    return "Final step! 🚀"
  }
}