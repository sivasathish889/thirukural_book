# திருக்குறள் Book - Digital Thirukural Reader

A modern React web application for reading and exploring Thirukural (திருக்குறள்), the ancient Tamil literary masterpiece by Thiruvalluvar.

## Features

- **Interactive Reading**: Navigate through 1330 kurals with Previous/Next buttons
- **Multilingual Support**: Tamil original text with Tamil meaning, English translation, and detailed explanations
- **Responsive Design**: Clean, centered layout with vintage parchment background
- **Real-time Data**: Fetches kurals from external JSON API
- **Tamil Typography**: Proper Tamil font rendering and display

## Tech Stack

- **Frontend**: React 18.3.1 with Vite
- **HTTP Client**: Axios for API requests
- **Styling**: Custom CSS with backdrop blur effects
- **Build Tool**: Vite with HMR (Hot Module Replacement)
- **Linting**: ESLint with React-specific rules

## Project Structure

```
Thirukural_book/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── old-brown-vintage-parchment-paper-texture-900x1226.jpg
│   │   └── thirukural.png
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the local development URL
3. Use Previous/Next buttons to navigate through different kurals
4. Each kural displays:
   - Kural number (குறள் எண்)
   - Original Tamil verses (திருக்குறள்)
   - Tamil meaning (பொருள்)
   - English translation
   - Detailed explanation

## Data Source

The application fetches Thirukural data from:
`https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json`

## Dependencies

### Production
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `axios`: ^1.11.0

### Development
- `vite`: ^5.3.1
- `@vitejs/plugin-react`: ^4.3.1
- `eslint`: ^8.57.0
- Various ESLint plugins for React

## License

This project is private and not licensed for public distribution.

## About Thirukural

Thirukural is a classic Tamil text consisting of 1330 kurals (couplets) written by the ancient Tamil poet Thiruvalluvar. It covers ethics, politics, economics, and love, making it one of the most important works in Tamil literature.