import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - ISCS Technologies",
  description: "Cookie Policy for ISCS Technologies",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="mb-4"><strong>Last updated:</strong> November 24, 2025</p>
          
          <p className="mb-6">
            This Cookie Policy explains how ISCS Technologies ("we", "us", or "our") 
            uses cookies and similar technologies when you visit our website 
            (the "Service").
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files that are stored on your computer or 
            mobile device when you visit a website. They are widely used in order 
            to make websites work, or work more efficiently, as well as to provide 
            information to the owners of the site. Cookies are typically stored 
            on your computer's hard drive and can be managed through your browser 
            settings.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for several purposes on our website, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions such as page navigation and access to secure areas of the website.</li>
            <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.</li>
            <li><strong>Functionality Cookies:</strong> These cookies enable the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features.</li>
            <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Strictly Necessary Cookies</h3>
            <p className="mb-4">These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or filling in forms.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
            <p className="mb-4">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
            <p className="mb-4">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeting Cookies</h3>
            <p className="mb-4">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Control Cookies</h2>
          <p className="mb-4">
            You can control and/or delete cookies as you wish. You can delete all 
            cookies that are already on your computer and you can set most browsers 
            to prevent them from being placed. You can also set your browser to 
            notify you when a cookie is being sent. If you choose to delete cookies 
            or turn off cookies in your browser settings, some features of this 
            website may not function as intended.
          </p>
          <p className="mb-6">
            To find out more about cookies, including how to see what cookies have 
            been set and how to manage and delete them, visit www.allaboutcookies.org.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
          <p className="mb-6">
            We may also use various third-party services that use cookies for 
            different purposes. These third-party vendors may use technologies to 
            measure the effectiveness of their advertisements and/or to personalize 
            advertising content to you. These cookies may be placed while using our 
            Service at any time.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Cookie Policy</h2>
          <p className="mb-6">
            We may update our Cookie Policy from time to time. We will notify you 
            of any changes by posting the new Cookie Policy on this page. You are 
            advised to review this Cookie Policy periodically for any changes. 
            Changes to this Cookie Policy are effective when they are posted on this page.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Cookie Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>By email: info@iscstech.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}