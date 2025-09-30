import ResultsPage from '../ResultsPage';

export default function ResultsPageExample() {
  const mockResults = {
    score: 850,
    accuracy: 75,
    bestStreak: 5,
    totalQuestions: 12,
    correctAnswers: 9
  };

  return (
    <ResultsPage
      results={mockResults}
      playerName="John Doe"
      onPlayAgain={() => console.log('Play again clicked')}
      onViewLeaderboard={() => console.log('View leaderboard clicked')}
    />
  );
}
