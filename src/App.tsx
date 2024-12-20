import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import LandingPage from './components/LandingPage';
import FormStep from './components/FormStep';
import SliderStep from './components/SliderStep';
import ThankYouStep from './components/ThankYouStep';
import StepIndicator from './components/StepIndicator';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { UserFormData } from './types';
import { submitLead } from './services/api';

function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    agreement: false,
    investmentValue: 250000,
  });

  React.useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);

  const handleNext = async (isSliderStep = false) => {
    if (isSliderStep) {
      console.log('Submitting final form data:', formData);
      const result = await submitLead(formData);
      
      if (result.success) {
        console.log('Lead submitted successfully');
        setCurrentStep((prev) => prev + 1);
      } else {
        console.error('Failed to submit lead:', result.error);
        toast.error(result.error || 'Failed to submit your information. Please try again.');
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleGetStarted = () => {
    setCurrentStep(0);
  };

  const handleLogoClick = () => {
    setCurrentStep(-1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postcode: '',
      agreement: false,
      investmentValue: 250000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="top-center" />
      <Nav onLogoClick={handleLogoClick} />
      <main className="flex-grow">
        {currentStep === -1 ? (
          <LandingPage onGetStarted={handleGetStarted} />
        ) : (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <StepIndicator currentStep={currentStep} totalSteps={3} />
            
            {currentStep === 0 && (
              <FormStep
                formData={formData}
                setFormData={setFormData}
                onNext={() => handleNext(false)}
              />
            )}
            
            {currentStep === 1 && (
              <SliderStep
                formData={formData}
                setFormData={setFormData}
                onNext={() => handleNext(true)}
              />
            )}
            
            {currentStep === 2 && <ThankYouStep />}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;