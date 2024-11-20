import React from 'react';
import { ArrowRight, Ship, Plane, Home, Wine } from 'lucide-react';

type LandingPageProps = {
  onGetStarted: () => void;
};

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-luxury font-display sm:text-5xl md:text-6xl">
                  <span className="block font-light">Ignite Your</span>
                  <span className="block text-luxury-gold font-semibold">Financial Freedom</span>
                </h1>
                <p className="mt-3 text-base text-luxury-charcoal sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light tracking-wide">
                  Transform your wealth into a lifestyle of luxury, travel, and endless possibilities. Let Mr Fire guide you to your dream retirement.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={onGetStarted}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-luxury-cream bg-luxury-burgundy hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 tracking-wider"
                    >
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000&h=1000"
            alt="Luxury retirement lifestyle"
          />
        </div>
      </div>

      {/* Lifestyle Features Section */}
      <div className="py-12 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="luxury-subheading text-luxury-burgundy">Your Dream Lifestyle Awaits</h2>
            <p className="mt-2 text-3xl leading-8 font-display tracking-luxury text-luxury-slate sm:text-4xl">
              Experience True Financial Freedom
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-luxury-champagne text-luxury-burgundy">
                    <Ship className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-display tracking-luxury text-luxury-slate">Luxury Cruises</h3>
                  <p className="mt-2 text-base text-luxury-charcoal font-light">
                    Cruise the Mediterranean or explore exotic destinations in complete comfort.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-luxury-champagne text-luxury-burgundy">
                    <Plane className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-display tracking-luxury text-luxury-slate">First-Class Travel</h3>
                  <p className="mt-2 text-base text-luxury-charcoal font-light">
                    Experience world-class destinations with premium travel accommodations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-luxury-champagne text-luxury-burgundy">
                    <Home className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-display tracking-luxury text-luxury-slate">Dream Properties</h3>
                  <p className="mt-2 text-base text-luxury-charcoal font-light">
                    Own luxury homes in prime locations worldwide.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-luxury-champagne text-luxury-burgundy">
                    <Wine className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-display tracking-luxury text-luxury-slate">Fine Living</h3>
                  <p className="mt-2 text-base text-luxury-charcoal font-light">
                    Indulge in fine dining, wine tasting, and cultural experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-luxury-burgundy">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl tracking-luxury font-display text-luxury-cream sm:text-4xl">
            <span className="block">Ready to ignite your retirement?</span>
            <span className="block text-luxury-champagne">Let us show you how.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-luxury-burgundy bg-luxury-gold hover:bg-luxury-champagne tracking-wider"
              >
                Get Your Free Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-luxury-pearl py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="mx-auto text-center">
            <blockquote className="mt-5">
              <p className="text-xl font-display italic tracking-luxury text-luxury-slate">
                "Thanks to Mr Fire's investment strategies, I'm now living my dream retirement. 
                Luxury travel, fine dining, and a beachfront property - it's all possible 
                with the right guidance."
              </p>
            </blockquote>
            <figcaption className="mt-4">
              <div className="text-base font-display tracking-luxury text-luxury-slate">Michael Richardson</div>
              <div className="text-base text-luxury-charcoal font-light tracking-wider">Retired Executive, Living the Dream</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}