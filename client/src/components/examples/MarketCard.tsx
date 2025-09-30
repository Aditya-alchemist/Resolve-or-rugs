import MarketCard from '../MarketCard';

export default function MarketCardExample() {
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
      <div className="w-full max-w-md relative h-[500px]">
        <MarketCard 
          market={mockMarket}
          onSwipe={(direction) => console.log('Swiped:', direction)}
        />
      </div>
    </div>
  );
}
