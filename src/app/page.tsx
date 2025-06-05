import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FeaturedPlayers from '@/components/FeaturedPlayers';
import UpcomingEvents from '@/components/UpcomingEvents';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Logo and Tagline */}
      <section className="relative h-[80vh] bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Tournament background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
          <div className="relative w-48 h-48 mb-8">
            <Image
              src="/logo.png"
              alt="NGO Tournament Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6">Unite, Play, Impact</h1>
          <p className="text-xl mb-12 max-w-2xl">
            Bringing NGOs together through sports to create positive change in communities worldwide
          </p>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Register Now
            </Link>
            <Link
              href="/join-league"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Join League
            </Link>
            <Link
              href="/volunteer"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering NGOs to create lasting social impact through competitive sports, 
            fostering collaboration, and building stronger communities.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Featured Players */}
      <FeaturedPlayers />

      {/* Impact Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">NGOs Participating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-lg">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 