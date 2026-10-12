import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppShell } from './AppShell';
import { defaultNavItems } from './ProjectSettingsPage';

const meta = {
  title: 'Layout/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  args: {
    workspaceName: 'Studio Grid',
    projectName: 'Northstar',
    userName: 'Natal Sjogren',
    navItems: defaultNavItems,
    activeItemId: 'settings',
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AppShell {...args}>
      <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <h1 className="text-3xl font-black text-slate-900">Workspace shell</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          This story isolates the navigation frame so layout changes are easy to review without the
          noise of the full settings page.
        </p>
      </div>
    </AppShell>
  ),
};
