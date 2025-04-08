import { ModeToggle } from './mode-toggle';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jacob Chademwiri. All rights reserved.
        </p>
        <ModeToggle />
      </div>
    </footer>
  );
}
