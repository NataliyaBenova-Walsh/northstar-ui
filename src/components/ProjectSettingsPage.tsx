import { AppShell } from './AppShell';
import { ProjectSettingsForm } from './ProjectSettingsForm';
import type { ProjectSettingsValues } from './projectSettingsForm.schema';
import { defaultProjectSettingsValues } from './projectSettingsForm.schema';

const defaultNavItems = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'Status, usage, and release health.',
  },
  {
    id: 'members',
    label: 'Members',
    description: 'Access levels, invites, and teams.',
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Naming, visibility, and delivery rules.',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Plan details and seat usage.',
  },
];

type ProjectSettingsPageProps = {
  initialValues?: Partial<ProjectSettingsValues>;
  activeItemId?: string;
};

export function ProjectSettingsPage({
  initialValues = defaultProjectSettingsValues,
  activeItemId = 'settings',
}: ProjectSettingsPageProps) {
  return (
    <AppShell
      workspaceName="Studio Grid"
      projectName="Northstar"
      userName="Natal Sjogren"
      navItems={defaultNavItems}
      activeItemId={activeItemId}
    >
      <div className="space-y-6">
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Active reviewers</p>
            <p className="mt-3 text-3xl font-black text-slate-900">14</p>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Pending approvals</p>
            <p className="mt-3 text-3xl font-black text-slate-900">3</p>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Release channel</p>
            <p className="mt-3 text-3xl font-black text-slate-900">Staging</p>
          </div>
        </section>

        <ProjectSettingsForm initialValues={initialValues} />
      </div>
    </AppShell>
  );
}

export { defaultNavItems };
export type { ProjectSettingsPageProps };
