"use client";

import Footer from "@/components/Footer";
import OurMission from "@/components/OurMissionComponents/OurMission";
import Landing from "@/components/LadingPageComponents/Landing";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="mt-[40rem] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 lg:p-30 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <OurMission />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-4 lg:p-30 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Footer />
      </div>
    </>
  );
}
