import Image from 'next/image';
import Navigation from '@/components/Navigation';
import LeadershipTeam from '@/components/LeadershipTeam';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="absolute inset-0">
          <Image
            src="/about-bg.png"
            alt="About Us"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building bridges through sports, creating impact through unity
          </p>
        </div>
      </section>

      {/* Vision, Mission, and Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-600">
                To create a world where sports serve as a catalyst for positive social change and NGO collaboration.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-600">
                To unite NGOs through competitive sports, fostering partnerships and amplifying their collective impact.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Objectives</h2>
              <ul className="text-gray-600 text-left list-disc pl-6">
                <li>Facilitate meaningful collaboration between NGOs</li>
                <li>Promote sports as a tool for social development</li>
                <li>Create sustainable community impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600">
              Founded in 2020, the NGO Tournament initiative emerged from a simple idea: 
              bringing together organizations that share a common goal of making the world better.
            </p>
            <p className="text-gray-600 mt-4">
              What started as a local sports event has grown into an international platform, 
              connecting hundreds of NGOs and impacting thousands of lives across the globe.
            </p>
            <p className="text-gray-600 mt-4">
              Today, we continue to expand our reach and deepen our impact, guided by our 
              commitment to fostering collaboration and creating positive change through sports.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <LeadershipTeam />

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/certifications/ngo-cert.png"
                    alt="NGO Registration Certificate"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">NGO Registration</h3>
                  <p className="text-gray-600 mb-2">Registration Number: NGO-2020-123456</p>
                  <p className="text-sm text-gray-500">Registered under the Societies Registration Act, 1860</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/certifications/iso-cert.png"
                    alt="ISO Certification"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">ISO 9001:2015 Certified</h3>
                  <p className="text-gray-600 mb-2">Certificate Number: ISO-9001-789012</p>
                  <p className="text-sm text-gray-500">Quality Management System Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 