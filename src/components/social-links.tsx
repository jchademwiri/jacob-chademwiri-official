import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Connect</h3>
      <div className="flex flex-col space-y-2">
        <Link
          href="https://github.com/jchademwiri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </Link>
        <a
          href="https://twitter.com/jchademwiri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Twitter className="h-5 w-5" />
          <span>Twitter</span>
        </a>
        <a
          href="https://linkedin.com/in/jchademwiri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
        <Link
          href="mailto:hello@jacobc.co.za"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Mail className="h-5 w-5" />
          <span>hello@jacobc.co.za</span>
        </Link>
      </div>
    </div>
  );
};
