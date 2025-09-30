import { useState } from 'react';
import FeedbackModal from '../FeedbackModal';
import { Button } from '@/components/ui/button';

export default function FeedbackModalExample() {
  const [open, setOpen] = useState(true);

  const mockMarket = {
    id: 1,
    question: "Will Dogecoin reach $1 by end of 2025?",
    isResolve: true,
    explanation: "Specific price target with clear deadline. Cryptocurrency prices are publicly verifiable.",
    category: "Crypto",
    difficulty: "easy" as const
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>Show Correct Feedback</Button>
        <FeedbackModal
          open={open}
          market={mockMarket}
          userChoice="right"
          isCorrect={true}
          onContinue={() => {
            console.log('Continue clicked');
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
}
