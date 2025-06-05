'use client';

import Image from 'next/image';
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Summer Charity Cup 2024",
    date: "June 15-20, 2024",
    location: "Central Stadium",
    participants: "16 Teams",
    image: "/events/summer-cup.png"
  },
  {
    id: 2,
    title: "NGO League Finals",
    date: "July 5, 2024",
    location: "Community Arena",
    participants: "4 Teams",
    image: "/events/league-finals.png"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="relative group">
              <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={event.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="h-5 w-5 mr-2" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 ring-4 ring-accent ring-offset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents; 