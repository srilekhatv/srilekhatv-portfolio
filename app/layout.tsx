import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://srilekha.dev"),
  alternates: {
    canonical: "https://srilekha.dev",
  },
  title: "Srilekha Tirumala Vinjamoori - Data Analyst & ML Enthusiast",
  description:
    "Srilekha is a data analyst with a passion for business intelligence, machine learning, and ethical AI. Srilekha Tirumala Vinjamoori, Data Analyst, Business Intelligence, Machine Learning, SQL, Python, Tableau, Power BI, AWS, Streamlit, Analytics, Portfolio.",
  keywords:
    "Srilekha Tirumala Vinjamoori, Data Analyst, Business Intelligence, Machine Learning, SQL, Python, Tableau, Power BI, AWS, Streamlit, Analytics, Portfolio",
  openGraph: {
    locale: "en_US",
    siteName: "Srilekha Tirumala Vinjamoori",
    type: "website",
    title: "Srilekha Tirumala Vinjamoori - Data Analyst",
    description:
      "Srilekha is a data analyst passionate about insights, innovation, and impactful storytelling.",
    url: "https://srilekha.dev",
    // ✅ Removed 'images' array to prevent tab preview images
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* ✅ No <head> tag needed unless you're adding custom links or favicons */}
      <body className={inter.className}> 
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className= "bg-gradient-to-br from-[#dbeafe] via-[#cbd5e1] to-[#f8fafc] text-black dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] dark:text-white transition-colors">
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
