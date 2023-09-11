'use client';
import { useEffect } from 'react';
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { LandingFooter } from "@/components/landing-footer";

const LandingPage = () => {
  useEffect(() => {
    // @ts-ignore
    import('preline');
  }, []);

  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
   );
}
 
export default LandingPage;
