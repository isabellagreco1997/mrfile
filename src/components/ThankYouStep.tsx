import React from 'react';
import { Download } from 'lucide-react';

export default function ThankYouStep() {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/retirement-guide.pdf';
    link.download = 'The-15-Minute-Retirement-Plan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Thank You!
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        We sincerely hope you enjoy The 15-Minute Retirement Plan and ongoing
        insights!
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=500"
              alt="Retirement Guide Preview"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Discover how to secure your financial future in just 15 minutes
            </h2>
            <p className="text-gray-600">
              Your comprehensive guide to planning a comfortable retirement is ready
              for download.
            </p>
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          If you have any questions, feel free to contact us at{' '}
          <a
            href="mailto:support@mrfire.com"
            className="text-blue-600 hover:text-blue-800"
          >
            support@mrfire.com
          </a>
        </p>
      </div>
    </div>
  );
}