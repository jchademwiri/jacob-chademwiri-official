import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"

export default function Home() {
  return (
    <Layout>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Modern Web Solutions with a <span className="text-primary">Green</span> Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              We create beautiful, functional, and sustainable web experiences that help your business grow.
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

      <section className="py-12 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold">Our Projects</h2>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Check out some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-background rounded-lg overflow-hidden shadow-sm border">
                <div className="h-48 bg-muted"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Project {i}</h3>
                  <p className="text-muted-foreground text-sm">
                    A brief description of this amazing project and the technologies used.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
