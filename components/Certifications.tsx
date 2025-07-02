"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Script from 'next/script'; 
import { ExternalLink } from "lucide-react";


interface Certificate {
  name: string;
  issuer: string;
  status: string;
  imagePath: string;
  credentialUrl?: string;
  embedHtml?: string;
  badgeImageUrl?: string;
}

const certifications: Certificate[] = [

  {name: "Snowflake: Data Warehousing Workshop",
    issuer: "Snowflake",
    status: "July 20205",
    imagePath: "/logos/snowflake.png",
    credentialUrl: "https://achieve.snowflake.com/2c731a2d-5b08-4b43-8ae2-9fd084221c30#acc.SpB2yfVC",
    badgeImageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/154029262" 
  },
  {
    name: "Google Data Analytics",
    issuer: "Google",
    status: "August 2023",
    imagePath: "",
    credentialUrl: "https://www.credly.com/badges/cb9fed31-e6c6-45b9-a0bb-5d5b5018c590/public_url",
    badgeImageUrl: "https://images.credly.com/size/220x220/images/d41de2b7-cbc2-47ec-bcf1-ebecbe83872f/GCC_badge_DA_1000x1000.png",
  },
  
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    status: "In Progress",
    imagePath: "",
    credentialUrl: "",
  },
];


export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 lg:mt-16 py-3 px-6 max-w-6xl mx-auto text-foreground">
      <Script src="//cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" async />

      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-wide border-b border-muted-foreground pb-2">
          CERTIFICATIONS
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col lg:flex-row gap-6">
            <CardHeader className="h-full w-full lg:w-1/3 p-0 flex justify-center items-center">
              {/* ✨ 2. New logic to handle Credly, Accredible, and logos */}
              {cert.embedHtml ? (
                // Case 1: For Credly
                <div className="w-full h-full flex justify-center items-center" dangerouslySetInnerHTML={{ __html: cert.embedHtml }} />
              ) : cert.badgeImageUrl && cert.credentialUrl ? (
                // Case 2: For Accredible (clickable badge image)
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                  <Image src={cert.badgeImageUrl} alt={`${cert.name} Badge`} width={200} height={200} className="rounded-xl object-contain hover:opacity-80 transition-opacity" />
                </a>
              ) : cert.imagePath ? (
                // Case 3: Fallback to issuer logo
                <Image src={cert.imagePath} alt={`${cert.issuer} logo`} width={200} height={200} className="rounded-xl object-contain" />
              ) : (
                // Case 4: Final fallback placeholder
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded-xl text-center text-sm text-gray-500 dark:text-gray-400">
                  {cert.status}
                </div>
              )}
            </CardHeader>

            <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-md font-semibold text-primary">{cert.name}</h3>
                {/* The link icon for non-Credly badges */}
                {cert.credentialUrl && !cert.embedHtml && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" title="View Credential">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-slate-500 mt-1">{cert.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}