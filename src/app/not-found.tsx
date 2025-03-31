import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p className="mt-4 text-gray-600">Could not find requested resource</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500"
      >
        Return Home
      </Link>
    </div>
  );
}
