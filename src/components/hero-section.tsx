export function HeroSection() {
  return (
    <section className="text-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
        Modern Web Solutions with a <span className="text-primary">Green</span>{' '}
        Touch
      </h1>
      <p className="max-w-2xl mx-auto text-muted-foreground text-lg sm:text-xl mb-10">
        We create beautiful, functional, and sustainable web experiences that
        help your business grow.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-primary text-foreground font-medium py-3 px-6 rounded-md hover:bg-primary/90 transition">
          Get Started
        </button>
        <button className="border border-foreground/20 text-foreground py-3 px-6 rounded-md hover:bg-foreground/10 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
