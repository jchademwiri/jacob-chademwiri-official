'use client';
import { useState } from 'react';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <footer
      className={`mt-16 text-sm ${
        darkMode ? 'text-green-500' : 'text-green-600'
      }`}
    >
      <div className="space-y-2">
        <p>
          © {new Date().getFullYear()} Jacob Chademwiri. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <span>hello@jacobc.co.za</span> |<span>074 049 1433</span>
        </div>
      </div>
    </footer>
  );
}
