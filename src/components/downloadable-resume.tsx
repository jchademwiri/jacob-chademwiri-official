'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Eye, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface ResumeVersion {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  lastUpdated: string;
  fileSize: string;
  type: 'pdf' | 'docx';
}

const resumeVersions: ResumeVersion[] = [
  {
    id: 'full',
    name: 'Complete Resume',
    description:
      'Comprehensive resume with all experience, skills, and projects',
    fileUrl: '/resumes/jchademwiri-complete-resume.pdf',
    lastUpdated: '2024-12-15',
    fileSize: '245 KB',
    type: 'pdf',
  },
  {
    id: 'technical',
    name: 'Technical Focus',
    description:
      'Developer-focused resume highlighting technical skills and projects',
    fileUrl: '/resumes/jchademwiri-technical-resume.pdf',
    lastUpdated: '2024-12-15',
    fileSize: '198 KB',
    type: 'pdf',
  },
  {
    id: 'management',
    name: 'Management Focus',
    description: 'Project management and business operations focused resume',
    fileUrl: '/resumes/jchademwiri-management-resume.pdf',
    lastUpdated: '2024-12-15',
    fileSize: '210 KB',
    type: 'pdf',
  },
];

export function DownloadableResume() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (resume: ResumeVersion) => {
    setDownloadingId(resume.id);

    try {
      // Simulate download process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create download link
      const link = document.createElement('a');
      link.href = resume.fileUrl;
      link.download = `jchademwiri-${resume.id}-resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success(`${resume.name} downloaded successfully!`);
    } catch (error) {
      toast.error('Download failed. Please try again.');
    } finally {
      setDownloadingId(null);
    }
  };

  const handlePreview = (resume: ResumeVersion) => {
    // Open in new tab for preview
    window.open(resume.fileUrl, '_blank');
  };

  const handleShare = async (resume: ResumeVersion) => {
    const shareUrl = `${window.location.origin}${resume.fileUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Jacob Chademwiri - ${resume.name}`,
          text: resume.description,
          url: shareUrl,
        });
        toast.success('Resume shared successfully!');
      } catch (error) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Resume link copied to clipboard!');
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Resume link copied to clipboard!');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Download Resume</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the resume version that best fits your needs. Each version is
          tailored for different roles and highlights relevant experience and
          skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {resumeVersions.map((resume) => (
          <Card
            key={resume.id}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {resume.type.toUpperCase()}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {resume.fileSize}
                </span>
              </div>
              <CardTitle className="text-lg">{resume.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {resume.description}
              </p>

              <div className="text-xs text-muted-foreground">
                Last updated:{' '}
                {new Date(resume.lastUpdated).toLocaleDateString()}
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => handleDownload(resume)}
                  disabled={downloadingId === resume.id}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {downloadingId === resume.id ? 'Downloading...' : 'Download'}
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePreview(resume)}
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare(resume)}
                    className="flex-1"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Download Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">
                Need a quick download?
              </h3>
              <p className="text-muted-foreground">
                Download the complete resume with all experience and skills
                included.
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => handleDownload(resumeVersions[0])}
              disabled={downloadingId === resumeVersions[0].id}
              className="min-w-[200px]"
            >
              <Download className="w-5 h-5 mr-2" />
              {downloadingId === resumeVersions[0].id
                ? 'Downloading...'
                : 'Download Complete Resume'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          All resume versions are regularly updated and optimized for ATS
          systems. For custom resume versions or specific role requirements,
          please{' '}
          <a href="/contact" className="text-primary hover:underline">
            contact me directly
          </a>
          .
        </p>
      </div>
    </div>
  );
}
