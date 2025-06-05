import CertificateVerifier from '@/components/CertificateVerifier';

export const metadata = {
  title: 'Verify Certificate | Tournament NGO',
  description: 'Verify the authenticity of tournament certificates and achievements.',
};

export default function VerifyCertificatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Certificate Verification
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Enter your certificate ID to verify its authenticity and view the details
          of your achievement in our tournaments.
        </p>
      </div>
      
      <CertificateVerifier />
    </div>
  );
} 