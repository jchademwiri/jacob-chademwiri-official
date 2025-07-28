import React from 'react';

const AboutSection = () => {
  const aboutData = {
    story: [
      {
        title: 'Professional Focus',
        content:
          'I am a result-oriented professional with expertise in Tender Administration/Management, IT Support, Web Development and a growing skillset in Project Management.',
      },
      {
        title: 'Track Record',
        content:
          'With a record of accomplishment of successful tendering, website developments and excellent IT support service delivery, I am committed to driving business growth through optimal efficiency.',
      },
      {
        title: 'Continuous Growth',
        content:
          'My dedication to continuous learning and development has led me to focus on acquiring Project Management skills to complement my existing expertise.',
      },
      {
        title: 'Client Commitment',
        content:
          "I am committed to providing tailored solutions that meet each client's unique needs and am constantly seeking new and innovative ways to optimize efficiency and improve business performance.",
      },
    ],
    quote: 'Success is built on curiosity, resilience, and collaboration.',
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto text-center  px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <section className="grid md:grid-cols-2 gap-4">
          {aboutData.story.map(({ title, content }, index) => (
            <div key={index} className="text-muted-foreground leading-relaxed ">
              <div className="space-y-6">
                <div className="bg-card border border-primary/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center"></div>
            <div className="relative px-6">
              <svg
                className="w-8 h-8 text-primary mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
          </div>

          <blockquote className="relative">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 leading-tight">
              {aboutData.quote}
            </p>
          </blockquote>
        </div>

        {/* Skills Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            'Tender Administration',
            'IT Support',
            'Web Development',
            'Project Management',
            'Business Optimization',
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:scale-105 hover:shadow-sm transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
