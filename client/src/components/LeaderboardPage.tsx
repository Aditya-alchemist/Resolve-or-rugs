import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "./ThemeToggle";
import { Trophy, Medal, Award, RotateCcw, Home } from "lucide-react";
import deekChampion from "@assets/Deek_Pose_12_1759237131289.png";

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  accuracy: number;
  isCurrentUser?: boolean;
}

interface LeaderboardPageProps {
  topPlayers: LeaderboardEntry[];
  currentUser: LeaderboardEntry;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export default function LeaderboardPage({ topPlayers, currentUser, onPlayAgain, onGoHome }: LeaderboardPageProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-chart-3" />;
      case 2:
        return <Medal className="w-5 h-5 text-muted-foreground" />;
      case 3:
        return <Award className="w-5 h-5 text-chart-4" />;
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBgColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-chart-3/20 border-chart-3/30";
      case 2:
        return "bg-muted/50 border-muted";
      case 3:
        return "bg-chart-4/20 border-chart-4/30";
      default:
        return "bg-card border-card-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container max-w-3xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={deekChampion}
                alt="Deek champion"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="font-display text-2xl">Hall of Fame</h1>
                <p className="text-sm text-muted-foreground">Top prediction market experts</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Trophy className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-3xl mx-auto p-4 space-y-6">
        {/* Top 10 */}
        <div className="space-y-3">
          <h2 className="font-display text-xl flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Top 10 Champions
          </h2>
          {topPlayers.map((player) => (
            <Card
              key={player.rank}
              className={`p-4 border-2 transition-all ${getRankBgColor(player.rank)} ${
                player.isCurrentUser ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`leaderboard-entry-${player.rank}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background/50 flex-shrink-0">
                  {getRankIcon(player.rank)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate" data-testid={`text-player-name-${player.rank}`}>
                    {player.name}
                    {player.isCurrentUser && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                        You
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {player.accuracy}% accuracy
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-display" data-testid={`text-player-score-${player.rank}`}>
                    {player.score}
                  </p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Current User Standing (if not in top 10) */}
        {!currentUser.isCurrentUser && currentUser.rank > 10 && (
          <div className="space-y-3">
            <h2 className="font-display text-xl">Your Standing</h2>
            <Card className="p-4 border-2 ring-2 ring-primary bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 flex-shrink-0">
                  <span className="text-sm font-bold text-primary" data-testid="text-user-rank">
                    #{currentUser.rank}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate" data-testid="text-user-name">
                    {currentUser.name}
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                      You
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentUser.accuracy}% accuracy
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-display" data-testid="text-user-score">
                    {currentUser.score}
                  </p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
              {currentUser.rank > 10 && (
                <p className="text-sm text-center text-muted-foreground mt-3 pt-3 border-t border-border">
                  You're in the top {Math.ceil((currentUser.rank / 100) * 10) * 10}%! Keep playing to climb higher.
                </p>
              )}
            </Card>
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <Button 
            onClick={onPlayAgain}
            className="h-12 font-semibold"
            data-testid="button-play-again"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
          <Button 
            onClick={onGoHome}
            variant="outline"
            className="h-12 font-semibold"
            data-testid="button-go-home"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Leaderboard updates in real-time
        </p>
      </div>
    </div>
  );
}
