"use client";
import Head from "next/head";
import Nav from "@/components/Nav";
import Education from "@/components/Education";
import ExpCard from "@/components/ExpCards";
import Projects from "@/components/Projects";
import About from "@/components/About";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });

export default function Home() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAuraPosition = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", updateAuraPosition);

    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []);

  return (
    <>
      <Head>
        <style jsx global>{`
          body {
            font-family: "${inter.style.fontFamily}";
          }
        `}</style>
      </Head>

      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-12 lg:px-24 py-12 lg:py-0">
        <div ref={auraRef} className="mouse-aura" />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
          {/* Sidebar Navigation */}
          <div className="lg:sticky lg:top-0">
            <Nav />
          </div>

          {/* Main Content */}
          <main className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 gap-8">
            <About />
            <Skills />
            <Education />
            <ExpCard />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
