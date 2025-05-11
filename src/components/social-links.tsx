import { Facebook, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const SocialLinks = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex justify-center gap-6 pt-8">
      <Link
        href="https://github.com/jchademwiri"
        className={`p-2 rounded-full ${
          darkMode ? 'hover:bg-green-900/60' : 'hover:bg-green-100'
        } transition-colors`}
        target="_blank"
        rel="noreferrer"
      >
        <Github size={20} />
      </Link>
      <Link
        href="https://facebook.com/jchademwiri"
        className={`p-2 rounded-full ${
          darkMode ? 'hover:bg-green-900/60' : 'hover:bg-green-100'
        } transition-colors`}
        target="_blank"
        rel="noreferrer"
      >
        <Facebook size={20} />
      </Link>
      <Link
        href="https://linkedin.com/in/jchademwiri"
        className={`p-2 rounded-full ${
          darkMode ? 'hover:bg-green-900/60' : 'hover:bg-green-100'
        } transition-colors`}
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={20} />
      </Link>
    </div>
  );
};
