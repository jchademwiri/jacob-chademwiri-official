import { FeaturesSection } from '@/components/features-section';
import { HeroSection } from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
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
