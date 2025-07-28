import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function AdminPage() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-2">
      <p>
        Hello <span>Jacob C</span>
      </p>
      <Button asChild className="text-white">
        <Link href="/">Go to Home</Link>
      </Button>
      <p>This is a Admin page</p>
      <Button asChild className="">
        Logout
      </Button>
    </div>
  );
}
