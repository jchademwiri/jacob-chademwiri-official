import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import {
  Briefcase,
  HomeIcon,
  Icon,
  InfoIcon,
  Link2Icon,
  MailIcon,
  PiIcon,
  WorkflowIcon
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/', icon: <HomeIcon /> },
  { name: 'Experience', href: '/experience', icon: <Briefcase /> },
  { name: 'Projects', href: '/projects', icon: <Link2Icon /> },
  { name: 'CV', href: '/cv', icon: <InfoIcon /> }
];
const endNavLinks = [
  { name: 'Articles', href: '/articles', icon: <InfoIcon /> },
  { name: 'Contact', href: '/contact', icon: <MailIcon /> }
];

export default function Header() {
  return (
    <nav className="container flex py-5 mx-auto justify-between ">
      <div>
        {/* create a nav */}
        <ul className="flex space-x-4 justify-center items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className=" hover:text-blue-500 dark:hover:text-blue-400">
                <div className="flex items-center space-x-2">
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <ul className="flex space-x-4 justify-center items-center">
            {endNavLinks.map(link => (
              <li key={link.name}>
                <Link href={link.href} className=" hover:text-blue-500 dark:hover:text-blue-400">
                  <div className="flex items-center space-x-2">
                    {link.icon && <span>{link.icon}</span>}
                    <span>{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
}
