// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import { Footer } from "@/components/Footer/Footer";
// import Navigation from "@/components/Navbar/Navigation";
// import { ScrollProvider } from '@/contexts/ScrollContext';




// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "ISCS Technologies",
//   description: "Innovative Strategic Consulting Services",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <ScrollProvider>          
//           <Navigation/>
//           {children}
//         </ScrollProvider>
//         <Footer/>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import Navigation from "@/components/Navbar/Navigation";
import { ScrollProvider } from '@/contexts/ScrollContext';
import { headers } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ISCS Technologies",
  description: "Innovative Strategic Consulting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-pathname") || ""; // We'll pass this via middleware
  const hideLayout =
    pathname === "/Home" ||
    pathname.startsWith("/Upload") ||
    pathname.startsWith("/Admin");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProvider>
          {!hideLayout && <Navigation />}
          {children}
          {!hideLayout && <Footer />}
        </ScrollProvider>
      </body>
    </html>
  );
}
