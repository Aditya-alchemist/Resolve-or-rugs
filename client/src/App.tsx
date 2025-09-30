import { useState } from "react";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { queryClient, apiRequest } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import RegistrationPage from "./components/RegistrationPage";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ResultsPage from "./components/ResultsPage";
import LeaderboardPage from "./components/LeaderboardPage";
import { getRandomMarkets } from "./data/markets";
import type { GameResults } from "./components/GamePage";
import type { LeaderboardEntry } from "./components/LeaderboardPage";
import type { GameResult } from "@shared/schema";

type GameState = 'registration' | 'home' | 'playing' | 'results' | 'leaderboard';

function AppContent() {
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

  const handleGameComplete = async (results: GameResults) => {
    setGameResults(results);
    
    // Save game result to backend
    try {
      await apiRequest("POST", "/api/game-results", {
        playerName,
        playerEmail,
        score: results.score,
        accuracy: results.accuracy,
      });
      // Invalidate leaderboard cache
      queryClient.invalidateQueries({ queryKey: ["/api/leaderboard"] });
    } catch (error) {
      console.error("Failed to save game result:", error);
    }
    
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

  // Fetch real leaderboard data
  const { data: leaderboardData } = useQuery<GameResult[]>({
    queryKey: ["/api/leaderboard"],
    enabled: gameState === 'leaderboard',
  });

  // Transform backend data to leaderboard entries
  const topPlayers: LeaderboardEntry[] = (leaderboardData || []).map((result, index) => ({
    rank: index + 1,
    name: result.playerName,
    score: result.score,
    accuracy: result.accuracy,
    isCurrentUser: result.playerName === playerName,
  }));

  // Find current user in leaderboard
  const currentUserInLeaderboard: LeaderboardEntry = topPlayers.find(p => p.isCurrentUser) || {
    rank: topPlayers.length + 1,
    name: playerName,
    score: gameResults?.score || 0,
    accuracy: gameResults?.accuracy || 0,
    isCurrentUser: true,
  };

  return (
    <>
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
          topPlayers={topPlayers}
          currentUser={currentUserInLeaderboard}
          onPlayAgain={handlePlayAgain}
          onGoHome={handleGoHome}
        />
      )}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AppContent />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
