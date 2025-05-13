import { FeaturesSection } from '@/components/sections/features-section';
import { HeroSection } from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <ProjectsSection />
    </>
  );
}
