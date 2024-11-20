import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-600 mb-4">
            Join thousands of investors worldwide who trust our expertise
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Mr Fire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}