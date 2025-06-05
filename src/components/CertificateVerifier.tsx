'use client';

import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface CertificateData {
  playerName: string;
  eventName: string;
  issueDate: string;
  achievement: string;
  certificateId: string;
  isValid: boolean;
}

const CertificateVerifier = () => {
  const [certificateId, setCertificateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);

  // This is a mock verification function. Replace with actual API call
  const verifyCertificate = async (id: string) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock data - replace with actual API response
    if (id === 'CERT-2024-001') {
      return {
        playerName: 'John Doe',
        eventName: 'Summer Charity Cup 2024',
        issueDate: '2024-06-20',
        achievement: 'Tournament Winner',
        certificateId: id,
        isValid: true
      };
    }
    throw new Error('Certificate not found');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }

    setIsLoading(true);
    setError('');
    setCertificateData(null);

    try {
      const data = await verifyCertificate(certificateId);
      setCertificateData(data);
    } catch (err) {
      setError('Invalid certificate ID or certificate not found');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder="Enter Certificate ID (e.g., CERT-2024-001)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 bg-primary text-white rounded-lg font-semibold
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}
              transition-colors`}
          >
            {isLoading ? 'Verifying...' : 'Verify Certificate'}
          </button>
        </div>
        {error && (
          <div className="mt-4 flex items-center text-red-500">
            <XCircleIcon className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        )}
      </form>

      {/* Certificate Details */}
      {certificateData && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Certificate Details</h3>
              {certificateData.isValid ? (
                <div className="flex items-center text-green-600">
                  <CheckCircleIcon className="h-6 w-6 mr-2" />
                  <span className="font-medium">Valid Certificate</span>
                </div>
              ) : (
                <div className="flex items-center text-red-500">
                  <XCircleIcon className="h-6 w-6 mr-2" />
                  <span className="font-medium">Invalid Certificate</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Player Name
                </label>
                <p className="text-lg font-semibold">{certificateData.playerName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Event Name
                </label>
                <p className="text-lg font-semibold">{certificateData.eventName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Issue Date
                </label>
                <p className="text-lg font-semibold">
                  {new Date(certificateData.issueDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Achievement
                </label>
                <p className="text-lg font-semibold">{certificateData.achievement}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Certificate ID
                  </label>
                  <p className="text-lg font-mono">{certificateData.certificateId}</p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Print Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateVerifier; 