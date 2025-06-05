'use client';

import Navigation from '@/components/Navigation';
import RegistrationForm from '@/components/forms/RegistrationForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Registration</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our community as a player, team, or volunteer and be part of something extraordinary
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Choose Your Registration Type</h2>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Player Registration</h3>
              <p className="text-gray-600">
                Join as an individual player and showcase your skills in our tournaments.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Team Registration</h3>
              <p className="text-gray-600">
                Register your team and compete together in our exciting tournaments.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Volunteer Registration</h3>
              <p className="text-gray-600">
                Support our events and make a difference in the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 