import ProfileList from '@/components/profiles/ProfileList';
import { TeamProfile } from '@/types/profile';
import Image from 'next/image';
import Link from 'next/link';
import { TrophyIcon, UserGroupIcon, ChartBarIcon, GlobeAltIcon, FireIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';

// This would typically come from your API or database
const MOCK_TEAMS: TeamProfile[] = [
  {
    id: '1',
    name: 'Phoenix Gaming',
    logo: '/images/teams/phoenix.jpg',
    game: 'League of Legends',
    rank: 'Elite',
    region: 'North America',
    foundedDate: '2023-01-01',
    achievements: [
      {
        id: '1',
        title: 'Regional Champions',
        event: 'Spring Tournament 2023',
        date: '2023-04-15',
        position: '1st',
        certificateId: 'CERT-2023-T001'
      }
    ],
    badges: [
      {
        id: '1',
        name: 'Elite Squad',
        description: 'Achieved Elite ranking',
        icon: '/images/badges/elite.png',
        earnedDate: '2023-04-15'
      }
    ],
    members: ['1', '2', '3', '4', '5'],
    stats: {
      gamesPlayed: 75,
      winRate: 70,
      tournamentParticipation: 3
    }
  },
  // Add more mock teams here
];

const FEATURED_TEAMS = MOCK_TEAMS.slice(0, 3); // Top 3 teams

export const metadata = {
  title: 'Teams | Tournament NGO',
  description: 'Browse and discover competitive teams in our community.',
};

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Featured Teams */}
      <div className="bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Elite Gaming Teams
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover world-class teams competing in our tournaments. 
              Join the community of champions and make your mark in competitive gaming.
            </p>
          </div>

          {/* Featured Teams Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {FEATURED_TEAMS.map((team) => (
              <div key={team.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-48">
                  <Image
                    src={team.logo || '/images/teams/default-banner.jpg'}
                    alt={team.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{team.name}</h3>
                    <p className="text-white/90">{team.game}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Active Teams</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">1.2K</div>
              <div className="text-gray-600">Players</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Tournaments</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/register?type=team"
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <UserGroupIcon className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Register Your Team</h3>
                <p className="text-gray-600">Join our competitive community</p>
              </div>
            </Link>
            <Link 
              href="/tournaments"
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <TrophyIcon className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Upcoming Tournaments</h3>
                <p className="text-gray-600">View and register for events</p>
              </div>
            </Link>
            <Link 
              href="/rankings"
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <ChartBarIcon className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Team Rankings</h3>
                <p className="text-gray-600">Check global leaderboards</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Teams List Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Browse All Teams
            </h2>
            <p className="text-gray-600">
              Find and follow your favorite teams across different games and regions
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary">
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              All Regions
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary">
              <FireIcon className="w-5 h-5 mr-2" />
              Top Rated
            </button>
          </div>
        </div>

        <ProfileList profiles={MOCK_TEAMS} type="team" />
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Elite?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Create your team profile, participate in tournaments, and compete with the best teams worldwide.
            </p>
            <Link 
              href="/register?type=team"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Register Your Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}