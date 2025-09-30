import LeaderboardPage from '../LeaderboardPage';

export default function LeaderboardPageExample() {
  const mockTopPlayers = [
    { rank: 1, name: "Alice Johnson", score: 1850, accuracy: 92, isCurrentUser: false },
    { rank: 2, name: "Bob Smith", score: 1720, accuracy: 88, isCurrentUser: false },
    { rank: 3, name: "Carol Williams", score: 1650, accuracy: 85, isCurrentUser: false },
    { rank: 4, name: "David Brown", score: 1580, accuracy: 82, isCurrentUser: true },
    { rank: 5, name: "Eve Davis", score: 1520, accuracy: 80, isCurrentUser: false },
    { rank: 6, name: "Frank Miller", score: 1450, accuracy: 78, isCurrentUser: false },
    { rank: 7, name: "Grace Wilson", score: 1390, accuracy: 75, isCurrentUser: false },
    { rank: 8, name: "Henry Moore", score: 1330, accuracy: 73, isCurrentUser: false },
    { rank: 9, name: "Ivy Taylor", score: 1270, accuracy: 70, isCurrentUser: false },
    { rank: 10, name: "Jack Anderson", score: 1210, accuracy: 68, isCurrentUser: false },
  ];

  const mockCurrentUser = mockTopPlayers[3];

  return (
    <LeaderboardPage
      topPlayers={mockTopPlayers}
      currentUser={mockCurrentUser}
      onPlayAgain={() => console.log('Play again clicked')}
      onGoHome={() => console.log('Go home clicked')}
    />
  );
}
