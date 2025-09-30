import GamePage from '../GamePage';

export default function GamePageExample() {
  const mockMarkets = [
    {
      id: 1,
      question: "Will Dogecoin reach $1 by end of 2025?",
      isResolve: true,
      explanation: "Specific price target with clear deadline. Cryptocurrency prices are publicly verifiable.",
      category: "Crypto",
      difficulty: "easy" as const
    },
    {
      id: 2,
      question: "Will streaming kill traditional TV completely?",
      isResolve: false,
      explanation: "\"Kill completely\" lacks specific metrics for viewership or market share decline.",
      category: "Entertainment",
      difficulty: "easy" as const
    }
  ];

  return (
    <GamePage
      markets={mockMarkets}
      onComplete={(results) => console.log('Game complete:', results)}
    />
  );
}
