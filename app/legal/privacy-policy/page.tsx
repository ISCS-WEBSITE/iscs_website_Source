import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ISCS Technologies",
  description: "Privacy Policy for ISCS Technologies",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="mb-4"><strong>Last updated:</strong> November 24, 2025</p>
          
          <p className="mb-6">
            ISCS Technologies ("we", "us", or "our") operates the ISCS website 
            (the "Service"). This page informs you of our policies regarding the 
            collection, use, and disclosure of personal data when you use our Service 
            and the choices you have associated with that data.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Collection and Use</h2>
          <p className="mb-6">
            We collect several different types of information for various purposes 
            to provide and improve our Service to you.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of Data Collected</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Personal Data</h4>
          <p className="mb-4">
            While using our Service, we may ask you to provide us with certain 
            personally identifiable information that can be used to contact or 
            identify you ("Personal Data"). Personally identifiable information 
            may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code</li>
            <li>Cookies and Usage Data</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Usage Data</h4>
          <p className="mb-6">
            We may also collect information that your browser sends whenever you 
            visit our Service or when you access the Service by or through a 
            mobile device ("Usage Data"). This Usage Data may include information 
            such as your computer's Internet Protocol address (e.g. IP address), 
            browser type, browser version, the pages of our Service that you 
            visit, the time and date of your visit, the time spent on those pages, 
            unique device identifiers and other diagnostic data.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Data</h2>
          <p className="mb-4">
            ISCS Technologies uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security of Data</h2>
          <p className="mb-6">
            The security of your data is important to us, but remember that no 
            method of transmission over the Internet, or method of electronic 
            storage is 100% secure. While we strive to use commercially acceptable 
            means to protect your Personal Data, we cannot guarantee its absolute 
            security.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Providers</h2>
          <p className="mb-6">
            We may employ third party companies and individuals to facilitate our 
            Service ("Service Providers"), to provide the Service on our behalf, 
            to perform Service-related services or to assist us in analyzing how 
            our Service is used.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links to Other Sites</h2>
          <p className="mb-6">
            Our Service may contain links to other sites that are not operated by 
            us. If you click on a third party link, you will be directed to that 
            third party's site. We strongly advise you to review the Privacy Policy 
            of every site you visit. We have no control over and assume no 
            responsibility for the content, privacy policies or practices of any 
            third party sites or services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify you 
            of any changes by posting the new Privacy Policy on this page. We will 
            let you know via email and/or a prominent notice on our Service, prior 
            to the change becoming effective and update the "effective date" at 
            the top of this Privacy Policy. You are advised to review this Privacy 
            Policy periodically for any changes. Changes to this Privacy Policy 
            are effective when they are posted on this page.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>By email: info@iscstech.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}