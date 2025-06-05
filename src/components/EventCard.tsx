'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, CurrencyDollarIcon, TrophyIcon } from '@heroicons/react/24/outline';

interface EventCardProps {
  id: string;
  name: string;
  game: string;
  date: string;
  location: string;
  entryFee: string;
  prizePool: string;
  image: string;
  registrationOpen: boolean;
  isPast?: boolean;
}

const EventCard = ({
  id,
  name,
  game,
  date,
  location,
  entryFee,
  prizePool,
  image,
  registrationOpen,
  isPast = false
}: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {isPast && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Past Event</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-accent font-medium">{game}</p>
          </div>
          {!isPast && registrationOpen && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Registration Open
            </span>
          )}
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="h-5 w-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
            <span>Entry Fee: {entryFee}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <TrophyIcon className="h-5 w-5 mr-2" />
            <span>Prize Pool: {prizePool}</span>
          </div>
        </div>

        {!isPast && registrationOpen && (
          <Link
            href={`/tournaments/${id}/register`}
            className="block w-full bg-accent hover:bg-accent/90 text-white text-center py-3 rounded-lg font-semibold transition-colors"
          >
            Register Now
          </Link>
        )}

        <Link
          href={`/tournaments/${id}`}
          className={`block w-full text-center py-3 rounded-lg font-semibold mt-3
            ${isPast 
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
              : 'bg-primary hover:bg-primary/90 text-white'}`}
        >
          {isPast ? 'View Results' : 'View Details'}
        </Link>
      </div>
    </div>
  );
};

export default EventCard; 