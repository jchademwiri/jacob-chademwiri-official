import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Modern Web Solutions with a{' '}
            <span className="text-primary">Green</span> Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            We create beautiful, functional, and sustainable web experiences
            that help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
