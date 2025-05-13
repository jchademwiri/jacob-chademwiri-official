export function FeaturesSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-background rounded-lg p-6 shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
