import { 
  User, Heart, Users, Mountain, Palette, Zap, Heart as HeartIcon, 
  Globe, MapPin, DollarSign, Calendar, Activity 
} from 'lucide-react'

export interface Question {
  id: string
  text: string
  options: Array<{
    value: string
    label: string
    icon: React.ComponentType<{ className?: string }>
  }>
}

export const questions: Question[] = [
  {
    id: 'who',
    text: "Who's traveling?",
    options: [
      { value: 'solo', label: 'Solo', icon: User },
      { value: 'couple', label: 'Couple', icon: Heart },
      { value: 'family', label: 'Family', icon: Users },
      { value: 'friends', label: 'Friends', icon: Users }
    ]
  },
  {
    id: 'vibe',
    text: "What vibe are you looking for?",
    options: [
      { value: 'relaxing', label: 'Relaxing', icon: HeartIcon },
      { value: 'nature', label: 'Nature', icon: Mountain },
      { value: 'culture', label: 'Culture', icon: Palette },
      { value: 'adventure', label: 'Adventure', icon: Zap }
    ]
  },
  {
    id: 'location',
    text: "Domestic or International?",
    options: [
      { value: 'domestic', label: 'Domestic', icon: MapPin },
      { value: 'international', label: 'International', icon: Globe },
      { value: 'both', label: 'Open to both', icon: Globe }
    ]
  },
  {
    id: 'popularity',
    text: "Popular or Hidden Spots?",
    options: [
      { value: 'popular', label: 'Popular', icon: Users },
      { value: 'offbeat', label: 'Offbeat', icon: MapPin },
      { value: 'mix', label: 'Mix', icon: HeartIcon }
    ]
  },
  {
    id: 'budget',
    text: "Budget Range?",
    options: [
      { value: 'budget', label: 'Budget', icon: DollarSign },
      { value: 'mid-range', label: 'Mid-range', icon: DollarSign },
      { value: 'luxury', label: 'Luxury', icon: DollarSign }
    ]
  },
  {
    id: 'duration',
    text: "Trip Duration?",
    options: [
      { value: 'weekend', label: 'Weekend', icon: Calendar },
      { value: '3-5 days', label: '3-5 days', icon: Calendar },
      { value: '1 week', label: '1 week', icon: Calendar },
      { value: 'long trip', label: 'Long trip', icon: Calendar }
    ]
  },
  {
    id: 'activity',
    text: "Activity Level?",
    options: [
      { value: 'relaxed', label: 'Relaxed', icon: HeartIcon },
      { value: 'moderate', label: 'Moderate', icon: Activity },
      { value: 'adventurous', label: 'Adventurous', icon: Zap }
    ]
  }
] 