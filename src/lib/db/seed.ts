import { db } from './index';
import {
  users,
  caseStudies,
  insights,
  tags,
  media,
  caseStudyTags,
  insightTags,
} from './schema';

async function seed() {
  console.log('🌱 Starting database seeding...');

  try {
    // Create admin user
    console.log('👤 Creating admin user...');
    const [adminUser] = await db
      .insert(users)
      .values({
        email: 'jacob@jacobchademwiri.com',
        role: 'admin',
        metadata: {
          name: 'Jacob Chademwiri',
          title:
            'Tendering & Accounts Receivable Manager | Projects Coordinator',
          company: 'SITHEMBE TRANSPORTATION & PROJECTS',
        },
      })
      .returning();

    console.log('✅ Admin user created:', adminUser.email);

    // Create tags
    console.log('🏷️ Creating tags...');
    const tagData = [
      {
        name: 'Tender Management',
        slug: 'tender-management',
        description: 'Content related to tender processes and bid management',
      },
      {
        name: 'Project Coordination',
        slug: 'project-coordination',
        description: 'Project management and coordination best practices',
      },
      {
        name: 'Web Development',
        slug: 'web-development',
        description: 'Web development projects and technical solutions',
      },
      {
        name: 'IT Solutions',
        slug: 'it-solutions',
        description: 'Information technology solutions and implementations',
      },
      {
        name: 'CIDB',
        slug: 'cidb',
        description: 'Construction Industry Development Board related content',
      },
      {
        name: 'WordPress',
        slug: 'wordpress',
        description: 'WordPress development and customization',
      },
      {
        name: 'Next.js',
        slug: 'nextjs',
        description: 'Next.js framework and React development',
      },
      {
        name: 'Business Process',
        slug: 'business-process',
        description: 'Business process optimization and improvement',
      },
      {
        name: 'Digital Transformation',
        slug: 'digital-transformation',
        description: 'Digital transformation strategies and implementation',
      },
      {
        name: 'Microsoft 365',
        slug: 'microsoft-365',
        description: 'Microsoft 365 solutions and productivity tools',
      },
    ];

    const createdTags = await db.insert(tags).values(tagData).returning();
    console.log(`✅ Created ${createdTags.length} tags`);

    // Create sample case studies
    console.log('📁 Creating case studies...');
    const caseStudyData = [
      {
        title: 'SITHEMBE Transportation Tender Management System',
        slug: 'sithembe-tender-management-system',
        serviceType: 'tender_management' as const,
        clientName: 'SITHEMBE TRANSPORTATION & PROJECTS',
        projectScope: 'Complete tender management system implementation',
        description:
          'Comprehensive tender management system designed to streamline bid preparation, compliance tracking, and submission processes for transportation projects.',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'This case study showcases the implementation of a comprehensive tender management system for SITHEMBE Transportation & Projects, focusing on improving bid success rates and compliance management.',
                },
              ],
            },
          ],
        },
        excerpt:
          'Streamlined tender management processes resulting in 40% improvement in bid success rates and 60% reduction in preparation time.',
        challenge:
          'SITHEMBE faced challenges with manual tender processes, inconsistent documentation, and difficulty tracking multiple concurrent bids across different government departments.',
        solution:
          'Implemented a centralized tender management system with automated compliance checking, document templates, and real-time tracking of bid statuses and deadlines.',
        results:
          'Achieved 40% improvement in bid success rates, 60% reduction in tender preparation time, and 100% compliance with CIDB requirements across all submissions.',
        roiMetrics: [
          '40% increase in successful bids',
          '60% reduction in preparation time',
          '100% CIDB compliance rate',
          'R2.5M additional revenue from improved bid success',
        ],
        technologies: [
          'Microsoft 365',
          'SharePoint',
          'Power Automate',
          'CIDB Integration',
        ],
        projectDuration: '6 months',
        budgetRange: 'R150,000 - R200,000',
        isFeatured: true,
        status: 'published' as const,
        publishedAt: new Date('2024-01-15'),
      },
      {
        title: 'Municipal Infrastructure Project Coordination Platform',
        slug: 'municipal-infrastructure-coordination',
        serviceType: 'project_coordination' as const,
        clientName: 'Local Municipality',
        projectScope: 'Multi-phase infrastructure project coordination',
        description:
          'Coordinated multiple infrastructure development projects including road construction, water systems, and community facilities with stakeholder management and budget tracking.',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'This project involved coordinating complex municipal infrastructure development across multiple phases and stakeholder groups.',
                },
              ],
            },
          ],
        },
        excerpt:
          'Successfully coordinated R15M infrastructure project with 95% on-time delivery and 12% under-budget completion.',
        challenge:
          'Complex multi-stakeholder project with tight deadlines, budget constraints, and community engagement requirements across multiple construction phases.',
        solution:
          'Implemented comprehensive project coordination framework with stakeholder communication protocols, budget tracking systems, and milestone-based delivery management.',
        results:
          'Delivered R15M project 95% on-time, 12% under budget, with 98% stakeholder satisfaction and zero safety incidents across all phases.',
        roiMetrics: [
          'R1.8M cost savings (12% under budget)',
          '95% on-time delivery rate',
          '98% stakeholder satisfaction',
          'Zero safety incidents',
        ],
        technologies: [
          'Microsoft Project',
          'SharePoint',
          'Power BI',
          'Teams Integration',
        ],
        projectDuration: '18 months',
        budgetRange: 'R15,000,000',
        isFeatured: true,
        status: 'published' as const,
        publishedAt: new Date('2024-02-20'),
      },
      {
        title: 'Professional Services Portfolio Website',
        slug: 'professional-services-portfolio',
        serviceType: 'web_development' as const,
        clientName: 'Jacob Chademwiri Professional Services',
        projectScope: 'Full-stack business portfolio website development',
        description:
          'Modern, responsive business portfolio website built with Next.js, featuring content management system, case studies showcase, and consultation booking functionality.',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'A comprehensive business portfolio website designed to showcase professional services and attract potential clients through strategic content presentation and user experience optimization.',
                },
              ],
            },
          ],
        },
        excerpt:
          'Modern business portfolio website with 95+ Lighthouse score, integrated CMS, and consultation booking system.',
        challenge:
          'Need for professional online presence that effectively communicates expertise in tender management, project coordination, and web development while providing easy content management.',
        solution:
          'Developed full-stack Next.js application with Supabase backend, featuring responsive design, content management system, SEO optimization, and integrated consultation booking.',
        results:
          'Achieved 95+ Lighthouse performance score, 40% increase in consultation inquiries, and streamlined content management workflow.',
        roiMetrics: [
          '95+ Lighthouse performance score',
          '40% increase in consultation inquiries',
          '75% reduction in content update time',
          '100% mobile responsiveness',
        ],
        technologies: [
          'Next.js 15',
          'TypeScript',
          'Supabase',
          'Tailwind CSS',
          'Drizzle ORM',
        ],
        projectDuration: '3 months',
        budgetRange: 'R50,000 - R75,000',
        projectUrl: 'https://jacobchademwiri.com',
        isFeatured: true,
        status: 'published' as const,
        publishedAt: new Date('2024-03-10'),
      },
    ];

    const createdCaseStudies = await db
      .insert(caseStudies)
      .values(caseStudyData)
      .returning();
    console.log(`✅ Created ${createdCaseStudies.length} case studies`);

    // Create sample insights
    console.log('💡 Creating insights...');
    const insightData = [
      {
        title: 'Mastering CIDB Compliance: A Complete Guide for Contractors',
        slug: 'mastering-cidb-compliance-guide',
        content: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [
                { type: 'text', text: 'Understanding CIDB Requirements' },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'The Construction Industry Development Board (CIDB) plays a crucial role in regulating and developing the South African construction industry. Understanding and maintaining compliance is essential for contractors seeking government and private sector opportunities.',
                },
              ],
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'Key Compliance Areas' }],
            },
            {
              type: 'bulletList',
              content: [
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Contractor registration and grading maintenance',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Financial capacity documentation and updates',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Technical capacity and experience verification',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        excerpt:
          'Essential guide to maintaining CIDB compliance, covering registration requirements, grading processes, and best practices for contractors in the South African construction industry.',
        authorId: adminUser.id,
        readingTime: 8,
        isFeatured: true,
        status: 'published' as const,
        publishedAt: new Date('2024-01-05'),
      },
      {
        title:
          'Digital Transformation in Project Management: Tools and Strategies',
        slug: 'digital-transformation-project-management',
        content: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [
                { type: 'text', text: 'The Evolution of Project Management' },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Digital transformation has revolutionized how we approach project management, offering unprecedented visibility, collaboration capabilities, and efficiency improvements across all project phases.',
                },
              ],
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'Key Digital Tools' }],
            },
            {
              type: 'bulletList',
              content: [
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Microsoft Project and Power BI for comprehensive planning and analytics',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'SharePoint and Teams for collaboration and document management',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Power Automate for workflow automation and process optimization',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        excerpt:
          'Explore how digital transformation is reshaping project management practices, featuring practical tools and strategies for improved efficiency and collaboration.',
        authorId: adminUser.id,
        readingTime: 6,
        isFeatured: true,
        status: 'published' as const,
        publishedAt: new Date('2024-02-12'),
      },
      {
        title: 'Building Modern Web Applications with Next.js and Supabase',
        slug: 'modern-web-apps-nextjs-supabase',
        content: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [
                { type: 'text', text: 'The Power of Modern Web Development' },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Combining Next.js with Supabase creates a powerful full-stack development experience that enables rapid development of scalable, performant web applications with built-in authentication and real-time capabilities.',
                },
              ],
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'Key Benefits' }],
            },
            {
              type: 'bulletList',
              content: [
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Server-side rendering for optimal SEO and performance',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Built-in authentication and database management with Supabase',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          type: 'text',
                          text: 'Type-safe development with TypeScript and Drizzle ORM',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        excerpt:
          'Learn how to leverage Next.js and Supabase for building modern, scalable web applications with authentication, real-time features, and optimal performance.',
        authorId: adminUser.id,
        readingTime: 10,
        isFeatured: false,
        status: 'published' as const,
        publishedAt: new Date('2024-03-05'),
      },
    ];

    const createdInsights = await db
      .insert(insights)
      .values(insightData)
      .returning();
    console.log(`✅ Created ${createdInsights.length} insights`);

    // Create tag associations for case studies
    console.log('🔗 Creating case study tag associations...');
    const caseStudyTagAssociations = [
      // SITHEMBE Tender Management System
      {
        caseStudyId: createdCaseStudies[0].id,
        tagId: createdTags.find((t) => t.slug === 'tender-management')!.id,
      },
      {
        caseStudyId: createdCaseStudies[0].id,
        tagId: createdTags.find((t) => t.slug === 'cidb')!.id,
      },
      {
        caseStudyId: createdCaseStudies[0].id,
        tagId: createdTags.find((t) => t.slug === 'microsoft-365')!.id,
      },
      // Municipal Infrastructure Project
      {
        caseStudyId: createdCaseStudies[1].id,
        tagId: createdTags.find((t) => t.slug === 'project-coordination')!.id,
      },
      {
        caseStudyId: createdCaseStudies[1].id,
        tagId: createdTags.find((t) => t.slug === 'business-process')!.id,
      },
      // Portfolio Website
      {
        caseStudyId: createdCaseStudies[2].id,
        tagId: createdTags.find((t) => t.slug === 'web-development')!.id,
      },
      {
        caseStudyId: createdCaseStudies[2].id,
        tagId: createdTags.find((t) => t.slug === 'nextjs')!.id,
      },
    ];

    await db.insert(caseStudyTags).values(caseStudyTagAssociations);
    console.log(
      `✅ Created ${caseStudyTagAssociations.length} case study tag associations`
    );

    // Create tag associations for insights
    console.log('🔗 Creating insight tag associations...');
    const insightTagAssociations = [
      // CIDB Compliance Guide
      {
        insightId: createdInsights[0].id,
        tagId: createdTags.find((t) => t.slug === 'tender-management')!.id,
      },
      {
        insightId: createdInsights[0].id,
        tagId: createdTags.find((t) => t.slug === 'cidb')!.id,
      },
      // Digital Transformation
      {
        insightId: createdInsights[1].id,
        tagId: createdTags.find((t) => t.slug === 'project-coordination')!.id,
      },
      {
        insightId: createdInsights[1].id,
        tagId: createdTags.find((t) => t.slug === 'digital-transformation')!.id,
      },
      {
        insightId: createdInsights[1].id,
        tagId: createdTags.find((t) => t.slug === 'microsoft-365')!.id,
      },
      // Next.js and Supabase
      {
        insightId: createdInsights[2].id,
        tagId: createdTags.find((t) => t.slug === 'web-development')!.id,
      },
      {
        insightId: createdInsights[2].id,
        tagId: createdTags.find((t) => t.slug === 'nextjs')!.id,
      },
    ];

    await db.insert(insightTags).values(insightTagAssociations);
    console.log(
      `✅ Created ${insightTagAssociations.length} insight tag associations`
    );

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`- Users: 1 admin user created`);
    console.log(`- Tags: ${createdTags.length} tags created`);
    console.log(
      `- Case Studies: ${createdCaseStudies.length} case studies created`
    );
    console.log(`- Insights: ${createdInsights.length} insights created`);
    console.log(
      `- Tag Associations: ${
        caseStudyTagAssociations.length + insightTagAssociations.length
      } associations created`
    );
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

// Run the seed function
seed()
  .then(() => {
    console.log('✅ Seeding process completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Seeding process failed:', error);
    process.exit(1);
  });
