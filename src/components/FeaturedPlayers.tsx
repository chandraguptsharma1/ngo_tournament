'use client';

import Image from 'next/image';

interface Player {
  id: number;
  name: string;
  team: string;
  image: string;
  role: string;
}

const featuredPlayers: Player[] = [
  {
    id: 1,
    name: "Alex Thompson",
    team: "Hope United",
    image: "/players/player1.png",
    role: "Team Captain"
  },
  {
    id: 2,
    name: "Sarah Chen",
    team: "Global Hearts",
    image: "/players/player2.png",
    role: "Lead Scorer"
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    team: "Community Champions",
    image: "/players/player3.png",
    role: "MVP 2023"
  }
];

const FeaturedPlayers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Players</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPlayers.map((player) => (
            <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96 w-full">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={player.id === 1}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
                <p className="text-gray-600 mb-2">{player.team}</p>
                <p className="text-accent font-medium">{player.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers; 