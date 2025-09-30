import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RegistrationPage from "./components/RegistrationPage";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ResultsPage from "./components/ResultsPage";
import LeaderboardPage from "./components/LeaderboardPage";
import { getRandomMarkets } from "./data/markets";
import type { GameResults } from "./components/GamePage";
import type { LeaderboardEntry } from "./components/LeaderboardPage";

type GameState = 'registration' | 'home' | 'playing' | 'results' | 'leaderboard';

function App() {
  const [gameState, setGameState] = useState<GameState>('registration');
  const [playerName, setPlayerName] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");
  const [gameResults, setGameResults] = useState<GameResults | null>(null);
  const [currentMarkets, setCurrentMarkets] = useState(getRandomMarkets(12));

  const handleRegistrationComplete = (name: string, email: string) => {
    setPlayerName(name);
    setPlayerEmail(email);
    setGameState('home');
  };

  const handleStartGame = () => {
    setCurrentMarkets(getRandomMarkets(12));
    setGameState('playing');
  };

  const handleGameComplete = (results: GameResults) => {
    setGameResults(results);
    setGameState('results');
  };

  const handleViewLeaderboard = () => {
    setGameState('leaderboard');
  };

  const handlePlayAgain = () => {
    setGameState('home');
  };

  const handleGoHome = () => {
    setGameState('home');
  };

  // Mock leaderboard data
  const mockTopPlayers: LeaderboardEntry[] = [
    { rank: 1, name: "Sarah Chen", score: 1950, accuracy: 95 },
    { rank: 2, name: "Mike Rodriguez", score: 1820, accuracy: 89 },
    { rank: 3, name: "Emma Watson", score: 1750, accuracy: 87 },
    { rank: 4, name: "James Kim", score: 1680, accuracy: 84 },
    { rank: 5, name: "Lisa Anderson", score: 1620, accuracy: 82 },
    { rank: 6, name: "Tom Bradley", score: 1550, accuracy: 79 },
    { rank: 7, name: "Nina Patel", score: 1490, accuracy: 77 },
    { rank: 8, name: "Chris Martinez", score: 1430, accuracy: 75 },
    { rank: 9, name: "Amy Thompson", score: 1370, accuracy: 72 },
    { rank: 10, name: "David Lee", score: 1310, accuracy: 70 },
  ];

  const currentUserInLeaderboard: LeaderboardEntry = gameResults ? {
    rank: 4,
    name: playerName,
    score: gameResults.score,
    accuracy: gameResults.accuracy,
    isCurrentUser: true
  } : mockTopPlayers[3];

  const topPlayersWithUser = mockTopPlayers.map((player, index) => 
    index === 3 && gameResults ? { ...currentUserInLeaderboard, isCurrentUser: true } : player
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {gameState === 'registration' && (
          <RegistrationPage onComplete={handleRegistrationComplete} />
        )}
        {gameState === 'home' && (
          <HomePage onStartGame={handleStartGame} />
        )}
        {gameState === 'playing' && (
          <GamePage markets={currentMarkets} onComplete={handleGameComplete} />
        )}
        {gameState === 'results' && gameResults && (
          <ResultsPage
            results={gameResults}
            playerName={playerName}
            onPlayAgain={handlePlayAgain}
            onViewLeaderboard={handleViewLeaderboard}
          />
        )}
        {gameState === 'leaderboard' && (
          <LeaderboardPage
            topPlayers={topPlayersWithUser}
            currentUser={currentUserInLeaderboard}
            onPlayAgain={handlePlayAgain}
            onGoHome={handleGoHome}
          />
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
