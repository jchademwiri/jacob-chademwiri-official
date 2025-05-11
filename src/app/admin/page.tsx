import { redirect } from 'next/navigation';

import { LogoutButton } from '@/components/logout-button';
import { createClient } from '@/lib/server';

export default async function AdminPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-2">
      <p>
        Hello <span>{data.user.email}</span>
      </p>
      <p>This is a Admin page</p>
      <div>{data.user.new_phone} </div>
      <LogoutButton />
    </div>
  );
}
