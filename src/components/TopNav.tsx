import { Button } from './Button';

type TopNavProps = {
  workspaceName: string;
  projectName: string;
  userName: string;
};

export function TopNav({ workspaceName, projectName, userName }: TopNavProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-amber-400 text-sm font-black text-white shadow-[0_12px_24px_rgba(245,158,11,0.28)]">
            SG
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {workspaceName}
            </p>
            <p className="text-sm font-semibold text-slate-900">{projectName}</p>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 px-4 md:block">
          <div className="max-w-md rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
            Search components, issues, or settings
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button label="Invite" variant="secondary" size="sm" />
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
              {userName
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)}
            </div>
            <span className="hidden text-sm font-medium text-slate-700 sm:inline">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export type { TopNavProps };
