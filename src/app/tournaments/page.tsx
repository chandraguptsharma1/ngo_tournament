'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import EventCard from '@/components/EventCard';
import EventCalendar from '@/components/EventCalendar';
import { Tab } from '@headlessui/react';

// Sample data - replace with actual data from your backend
const upcomingEvents = [
  {
    id: "1",
    name: "Summer Charity Cup 2024",
    game: "Football",
    date: "June 15-20, 2024",
    location: "Central Stadium",
    entryFee: "$500 per team",
    prizePool: "$10,000",
    image: "/tournaments/summer-cup.png",
    registrationOpen: true
  },
  {
    id: "2",
    name: "NGO League Finals",
    game: "Basketball",
    date: "July 5, 2024",
    location: "Community Arena",
    entryFee: "$300 per team",
    prizePool: "$5,000",
    image: "/tournaments/league-finals.png",
    registrationOpen: true
  }
];

const pastEvents = [
  {
    id: "3",
    name: "Spring Tournament 2024",
    game: "Volleyball",
    date: "March 10-15, 2024",
    location: "Sports Complex",
    entryFee: "$400 per team",
    prizePool: "$7,500",
    image: "/tournaments/spring-tournament.png",
    registrationOpen: false
  }
];

const calendarEvents = [
  {
    id: "1",
    name: "Summer Charity Cup",
    date: new Date(2024, 5, 15), // June 15, 2024
    type: "Football"
  },
  {
    id: "2",
    name: "NGO League Finals",
    date: new Date(2024, 6, 5), // July 5, 2024
    type: "Basketball"
  }
];

export default function TournamentsPage() {
  const [viewType, setViewType] = useState<'list' | 'calendar'>('list');
  const router = useRouter();

  const handleEventClick = (eventId: string) => {
    router.push(`/tournaments/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tournaments</h1>
          <p className="text-xl">
            Join our upcoming tournaments or explore past events
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* View Toggle */}
        <div className="flex justify-end mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setViewType('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                viewType === 'list'
                  ? 'bg-primary text-white'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewType('calendar')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                viewType === 'calendar'
                  ? 'bg-primary text-white'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Calendar View
            </button>
          </div>
        </div>

        {viewType === 'list' ? (
          <Tab.Group>
            <Tab.List className="flex space-x-4 border-b border-gray-200 mb-8">
              <Tab
                className={({ selected}) =>
                  `px-4 py-2 text-sm font-medium border-b-2 ${
                    selected
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-primary hover:border-gray-300'
                  }`
                }
              >
                Upcoming Events
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-4 py-2 text-sm font-medium border-b-2 ${
                    selected
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-primary hover:border-gray-300'
                  }`
                }
              >
                Past Events
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map(event => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map(event => (
                    <EventCard key={event.id} {...event} isPast />
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        ) : (
          <EventCalendar
            events={calendarEvents}
            onEventClick={handleEventClick}
          />
        )}
      </div>
    </div>
  );
} 