import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ISCS Technologies",
  description: "Terms of Service for ISCS Technologies",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="mb-4"><strong>Last updated:</strong> November 24, 2025</p>
          
          <p className="mb-6">
            Welcome to ISCS Technologies ("Company", "we", "our", "us")! As you have 
            just "clicked" our Terms of Service, please pause, grab a cup of coffee 
            and carefully read the following pages. It will take you approximately 10 
            minutes.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
          <p className="mb-6">
            These Terms constitute a legally binding agreement ("Agreement") between 
            you ("User", "you" or "your") and ISCS Technologies regarding your use 
            of the ISCS website, including all its sub-domains and services 
            ("Service"). If you do not agree to be bound by these Terms, you are 
            prohibited from using or accessing the Service and you must discontinue 
            use immediately.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
          <p className="mb-6">
            Our intellectual property remains the property of ISCS Technologies. 
            This intellectual property includes, without limitation, all designs, 
            patents, trademarks, service marks, trade names, copyright, trade 
            secrets, know-how, website structure, and content of this website. Any 
            unauthorized use of these materials is strictly prohibited and may 
            subject you to civil and criminal penalties under applicable law.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
          <p className="mb-6">
            Permission is granted to temporarily download one copy of the materials 
            on ISCS Technologies' website for personal, non-commercial transitory 
            viewing only. This is the grant of a license, not a transfer of title, 
            and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on ISCS Technologies' website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p className="mb-6">
            This license shall automatically terminate if you violate any of these 
            restrictions and may be terminated by ISCS Technologies at any time. Upon 
            terminating your viewing of these materials or upon the termination of 
            this license, you must destroy any downloaded materials in your possession 
            whether in electronic or printed format.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer</h2>
          <p className="mb-4">
            The materials on ISCS Technologies' website are provided on an "as is" 
            basis. ISCS Technologies makes no warranties, expressed or implied, and 
            hereby disclaims and negates all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness 
            for a particular purpose, or non-infringement of intellectual property 
            or other violation of rights.
          </p>
          <p className="mb-6">
            Further, ISCS Technologies does not warrant or make any representations 
            concerning the accuracy, likely results, or reliability of the use of 
            the materials on its website or otherwise relating to such materials or 
            on any sites linked to this site.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitations</h2>
          <p className="mb-6">
            In no event shall ISCS Technologies or its suppliers be liable for any 
            damages (including, without limitation, damages for loss of data or 
            profit, or due to business interruption) arising out of the use or 
            inability to use the materials on ISCS Technologies' website, even if 
            ISCS Technologies or a ISCS Technologies authorized representative has 
            been notified orally or in writing of the possibility of such damage. 
            Because some jurisdictions do not allow limitations on implied warranties, 
            or limitations of liability for consequential or incidental damages, 
            these limitations may not apply to you.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
          <p className="mb-6">
            The materials appearing on ISCS Technologies' website could include 
            technical, typographical, or photographic errors. ISCS Technologies does 
            not warrant that any of the materials on its website are accurate, 
            complete, or current. ISCS Technologies may make changes to the 
            materials contained on its website at any time without notice. However 
            ISCS Technologies does not make any commitment to update the materials.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links</h2>
          <p className="mb-6">
            ISCS Technologies has not reviewed all of the sites linked to its 
            website and is not responsible for the contents of any such linked site. 
            The inclusion of any link does not imply endorsement by ISCS Technologies 
            of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h2>
          <p className="mb-6">
            ISCS Technologies may revise these terms of service at any time without 
            notice. By using this website you are agreeing to be bound by the 
            then-current version of these terms of service.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
          <p className="mb-6">
            These terms and conditions are governed by and construed in accordance 
            with the laws of India and you irrevocably submit to the exclusive 
            jurisdiction of the courts in that State or location.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>By email: info@iscstech.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}