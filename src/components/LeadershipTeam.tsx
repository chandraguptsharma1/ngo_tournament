'use client';

import Image from 'next/image';

interface Leader {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    position: "Executive Director",
    bio: "Dr. Mitchell brings over 15 years of experience in NGO management and sports development. She has led multiple international sports initiatives and holds a Ph.D. in Sports Management.",
    image: "/team/director.png",
    linkedin: "https://linkedin.com/in/sarah-mitchell"
  },
  {
    id: 2,
    name: "James Wilson",
    position: "Tournament Director",
    bio: "Former professional athlete with 10 years of experience in organizing international sports events. Specializes in creating inclusive and competitive tournament structures.",
    image: "/team/tournament-director.png"
  },
  {
    id: 3,
    name: "Maria Garcia",
    position: "Community Relations Manager",
    bio: "With a background in community development and 8 years in NGO partnerships, Maria ensures our tournaments create lasting positive impact in communities.",
    image: "/team/community-manager.png"
  }
];

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96 w-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-accent font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium text-sm"
                  >
                    View LinkedIn Profile →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam; 