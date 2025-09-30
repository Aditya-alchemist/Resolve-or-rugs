import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "./ThemeToggle";
import deekPose from "@assets/Deek_Pose_1_1759237070527.png";
import { Play, Target, Zap, Trophy } from "lucide-react";

interface HomePageProps {
  onStartGame: () => void;
}

export default function HomePage({ onStartGame }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-lg space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <img 
              src={deekPose} 
              alt="Deek mascot" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-foreground">
            Resolve or Rug?
          </h1>
          <p className="text-xl text-muted-foreground">
            Test your prediction market skills with Deek!
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <h2 className="font-display text-2xl">How to Play</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-display flex-shrink-0">
                1
              </div>
              <p className="text-muted-foreground pt-0.5">
                Read each market headline carefully
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-2/20 text-chart-2 font-display flex-shrink-0">
                2
              </div>
              <p className="text-muted-foreground pt-0.5">
                Swipe <span className="text-chart-2 font-semibold">→ RIGHT</span> if it can resolve fairly
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/20 text-destructive font-display flex-shrink-0">
                3
              </div>
              <p className="text-muted-foreground pt-0.5">
                Swipe <span className="text-destructive font-semibold">← LEFT</span> if it's vague or unfair (rug!)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-3/20 text-chart-3 font-display flex-shrink-0">
                4
              </div>
              <p className="text-muted-foreground pt-0.5">
                Build streaks for bonus points!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-chart-3/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-chart-3" />
              </div>
              <span className="text-sm font-medium">Fast-Paced</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-chart-2/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-chart-2" />
              </div>
              <span className="text-sm font-medium">Educational</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Shareable</span>
            </div>
          </div>
        </Card>

        <Button 
          onClick={onStartGame}
          size="lg"
          className="w-full h-14 text-xl font-display"
          data-testid="button-start-playing"
        >
          <Play className="w-6 h-6 mr-2" />
          Start Playing
        </Button>

        <p className="text-sm text-muted-foreground">
          Learn the difference between good markets and rugs!
        </p>

        <p className="text-xs text-muted-foreground">
          Created by XO • Master prediction markets with Deek
        </p>
      </div>
    </div>
  );
}
