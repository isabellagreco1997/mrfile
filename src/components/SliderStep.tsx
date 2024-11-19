import React from 'react';
import { UserFormData } from '../types';

type SliderStepProps = {
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
  onNext: () => void;
};

export default function SliderStep({ formData, setFormData, onNext }: SliderStepProps) {
  const formatValue = (value: number) => {
    return value >= 2000000 ? '£2M+' : `£${(value / 1000).toFixed(0)}k`;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    console.log('Slider value changed to:', value);
    setFormData((prev) => ({
      ...prev,
      investmentValue: value
    }));
  };

  const handleContinue = () => {
    console.log('Submitting with investment value:', formData.investmentValue);
    onNext();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Estimate the Value of Your Investments
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        Please use the slider to select an amount.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">£250k</span>
              <span className="text-sm text-gray-600">£2M+</span>
            </div>
            <input
              type="range"
              min="250000"
              max="2000000"
              step="50000"
              value={formData.investmentValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-blue-600">
                {formatValue(formData.investmentValue)}
              </span>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Continue →
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center mt-6">
        Investing involves risks, and past performance is not a guarantee of future
        results.
      </p>
    </div>
  );
}