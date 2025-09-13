// import ComingSoon from '@/components/coming-soon';
import { CallToAction } from '@/components/projects/call-to-action';
import {
  CurrentEmployment,
  FeaturesSection,
  HeroSection,
  ProjectsSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <HeroSection />
      <CurrentEmployment />
      <FeaturesSection />
      <CallToAction />
      <ProjectsSection />
    </>
  );
}
