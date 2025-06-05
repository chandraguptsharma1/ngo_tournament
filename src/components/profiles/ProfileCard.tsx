'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge, PlayerProfile, TeamProfile } from '@/types/profile';
import { TrophyIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface ProfileCardProps {
  profile: PlayerProfile | TeamProfile;
  type: 'player' | 'team';
}

const ProfileCard = ({ profile, type }: ProfileCardProps) => {
  const isPlayer = type === 'player';
  const imageUrl = isPlayer ? (profile as PlayerProfile).avatar : (profile as TeamProfile).logo;
  const defaultImage = isPlayer ? '/images/default-avatar.png' : '/images/default-team.png';

  const renderBadges = (badges: Badge[]) => {
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {badges.slice(0, 3).map((badge) => (
          <div
            key={badge.id}
            className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
            title={badge.description}
          >
            <Image
              src={badge.icon}
              alt={badge.name}
              width={16}
              height={16}
              className="mr-1"
            />
            <span>{badge.name}</span>
          </div>
        ))}
        {badges.length > 3 && (
          <div className="text-sm text-gray-500">+{badges.length - 3} more</div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16">
            <Image
              src={imageUrl || defaultImage}
              alt={profile.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Link 
              href={`/${type}s/${profile.id}`}
              className="text-xl font-semibold text-gray-900 hover:text-primary"
            >
              {profile.name}
            </Link>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <span>{profile.game}</span>
              <span>•</span>
              <span>{profile.rank}</span>
              <span>•</span>
              <span>{profile.region}</span>
            </div>
          </div>
        </div>

        {profile.badges.length > 0 && renderBadges(profile.badges)}

        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div className="flex flex-col items-center">
            <TrophyIcon className="w-5 h-5 text-primary mb-1" />
            <div className="text-sm font-medium">{profile.achievements.length}</div>
            <div className="text-xs text-gray-500">Achievements</div>
          </div>
          <div className="flex flex-col items-center">
            <ChartBarIcon className="w-5 h-5 text-primary mb-1" />
            <div className="text-sm font-medium">{profile.stats.winRate}%</div>
            <div className="text-xs text-gray-500">Win Rate</div>
          </div>
          <div className="flex flex-col items-center">
            <UserGroupIcon className="w-5 h-5 text-primary mb-1" />
            <div className="text-sm font-medium">{profile.stats.tournamentParticipation}</div>
            <div className="text-xs text-gray-500">Tournaments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 