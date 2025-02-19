# Implementation Tasks

## Project Setup

- [x] Install and configure shadcn/ui
- [x] Set up project folder structure
- [x] Create basic types in types.ts
- [x] Add constants for dance moves and difficulties

## Welcome Screen

- [x] Create layout with shadcn components
- [x] Implement mode selection component
- [x] Implement difficulty selection component
- [x] Create start button with routing
- [x] Add basic styling

## Dance Screen

- [ ] Create basic layout structure
- [ ] Implement music prompt component with playlist links
- [ ] Create tempo detection system:
  - [ ] Set up microphone access
  - [ ] Implement Web Audio API analysis
  - [ ] Create BPM calculation logic
  - [ ] Add error handling for mic access
- [ ] Build move display component:
  - [ ] Create move selection logic
  - [ ] Implement timing system
  - [ ] Add animations for move changes
- [ ] Add end session button
- [ ] Implement cleanup for audio resources

## Thank You Screen

- [ ] Create basic layout
- [ ] Implement share functionality
- [ ] Add dance again button with routing
- [ ] Add animations and styling

## Audio Generation

- [ ] Create Node.js script for audio generation:
  - [ ] Set up OpenAI Whisper API integration
  - [ ] Create text templates for instructions
  - [ ] Implement audio file generation
  - [ ] Add file saving logic
  - [ ] Generate and save all required audio files
- [ ] Add audio playback system to dance screen

## State Management

- [ ] Create dance session context
- [ ] Implement URL parameter handling
- [ ] Add state persistence where needed

## Testing & Optimization

- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Test microphone access on different browsers
- [ ] Optimize tempo detection performance
- [ ] Test audio playback timing
- [ ] Verify mobile responsiveness

## Documentation

- [ ] Add README.md with setup instructions
- [ ] Document audio generation process
- [ ] Add comments to complex logic
- [ ] Create user guide

## Deployment

- [ ] Configure build settings
- [ ] Test production build
- [ ] Deploy to hosting platform
