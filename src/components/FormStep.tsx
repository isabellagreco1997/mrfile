import React from 'react';
import { UserFormData } from '../types';
import { submitLead } from '../services/api';
import toast from 'react-hot-toast';

type FormStepProps = {
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
  onNext: () => void;
};

export default function FormStep({ formData, setFormData, onNext }: FormStepProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log the current form data before submission
    console.log('Submitting form with data:', formData);
    
    const result = await submitLead(formData);
    
    if (result.success) {
      if (import.meta.env.DEV) {
        toast.success('Development mode: Skipping database submission');
      } else {
        toast.success('Information submitted successfully!');
      }
      onNext();
    } else {
      toast.error(result.error || 'There was an error submitting your information. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Thank you for your time and interest!
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        We are confident you will find our insights of tremendous value. Complete
        the form below to access your free retirement guide and ongoing insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">
            Postcode
          </label>
          <input
            type="text"
            id="postcode"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.postcode}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, postcode: e.target.value }))
            }
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreement"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={formData.agreement}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, agreement: e.target.checked }))
              }
            />
          </div>
          <label htmlFor="agreement" className="ml-3 text-sm text-gray-600">
            By ticking this box, I understand I will receive a retirement guide
            without cost and ongoing insights from Fisher Investments UK.
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Continue →
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          We value your privacy. Your information will not be shared with third
          parties. Read more in our privacy policy.
        </p>
      </form>

      <p className="text-sm text-gray-600 text-center mt-6">
        Join the millions of investors worldwide who have requested guides and
        ongoing insights.
      </p>
    </div>
  );
}