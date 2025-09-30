# Overview

"Resolve or Rug?" is a mobile-first prediction market education game featuring Deek, a monkey mascot. The game teaches users to identify legitimate prediction markets versus "rug pulls" (scam markets) through swipe-based gameplay similar to Tinder. Players review market scenarios, swipe left (rug) or right (resolve), receive educational feedback, and compete on a leaderboard. The application combines gamification elements (scoring, streaks, achievements) with educational content delivery.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**React + TypeScript with Vite**: The frontend uses React 18 with TypeScript for type safety and Vite as the build tool, providing fast hot module replacement during development and optimized production builds.

**Component-Based Design**: The application follows a component-based architecture with clear separation of concerns:
- Page components (RegistrationPage, HomePage, GamePage, ResultsPage, LeaderboardPage) handle routing and state management
- Game components (MarketCard, FeedbackModal) manage gameplay interactions
- UI components (shadcn/ui library) provide consistent design patterns

**State Management**: Uses React's built-in state management (useState) for local component state and TanStack Query for server state management and caching. Game state flows through props from parent to child components.

**Routing**: Implements client-side routing through a simple state machine pattern in App.tsx rather than traditional router libraries, managing transitions between registration, home, playing, results, and leaderboard states.

**Animation & Gestures**: Leverages Framer Motion for smooth animations and swipe gesture handling. The drag-based card swiping mechanic uses motion values and transforms to create fluid interactions.

**Design System**: Built on Tailwind CSS with a custom gaming-themed design system defined in design_guidelines.md. Uses Shadcn/ui component library configured through components.json for consistent UI patterns. Color palette emphasizes dark mode with purple primary (#7C3AED), green success, and red error themes. Typography combines Fredoka One for playful headings and Inter for readable body text.

## Backend Architecture

**Express.js Server**: Node.js server using Express with TypeScript for API endpoints. The server follows a modular architecture with route registration separated from server initialization.

**API Design**: RESTful endpoints for game data:
- POST /api/game-results: Save completed game results
- GET /api/leaderboard: Retrieve top scores with configurable limit

**Data Storage Strategy**: Implements a storage interface pattern (IStorage) with two implementations:
- MemStorage: In-memory storage using Maps for development/testing
- Database storage using Drizzle ORM configured for PostgreSQL (via Neon serverless)

The storage abstraction allows easy switching between implementations without changing business logic.

**Schema Design**: Database schema defined in shared/schema.ts using Drizzle ORM:
- users table: id, username, password for future authentication
- gameResults table: id, playerName, playerEmail (optional), score, accuracy, createdAt

Uses Zod schemas for validation at API boundaries.

**Session Management**: Configured for session-based storage using connect-pg-simple (PostgreSQL session store), though currently not actively used for authentication.

## Game Logic & Data

**Question Bank**: Market scenarios hardcoded in client/src/data/markets.ts as TypeScript objects. Each market includes:
- question: The market scenario text
- isResolve: Boolean indicating if it's legitimate
- explanation: Educational content explaining the answer
- category: Classification (Crypto, Finance, Technology, etc.)
- difficulty: Easy/Medium/Hard rating

**Scoring Algorithm**: 
- Base points: 100 per correct answer
- Streak multiplier: Floor(streak/3) + 1
- Accuracy tracking: Percentage of correct answers
- Best streak tracking: Maximum consecutive correct answers

**Game Flow**: 12 randomly selected markets per game session, with immediate feedback after each swipe and comprehensive results screen at the end.

# External Dependencies

## Third-Party Services

**Neon Database**: PostgreSQL database hosted on Neon's serverless platform, accessed via WebSocket connection using @neondatabase/serverless package. The connection uses DATABASE_URL environment variable.

## Key Libraries

**UI Framework**: 
- React 18 for component architecture
- Radix UI primitives (@radix-ui/*) for accessible components
- Shadcn/ui for pre-built component patterns
- Tailwind CSS for utility-first styling

**Data & State**:
- TanStack Query (@tanstack/react-query) for server state management and caching
- Drizzle ORM (drizzle-orm) for database operations with Zod integration
- React Hook Form (@hookform/resolvers) for form validation

**Animation**: 
- Framer Motion for animations and gesture handling
- Embla Carousel (embla-carousel-react) for carousel functionality

**Development Tools**:
- Vite for build tooling and dev server
- TypeScript for type safety
- ESBuild for production server bundling

**Utilities**:
- date-fns for date formatting
- clsx + tailwind-merge for className management
- class-variance-authority for component variant patterns

## Asset Management

**Static Assets**: Mascot images (Deek poses) stored in attached_assets directory, imported as modules and referenced through Vite's asset handling system using @assets alias.

**Font Loading**: Google Fonts (Fredoka One, Inter) loaded via CDN in client/index.html.