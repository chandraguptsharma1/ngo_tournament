import ProfileList from '@/components/profiles/ProfileList';
import { PlayerProfile } from '@/types/profile';

// This would typically come from your API or database
const MOCK_PLAYERS: PlayerProfile[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    avatar: '/images/players/alex.jpg',
    game: 'League of Legends',
    rank: 'Diamond',
    region: 'North America',
    joinedDate: '2023-01-15',
    achievements: [
      {
        id: '1',
        title: 'First Place',
        event: 'Summer Championship 2023',
        date: '2023-08-20',
        position: '1st',
        certificateId: 'CERT-2023-001'
      }
    ],
    badges: [
      {
        id: '1',
        name: 'Tournament Victor',
        description: 'Won a major tournament',
        icon: '/images/badges/trophy.png',
        earnedDate: '2023-08-20'
      }
    ],
    stats: {
      gamesPlayed: 150,
      winRate: 65,
      tournamentParticipation: 5
    }
  },
  // Add more mock players as needed
];

export const metadata = {
  title: 'Players | Tournament NGO',
  description: 'Browse and discover talented players in our community.',
};

export default function PlayersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Players
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover talented players from around the world. Browse through their achievements,
          rankings, and tournament history.
        </p>
      </div>

      <ProfileList profiles={MOCK_PLAYERS} type="player" />
    </div>
  );
} 