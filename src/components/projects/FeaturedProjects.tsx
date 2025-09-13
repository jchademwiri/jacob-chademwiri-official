import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const featuredProjects = [
  {
    client: 'Sithembe Transportation and Projects',
    title: 'Website Redesign and Development',
    slug: 'sithembe.co.za',
    period: 'Oct 2022 - Mar 2023',
    challenge:
      'Revamp the existing website to attract more clients and partners, ensuring easy navigation and accessibility.',
    results:
      'Professional online presence, improved user experience, and modern design practices implemented.',
    skills: ['Next.js', 'Tailwind CSS', 'Figma', 'SEO'],
  },
  {
    client: 'Dyondzisani Commerce',
    title: 'Website Design, Development and Hosting',
    slug: 'dyondzisanicommerce.co.za',
    period: 'Jul 2023 - Present',
    challenge:
      'Develop a site from the ground up using WordPress and Elementor, and connect business to Google My Business.',
    results:
      'Unique, professional virtual assistance platform for academic assignments and research projects.',
    skills: ['WordPress', 'SEO', 'Social Media', 'Google My Business'],
  },
  {
    client: 'Livhu and Musa Enterprise',
    title: 'Website Design, Development and Hosting',
    slug: 'livhuandmusa.co.za',
    period: 'Oct 2022 - Mar 2023',
    challenge:
      'Revamp the existing website to attract more clients and partners, ensuring easy navigation and accessibility.',
    results:
      'Professional online presence, improved user experience, and modern design practices implemented.',
    skills: ['Next.js', 'Tailwind CSS', 'Figma', 'SEO'],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-12 md:py-20">
      {/* Featured Projects */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((proj) => (
            <Card key={proj.slug} className="h-full">
              <CardHeader>
                <div className="text-sm text-muted-foreground italic mb-1">
                  {proj.client}
                </div>
                <CardTitle>{proj.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-2">
                  {proj.period}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Challenge:</span>{' '}
                  {proj.challenge}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Results:</span> {proj.results}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
