"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Script from 'next/script'; 


interface Certificate {
  name: string;
  issuer: string;
  status: string;
  embedHtml?: string;
}

const certifications: Certificate[] = [
  {
    name: "Google Data Analytics",
    issuer: "Google",
    status: "Completed",
    embedHtml: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="cb9fed31-e6c6-45b9-a0bb-5d5b5018c590" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    status: "In Progress",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 lg:mt-16 py-3 px-6 max-w-6xl mx-auto text-foreground">
      <Script
        src="//cdn.credly.com/assets/utilities/embed.js"
        strategy="lazyOnload"
        async 
      />

      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-wide border-b border-muted-foreground pb-2">
          CERTIFICATIONS
        </h2>
      </div>

      <div className="flex flex-col gap-6">

        {certifications.map((cert, index) => (
          <Card key={index} className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col lg:flex-row gap-6">
            <CardHeader className="h-full w-full lg:w-1/3 p-0 flex justify-center items-center">
              {cert.embedHtml ? (
                <div
                  className="w-full h-full flex justify-center items-center" 
                  dangerouslySetInnerHTML={{ __html: cert.embedHtml }}
                />
              ) : (
                
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded-xl text-center text-sm text-gray-500 dark:text-gray-400">
                  Coming Soon
                </div>
              )}
            </CardHeader>

            <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
              <h3 className="text-md font-semibold text-primary">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-slate-500 mt-1">{cert.status}</p>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}