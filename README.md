# 🐒 Resolve or Rug?

**Resolve or Rug?** is a  **prediction market education game** featuring **Deek**, a playful  mascot. The game helps users learn how to identify **legitimate prediction markets** vs **rug pulls (scams)** through swipe-based gameplay (like Tinder).

Players swipe **right for resolve** or **left for rug**, get instant educational feedback, and compete on the **leaderboard** with scores, streaks, and achievements.

---

## ✨ Features

* 🎮 **Swipe-based gameplay** powered by Framer Motion
* 📚 **Educational explanations** after each decision
* 🏆 **Scoring & streak system** with accuracy tracking
* 🎖️ **Achievements & leaderboards** to drive engagement
* 🎨 **Dark-mode friendly UI** with playful Deek mascot
* 🚀 **Fast, mobile-first frontend** built on React + Vite
* 💾 **Serverless PostgreSQL (Neon)** storage with Drizzle ORM

---

## 🏗️ System Architecture

### 🔹 Frontend

* **Framework**: React 18 + TypeScript + Vite
* **UI/Styling**: Tailwind CSS + Shadcn/ui + Radix Primitives
* **State Management**: React hooks + TanStack Query
* **Animations**: Framer Motion (swipe cards, transitions)
* **Routing**: Simple state machine pattern (`App.tsx`)

Key Components:

* `RegistrationPage`, `HomePage`, `GamePage`, `ResultsPage`, `LeaderboardPage`
* `MarketCard`, `FeedbackModal` (game interactions)

### 🔹 Backend

* **Server**: Express.js + TypeScript
* **ORM**: Drizzle ORM + PostgreSQL (Neon serverless)
* **API Endpoints**:

  * `POST /api/game-results` → Save completed game results
  * `GET /api/leaderboard` → Fetch leaderboard scores

**Storage Implementations**:

* `MemStorage` → In-memory (dev/test)
* `DbStorage` → PostgreSQL with Drizzle

---

## 🗄️ Database Schema

```ts
// users
id | username

// gameResults
id | playerName | playerEmail | score | accuracy | createdAt
```

Validation handled with **Zod schemas**.

---

## 🎮 Game Logic

* **Question Bank**: Predefined markets (`client/src/data/markets.ts`)
* Each market includes:

  * `question` (scenario text)
  * `isResolve` (true/false)
  * `explanation` (educational feedback)
  * `category` (Crypto, Finance, Tech, etc.)
  * `difficulty` (Easy/Medium/Hard)

**Scoring System**:

* ✅ Correct answer → +100 points
* 🔥 Streak multiplier → `floor(streak/3) + 1`
* 📊 Tracks **accuracy** + **best streak**

Each game: **12 random markets** → Results summary screen

---

## ⚙️ Tech Stack

**Frontend**

* React 18, TypeScript, Vite
* Tailwind CSS, Shadcn/ui, Radix UI
* TanStack Query, React Hook Form
* Framer Motion, Embla Carousel

**Backend**

* Express.js (TypeScript)
* Drizzle ORM + PostgreSQL (Neon serverless)
* Zod validation

**Utilities**

* date-fns, clsx, tailwind-merge, class-variance-authority

---

## 📂 Project Structure

```
resolve-or-rug/
├── client/                # Frontend
│   ├── src/
│   │   ├── components/    # UI + game components
│   │   ├── pages/         # Registration, Home, Game, etc.
│   │   ├── data/          # Market scenarios
│   │   └── styles/        # Tailwind configs, design system
│   └── index.html
│
├── server/                # Backend
│   ├── routes/            # API endpoints
│   ├── storage/           # MemStorage, DbStorage
│   └── schema.ts          # Drizzle schema
│
├── shared/                # Shared types, validation schemas
├── attached_assets/       # Mascot images (Deek)
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone repo

```bash
git clone https://github.com/your-username/resolve-or-rug.git
cd resolve-or-rug
```

### 2️⃣ Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 3️⃣ Set up environment variables

Create `.env` in `server/`:

```
DATABASE_URL=your_neon_postgres_url
PORT=3000
```

### 4️⃣ Run development servers

Frontend:

```bash
cd client
npm run dev
```

Backend:

```bash
cd server
npm run dev
```

---

## 📖 Roadmap

* [ ] Add authentication system
* [ ] Expand question bank with community contributions
* [ ] NFT-style achievements for streaks
* [ ] Multi-language support

---

## 🐒 Meet Deek

Deek is our fun-loving monkey mascot 🐵 — he’ll cheer you on when you swipe right (resolve) and facepalm when you swipe left (rug).

---


