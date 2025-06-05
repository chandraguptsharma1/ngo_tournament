export type Achievement = {
  id: string;
  title: string;
  event: string;
  date: string;
  position?: string;
  certificateId?: string;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
};

export type PlayerProfile = {
  id: string;
  name: string;
  avatar?: string;
  game: string;
  rank: string;
  region: string;
  joinedDate: string;
  achievements: Achievement[];
  badges: Badge[];
  teamId?: string;
  stats: {
    gamesPlayed: number;
    winRate: number;
    tournamentParticipation: number;
  };
};

export type TeamProfile = {
  id: string;
  name: string;
  logo?: string;
  game: string;
  rank: string;
  region: string;
  foundedDate: string;
  achievements: Achievement[];
  badges: Badge[];
  members: string[]; // Player IDs
  stats: {
    gamesPlayed: number;
    winRate: number;
    tournamentParticipation: number;
  };
};
