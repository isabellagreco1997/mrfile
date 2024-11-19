import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/LandingPage';
import FormStep from './components/FormStep';
import SliderStep from './components/SliderStep';
import ThankYouStep from './components/ThankYouStep';
import StepIndicator from './components/StepIndicator';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { UserFormData } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 represents landing page
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    agreement: false,
    investmentValue: 250000, // Default value
  });

  // Debug log for investment value changes
  React.useEffect(() => {
    console.log('Investment value updated:', formData.investmentValue);
  }, [formData.investmentValue]);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleGetStarted = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="top-center" />
      <Nav />
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
                onNext={handleNext}
              />
            )}
            
            {currentStep === 1 && (
              <SliderStep
                formData={formData}
                setFormData={setFormData}
                onNext={handleNext}
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