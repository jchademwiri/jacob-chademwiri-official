import {
  Home,
  Briefcase,
  Target,
  CheckCircle,
  Code,
  FolderOpen,
  PenTool,
  User,
  Mail,
  type LucideIcon,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  {
    label: 'Services',
    href: '/services',
    icon: Briefcase,
    dropdown: [
      { label: 'Services Overview', href: '/services', icon: Briefcase },
      {
        label: 'Tender Management',
        href: '/services/tender-management',
        icon: Target,
      },
      {
        label: 'Project Management',
        href: '/services/project-management',
        icon: CheckCircle,
      },
      {
        label: 'Web Development',
        href: '/services/web-development',
        icon: Code,
      },
    ],
  },
  // { label: 'Case Studies', href: '/case-studies', icon: FolderOpen },
  // { label: 'Insights', href: '/insights', icon: PenTool },
  { label: 'About', href: '/about', icon: User },
  { label: 'Contact', href: '/contact', icon: Mail },
  // { label: 'Login', href: '/auth/login' },
  // { label: 'Admin', href: '/admin' },
];

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  dropdown?: NavLink[];
}
