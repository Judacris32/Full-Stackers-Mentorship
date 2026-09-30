import { CommunityBand } from "@/components/CommunityBand";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Mentors } from "@/components/Mentors";
import { StackMarquee } from "@/components/StackMarquee";
import { Tracks } from "@/components/Tracks";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Why />
      <Mentors />
      <Tracks />
      <HowItWorks />
      <CommunityBand />
      <Cta />
    </>
  );
}
