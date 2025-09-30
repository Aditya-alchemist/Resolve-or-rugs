import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Flame, Hash, Share2, RotateCcw, ExternalLink } from "lucide-react";
import type { GameResults } from "./GamePage";
import deekCelebrate from "@assets/Deek_Pose_13_1759237131289.png";

interface ResultsPageProps {
  results: GameResults;
  playerName: string;
  onPlayAgain: () => void;
  onViewLeaderboard: () => void;
}

export default function ResultsPage({ results, playerName, onPlayAgain, onViewLeaderboard }: ResultsPageProps) {
  const performanceMessage = 
    results.accuracy >= 80 ? "Master Level!" :
    results.accuracy >= 60 ? "Keep Learning!" :
    "Practice Makes Perfect!";

  const shareText = `I can spot rugs better than Deek! I scored ${results.score} points with ${results.accuracy}% accuracy! Test your prediction market skills: `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={deekCelebrate}
              alt="Deek celebrating"
              className="w-40 h-40 object-contain"
            />
          </div>
          <h1 className="font-display text-4xl" data-testid="text-performance-message">
            {performanceMessage}
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-6 space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mx-auto">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-display text-center" data-testid="text-final-score">{results.score}</p>
            <p className="text-sm text-muted-foreground text-center">Final Score</p>
          </Card>

          <Card className="p-6 space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-chart-2/20 mx-auto">
              <Target className="w-6 h-6 text-chart-2" />
            </div>
            <p className="text-3xl font-display text-center" data-testid="text-accuracy-result">{results.accuracy}%</p>
            <p className="text-sm text-muted-foreground text-center">Accuracy</p>
          </Card>

          <Card className="p-6 space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-chart-3/20 mx-auto">
              <Flame className="w-6 h-6 text-chart-3" />
            </div>
            <p className="text-3xl font-display text-center" data-testid="text-best-streak">{results.bestStreak}</p>
            <p className="text-sm text-muted-foreground text-center">Best Streak</p>
          </Card>

          <Card className="p-6 space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 mx-auto">
              <Hash className="w-6 h-6 text-foreground" />
            </div>
            <p className="text-3xl font-display text-center" data-testid="text-questions-answered">{results.totalQuestions}</p>
            <p className="text-sm text-muted-foreground text-center">Questions</p>
          </Card>
        </div>

        <Card className="p-4">
          <p className="text-sm text-muted-foreground text-center mb-3">Share your results:</p>
          <p className="text-sm text-center leading-relaxed bg-muted/50 p-3 rounded-lg" data-testid="text-share-message">
            "{shareText}"
          </p>
        </Card>

        <div className="space-y-3">
          <Button 
            onClick={() => {
              navigator.clipboard.writeText(shareText + window.location.origin);
              console.log('Share text copied');
            }}
            className="w-full h-12 font-semibold"
            variant="default"
            data-testid="button-share"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share & Challenge Friends
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={onPlayAgain}
              variant="outline"
              className="h-12 font-semibold"
              data-testid="button-play-again"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
            <Button 
              onClick={onViewLeaderboard}
              variant="outline"
              className="h-12 font-semibold"
              data-testid="button-view-leaderboard"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Leaderboard
            </Button>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Powered by XO • Learn prediction markets with Deek
        </p>
      </div>
    </div>
  );
}
