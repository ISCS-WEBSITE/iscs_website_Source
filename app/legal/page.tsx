import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal - ISCS Technologies",
  description: "Legal information for ISCS Technologies",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal Information</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-6">
            This page contains all our legal documents. Please select a document from the navigation menu.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="/legal/privacy-policy" 
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 text-center"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Privacy Policy</h2>
              <p className="text-gray-600 text-sm">Information about how we collect and use your data</p>
            </a>
            
            <a 
              href="/legal/terms-of-service" 
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 text-center"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Terms of Service</h2>
              <p className="text-gray-600 text-sm">Terms governing your use of our services</p>
            </a>
            
            <a 
              href="/legal/cookie-policy" 
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 text-center"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Cookie Policy</h2>
              <p className="text-gray-600 text-sm">Information about cookies and how we use them</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}