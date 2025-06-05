'use client';

import { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

interface FormData {
  registrationType: string;
  name: string;
  email: string;
  phone: string;
  gameId?: string;
  rank?: string;
  teamName?: string;
  role?: string;
}

interface FormErrors {
  [key: string]: string;
}

const registrationTypes = [
  { value: 'player', label: 'Player Registration' },
  { value: 'team', label: 'Team Registration' },
  { value: 'volunteer', label: 'Volunteer Registration' }
];

const roleOptions = [
  { value: 'referee', label: 'Referee' },
  { value: 'coordinator', label: 'Event Coordinator' },
  { value: 'support', label: 'Support Staff' },
  { value: 'medical', label: 'Medical Staff' }
];

const rankOptions = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'professional', label: 'Professional' }
];

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    registrationType: '',
    name: '',
    email: '',
    phone: '',
    gameId: '',
    rank: '',
    teamName: '',
    role: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.registrationType) {
      newErrors.registrationType = 'Please select registration type';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (formData.registrationType === 'player') {
      if (!formData.gameId) {
        newErrors.gameId = 'Game ID is required';
      }
      if (!formData.rank) {
        newErrors.rank = 'Rank is required';
      }
    }

    if (formData.registrationType === 'team') {
      if (!formData.teamName) {
        newErrors.teamName = 'Team name is required';
      }
    }

    if (formData.registrationType === 'volunteer') {
      if (!formData.role) {
        newErrors.role = 'Role is required';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Here you would typically make an API call to submit the form
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
        setIsSuccess(true);
        // You would typically trigger an email confirmation here
      } catch (error) {
        setErrors({ submit: 'Failed to submit form. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Registration Successful!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for registering. We have sent a confirmation email to {formData.email}.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Register Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <SelectField
        label="Registration Type"
        name="registrationType"
        options={registrationTypes}
        value={formData.registrationType}
        onChange={handleChange}
        required
        error={errors.registrationType}
      />

      <InputField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        error={errors.name}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        error={errors.email}
      />

      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
        error={errors.phone}
      />

      {formData.registrationType === 'player' && (
        <>
          <InputField
            label="Game ID/Tag"
            name="gameId"
            value={formData.gameId || ''}
            onChange={handleChange}
            required
            error={errors.gameId}
          />
          <SelectField
            label="Rank"
            name="rank"
            options={rankOptions}
            value={formData.rank || ''}
            onChange={handleChange}
            required
            error={errors.rank}
          />
        </>
      )}

      {formData.registrationType === 'team' && (
        <InputField
          label="Team Name"
          name="teamName"
          value={formData.teamName || ''}
          onChange={handleChange}
          required
          error={errors.teamName}
        />
      )}

      {formData.registrationType === 'volunteer' && (
        <SelectField
          label="Role"
          name="role"
          options={roleOptions}
          value={formData.role || ''}
          onChange={handleChange}
          required
          error={errors.role}
        />
      )}

      {errors.submit && (
        <p className="text-red-500 text-center">{errors.submit}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-accent text-white py-3 rounded-lg font-semibold
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/90'}
          transition-colors`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
      </button>
    </form>
  );
};

export default RegistrationForm; 