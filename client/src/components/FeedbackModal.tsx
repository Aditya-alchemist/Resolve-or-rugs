import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, X, Info } from "lucide-react";
import type { Market } from "@/data/markets";
import deekCorrect from "@assets/Deek_Pose_6_1759237100597.png";
import deekWrong from "@assets/Deek_Pose_10_1759237131287.png";

interface FeedbackModalProps {
  open: boolean;
  market: Market;
  userChoice: 'left' | 'right';
  isCorrect: boolean;
  onContinue: () => void;
}

export default function FeedbackModal({ open, market, userChoice, isCorrect, onContinue }: FeedbackModalProps) {
  const userAnswered = userChoice === 'right' ? 'RESOLVE' : 'RUG';
  const correctAnswer = market.isResolve ? 'RESOLVE' : 'be flagged as RUG';

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="max-w-lg p-0 gap-0 border-2"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {/* Header with result */}
        <div className={`p-6 text-center ${isCorrect ? 'bg-chart-2/10' : 'bg-destructive/10'}`}>
          <div className="flex justify-center mb-4">
            <img 
              src={isCorrect ? deekCorrect : deekWrong}
              alt={isCorrect ? "Deek celebrating" : "Deek disappointed"}
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2 ${
            isCorrect ? 'bg-chart-2 text-white' : 'bg-destructive text-destructive-foreground'
          }`}>
            {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
            <span className="font-display text-xl">
              {isCorrect ? 'Correct!' : 'Wrong!'}
            </span>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-semibold">
                This market should <span className={market.isResolve ? 'text-chart-2' : 'text-destructive'}>{correctAnswer}</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {market.explanation}
              </p>
            </div>
          </div>

          <Button 
            onClick={onContinue}
            className="w-full h-12 font-semibold text-lg"
            data-testid="button-continue"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
