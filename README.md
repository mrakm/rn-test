# React Native Animated Deck Menu Implementation

## Demo
<video src="demo/video.mp4" controls="controls" style="max-width: 100%;">
    Your browser does not support the video tag.
</video>

## Overview
This project implements an animated deck-style menu for a React Native application using Expo. The implementation features a smooth animation where the main content rotates and scales while a dark-themed menu slides in from the left.

## Key Features
- Animated deck-style menu with 3D rotation and scaling effects
- Gesture-based interactions
- Type-safe implementation using TypeScript
- Responsive design that works across different screen sizes
- Clean architecture with reusable components
- Integration with Expo Router for navigation
- Themeable design system with consistent colors

## Technical Architecture

### Component Structure
components/
  DeckMenu/
    ├── index.tsx        # Main component logic
    ├── styles.ts        # Styled components
    ├── constants.ts     # Configuration and constants
    └── types.ts         # TypeScript interfaces

### Key Technical Decisions

1. **Animation Implementation**
   - Used `react-native-reanimated` for smooth, native animations
   - Implemented shared value transitions for better performance
   - Combined multiple transformations (rotate, scale, translate) for the deck effect
   - Used interpolation for smooth animation timing

2. **State Management**
   - Used React's useState for local component state
   - Implemented shared values for animation states
   - Kept navigation state in sync with Expo Router

3. **Navigation Integration**
   - Integrated with Expo Router for type-safe navigation
   - Used file-based routing structure
   - Implemented path-based active state tracking

4. **Styling Approach**
   - Centralized color system in constants
   - Used StyleSheet for optimized style objects
   - Implemented responsive layouts using screen dimensions
   - Maintained consistent spacing and typography

### Animation Details
The deck animation consists of three main parts:
1. Main container rotation (`-10deg`)
2. Content scaling (1.05x)
3. Menu slide-in with opacity transition

## Design Decisions

1. **Color Palette**
   ```typescript
   PRIMARY: "#1A1929"    // Dark navy blue (background)
   SECONDARY: "#A1A1A0"  // Gray
   WHITE: "#F4F3FA"      // Off-white
   ACCENT: "#B87783"     // Rose pink
   DARK_ACCENT: "#5B566A" // Dark gray-purple

## Performance Optimizations

### Animation Performance

   Used native driver for animations
   Implemented proper cleanup in useEffect
   Optimized re-renders using proper dependency arrays
   Used shared values for better performance


### Component Optimization

   Memoized callback functions
   Avoided unnecessary re-renders
   Used proper TypeScript types for better type checking
