'use client';

import { useState, useMemo } from 'react';
import { PlayerProfile, TeamProfile } from '@/types/profile';
import ProfileCard from './ProfileCard';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface ProfileListProps {
  profiles: (PlayerProfile | TeamProfile)[];
  type: 'player' | 'team';
}

const ProfileList = ({ profiles, type }: ProfileListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    game: '',
    rank: '',
    region: '',
  });

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    return {
      games: [...new Set(profiles.map((p) => p.game))],
      ranks: [...new Set(profiles.map((p) => p.rank))],
      regions: [...new Set(profiles.map((p) => p.region))],
    };
  }, [profiles]);

  // Filter profiles based on search query and filters
  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesSearch = profile.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGame = !filters.game || profile.game === filters.game;
      const matchesRank = !filters.rank || profile.rank === filters.rank;
      const matchesRegion = !filters.region || profile.region === filters.region;

      return matchesSearch && matchesGame && matchesRank && matchesRegion;
    });
  }, [profiles, searchQuery, filters]);

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${type}s...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FunnelIcon className="w-4 h-4" />
            <span>Filters:</span>
          </div>
          
          <select
            value={filters.game}
            onChange={(e) => setFilters({ ...filters, game: e.target.value })}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          >
            <option value="">All Games</option>
            {filterOptions.games.map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>

          <select
            value={filters.rank}
            onChange={(e) => setFilters({ ...filters, rank: e.target.value })}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          >
            <option value="">All Ranks</option>
            {filterOptions.ranks.map((rank) => (
              <option key={rank} value={rank}>
                {rank}
              </option>
            ))}
          </select>

          <select
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          >
            <option value="">All Regions</option>
            {filterOptions.regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredProfiles.length} of {profiles.length} {type}s
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} type={type} />
        ))}
      </div>

      {/* No Results */}
      {filteredProfiles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No {type}s found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProfileList; 