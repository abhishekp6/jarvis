# Travel Recommendations App

A minimal, modern web app that provides personalized travel destination suggestions through an interactive quiz. **Powered by Gemini Nano** for intelligent recommendations.

## Features

- 🤖 **Gemini Nano integration** for smart, contextual recommendations
- 🎯 **7-step interactive quiz** with beautiful animations
- 📱 **Responsive design** with modern UI/UX
- ⚡ **Fully client-side** - no backend required
- 🔄 **Fallback system** - works without LLM
- 📊 **Console logging** for debugging and transparency

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling
- **Gemini Nano** via `window.ai` (optional)

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## LLM Integration

The app uses Gemini Nano via the `window.ai` Prompt API:

- **With LLM**: Install the [Prompt extension](https://prompt.ai/) for Chrome
- **Without LLM**: App falls back to mock recommendations

## Project Structure

```
src/
├── components/          # React components
│   ├── OptionCard.tsx   # Quiz option cards
│   ├── QuizStep.tsx     # Individual quiz steps
│   ├── ResultScreen.tsx # Results display
│   └── ProgressBar.tsx  # Progress indicator
├── data/
│   └── questions.ts     # Quiz questions & options
├── lib/
│   └── llm.ts          # LLM integration logic
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Quiz Questions

1. **Who's traveling?** - Solo, Couple, Family, Friends
2. **What vibe?** - Relaxing, Nature, Culture, Adventure
3. **Location preference?** - Domestic, International, Both
4. **Popularity?** - Popular, Offbeat, Mix
5. **Budget?** - Budget, Mid-range, Luxury
6. **Duration?** - Weekend, 3-5 days, 1 week, Long trip
7. **Activity level?** - Relaxed, Moderate, Adventurous

## Development

- **Console logging**: Check browser console for detailed app flow
- **TypeScript**: Full type safety throughout
- **Responsive**: Works on mobile and desktop
- **Animations**: Smooth transitions between steps

## Build

```bash
npm run build
```

## License

MIT