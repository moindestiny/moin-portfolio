import { checkAuth } from '@/app/actions';
import { redirect } from 'next/navigation';
import DashboardLayoutClient from './DashboardLayoutClient';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await checkAuth();
  if (!isAuth) {
    redirect('/dashboard/login');
  }

  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
