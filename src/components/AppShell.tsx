import type { ReactNode } from 'react';
import { SideNav } from './SideNav';
import type { NavItem } from './SideNav';
import { TopNav } from './TopNav';

type AppShellProps = {
  workspaceName: string;
  projectName: string;
  userName: string;
  navItems: NavItem[];
  activeItemId: string;
  children?: ReactNode;
};

export function AppShell({
  workspaceName,
  projectName,
  userName,
  navItems,
  activeItemId,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf4_0%,#f8fafc_35%,#f8fafc_100%)] text-slate-900">
      <TopNav workspaceName={workspaceName} projectName={projectName} userName={userName} />
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:items-start">
        <SideNav items={navItems} activeItemId={activeItemId} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

export type { AppShellProps };
