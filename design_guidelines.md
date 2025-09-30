# Design Guidelines: "Resolve or Rug?" Prediction Market Game

## Design Approach
**Reference-Based Gaming Aesthetic** - Drawing inspiration from successful educational gaming apps like Duolingo's gamification patterns, Tinder's swipe mechanics, and modern quiz apps. The design emphasizes playful engagement while maintaining clarity for educational content.

## Core Design Principles
1. **Mobile-First Playfulness** - Every interaction feels game-like and rewarding
2. **Educational Clarity** - Complex market concepts presented through clear visual hierarchy
3. **Character-Driven Experience** - Deek the mascot is central to emotional engagement
4. **Progressive Disclosure** - Information revealed through natural game flow

## Color Palette

**Dark Mode Gaming Theme** (Primary Experience)
- **Background Base**: 15 8% 12% (deep charcoal)
- **Surface Elevated**: 15 8% 18% (card backgrounds)
- **Primary Purple**: 270 91% 65% (#7C3AED) - brand, CTAs, active states
- **Success Green**: 142 76% 36% - correct answers, positive feedback
- **Error Red**: 0 84% 60% - wrong answers, rug pulls
- **Warning Amber**: 38 92% 50% - streaks, multipliers, achievements
- **Text Primary**: 0 0% 98% - headings, important content
- **Text Secondary**: 0 0% 70% - descriptions, body text

**Light Mode** (Optional)
- **Background**: 0 0% 98%
- **Surface**: 0 0% 100%
- Maintain same accent colors with adjusted opacity

## Typography
- **Display/Headers**: Fredoka One (playful, gaming feel) - 32px to 48px for titles
- **Body/UI**: Inter (clean readability) - 14px to 18px for content
- **Scores/Numbers**: Fredoka One at 24px-36px (emphasis on gamification)
- **Button Text**: Inter SemiBold at 16px
- **Card Titles**: Fredoka One at 20px-24px

## Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20 for consistent rhythm
- Small gaps: space-y-2, gap-4
- Card padding: p-6 to p-8
- Section spacing: py-12 to py-16
- Screen margins: px-4 on mobile, px-6 on desktop

**Container Strategy**:
- Game cards: max-w-md (centered)
- Modals/overlays: max-w-lg
- Leaderboard: max-w-2xl
- Full-width for registration flow

## Component Library

### 1. Registration Screen
**Layout**: Single-screen form with Deek mascot introduction
- Hero section with animated Deek waving (200px height)
- Centered card (max-w-md) with soft shadow and elevated surface color
- Input fields with purple focus rings, rounded-xl borders
- Large primary button (w-full, h-12) with gradient from purple-600 to purple-500
- Micro-copy below form: "No spam, just high scores! 🎯"

### 2. Game Interface (Enhanced)
**Card Stack Design**:
- Cards with rounded-2xl, heavy shadow (shadow-2xl)
- Gradient borders (purple on legitimate markets, red tint on potential rugs)
- Market title in Fredoka One, 24px bold
- Description in Inter, 16px with relaxed leading
- Category badge (top-right): pill-shaped, semi-transparent with blur backdrop
- Swipe indicators: subtle arrow hints with fade-in animation

**Deek Avatar Integration**:
- Fixed position bottom center during swipe decisions
- Reactive expressions: 🙈 (thinking), 😊 (correct), 😱 (wrong)
- Smooth transition animations (300ms ease-out)
- Speech bubble for tips (rounded-2xl, tail pointer to Deek)

**Score Header**:
- Sticky top bar with blur backdrop (backdrop-blur-md)
- Left: Current score (Fredoka One, 28px)
- Center: Progress dots (filled purple circles for completed)
- Right: Streak counter with flame emoji 🔥

### 3. Feedback Modal
**Full-screen overlay** with blur backdrop (backdrop-blur-lg bg-black/60)
- Content card centered (max-w-lg)
- Animated Deek at top (celebrating or consoling)
- Result indicator: Large ✓ or ✗ with pulsing animation
- Title: "Spot On!" or "Not Quite!" (Fredoka One, 32px)
- Explanation text in clean card with background surface color
- Points earned display with confetti animation for correct answers
- Continue button (w-full) with purple gradient

### 4. Leaderboard Screen
**Dual Section Layout**:

**Top 10 Champions** (upper 60% of viewport):
- Header: "Hall of Fame" (Fredoka One, 36px) with trophy emoji 🏆
- Podium design for top 3 (larger cards with gold/silver/bronze accents)
- Ranks 4-10 in compact list cards
- Each entry shows: Rank badge, player name (truncated), score (Fredoka One)
- Top 3 have subtle glow effect (box-shadow with purple/gold tint)

**Your Ranking** (lower section):
- Sticky card at bottom with strong elevation
- "Your Standing" header with position indicator
- Player's rank, name, score in larger text
- Percentile badge: "Top 25%" with progress ring visualization
- Share button: "Brag About It" with gradient background

**Visual Enhancements**:
- Animated entry (slide-up with stagger for each rank)
- Rank changes with subtle highlight pulse
- Background: subtle grid pattern or particle effects

### 5. End Game Celebration
**Brag Screen Improvements**:
- Full viewport with purple gradient background (270 91% 65% to 270 91% 45%)
- Deek celebration animation (bouncing/dancing)
- Score summary card (glass morphism effect)
- Stats breakdown: Accuracy %, Total Points, Streak Record
- Social share button grid (2x2): Twitter, LinkedIn, Copy Score
- "Play Again" primary CTA and "View Leaderboard" secondary

## Navigation & Flow
- Registration → Game Tutorial (skip option) → Main Game → Results → Leaderboard
- Persistent back button (top-left) except during active game
- Bottom tab bar for post-game: Replay, Leaderboard, Profile (future)

## Animations (Minimal but Impactful)
- **Card Swipes**: Spring physics (stiffness: 300, damping: 30)
- **Deek Reactions**: Bounce entrance, scale on interaction
- **Score Updates**: Number count-up animation
- **Modal Transitions**: Fade + scale (0.95 to 1.0)
- **Leaderboard Entry**: Staggered slide-up (50ms delay per item)
- **Success States**: Brief confetti burst (2s duration, canvas-based)

## Interactive States
- **Buttons**: Hover scale (1.02), active scale (0.98), purple glow on focus
- **Cards**: Subtle lift on hover (-translate-y-1), shadow increase
- **Inputs**: Purple ring on focus (ring-2 ring-purple-500), error shake animation
- **Swipe Threshold**: Visual feedback at 30% drag distance

## Responsive Behavior
- Mobile (< 640px): Single column, full-width cards, bottom-fixed CTAs
- Tablet (640-1024px): max-w-md centered, increased padding
- Desktop (> 1024px): max-w-lg, side-by-side stats on leaderboard

## Accessibility
- High contrast text (WCAG AAA where possible)
- Focus indicators on all interactive elements (purple ring)
- Aria labels for swipe gestures and game state
- Reduced motion fallbacks (prefers-reduced-motion)
- Touch targets minimum 44x44px

## Images & Assets
**Deek Mascot States** (use provided assets):
- Default/Idle: Homepage, waiting for swipe
- Thinking: During card presentation
- Happy: Correct answer celebration
- Sad: Wrong answer empathy
- Champion: End game high score

**Background Patterns**:
- Subtle dot grid on registration (opacity: 0.1)
- Particle effects on leaderboard (purple orbs, slow float animation)
- Card stack preview (blurred cards behind active card)

This design creates a cohesive, engaging gaming experience that balances playful aesthetics with educational clarity, ensuring players remain motivated while learning about prediction markets.