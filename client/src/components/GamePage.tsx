import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Flame } from "lucide-react";
import MarketCard from "./MarketCard";
import FeedbackModal from "./FeedbackModal";
import type { Market } from "@/data/markets";
import deekLeft from "@assets/Deek_Pose_2_1759237070528.png";
import deekRight from "@assets/Deek_Pose_1_1759237070527.png";

interface GamePageProps {
  markets: Market[];
  onComplete: (results: GameResults) => void;
}

export interface GameResults {
  score: number;
  accuracy: number;
  bestStreak: number;
  totalQuestions: number;
  correctAnswers: number;
}

export default function GamePage({ markets, onComplete }: GamePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{ choice: 'left' | 'right', isCorrect: boolean } | null>(null);
  const [deekImage, setDeekImage] = useState(deekRight);

  const currentMarket = markets[currentIndex];
  const progress = ((currentIndex) / markets.length) * 100;
  const accuracy = currentIndex > 0 ? Math.round((correctAnswers / currentIndex) * 100) : 0;

  const handleSwipe = (direction: 'left' | 'right') => {
    const userThinkResolve = direction === 'right';
    const isCorrect = userThinkResolve === currentMarket.isResolve;

    if (isCorrect) {
      const streakMultiplier = Math.floor(streak / 3) + 1;
      const pointsEarned = 100 * streakMultiplier;
      setScore(prev => prev + pointsEarned);
      setStreak(prev => prev + 1);
      setBestStreak(prev => Math.max(prev, streak + 1));
      setCorrectAnswers(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setLastAnswer({ choice: direction, isCorrect });
    setShowFeedback(true);
    setDeekImage(direction === 'left' ? deekLeft : deekRight);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    
    if (currentIndex < markets.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete({
        score,
        accuracy,
        bestStreak,
        totalQuestions: markets.length,
        correctAnswers
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with stats */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container max-w-2xl mx-auto p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl" data-testid="text-game-title">
              Resolve or Rug?
            </h1>
            <div className="flex items-center gap-4">
              <img 
                src={deekImage}
                alt="Deek mascot"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span data-testid="text-progress">Progress</span>
              <span data-testid="text-progress-count">{currentIndex} / {markets.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-card">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-2xl font-display" data-testid="text-score">{score}</span>
              <span className="text-xs text-muted-foreground">Score</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-card">
              <Target className="w-5 h-5 text-chart-2" />
              <span className="text-2xl font-display" data-testid="text-accuracy">{accuracy}%</span>
              <span className="text-xs text-muted-foreground">Accuracy</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-card">
              <Flame className="w-5 h-5 text-chart-3" />
              <span className="text-2xl font-display" data-testid="text-streak">{streak}</span>
              <span className="text-xs text-muted-foreground">Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md relative h-[500px]">
          <AnimatePresence>
            {currentMarket && !showFeedback && (
              <MarketCard
                key={currentMarket.id}
                market={currentMarket}
                onSwipe={handleSwipe}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && lastAnswer && (
        <FeedbackModal
          open={showFeedback}
          market={currentMarket}
          userChoice={lastAnswer.choice}
          isCorrect={lastAnswer.isCorrect}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
