import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardPage } from './DashboardPage';
import { busyCards, sampleCards } from './dashboardPage.mock';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
  tags: ['autodocs'],
  args: {
    title: 'Storybook Learning Dashboard',
    cards: sampleCards,
  },
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole('heading', { name: 'Storybook Learning Dashboard' })
    ).toBeInTheDocument();

    await expect(canvas.getByText('Build in isolation')).toBeInTheDocument();

    await expect(canvas.getByText('Review states quickly')).toBeInTheDocument();
  },
};

export const EmptyState: Story = {
  args: {
    cards: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('No cards available yet.')).toBeInTheDocument();
  },
};

export const LoadingState: Story = {
  render: ({ title }) => (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black text-slate-900">{title}</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="h-64 animate-pulse rounded-3xl bg-slate-200" />
          <div className="h-64 animate-pulse rounded-3xl bg-slate-200" />
          <div className="h-64 animate-pulse rounded-3xl bg-slate-200" />
        </div>
      </div>
    </main>
  ),
};

export const BusyDashboard: Story = {
  args: {
    title: 'Busy Dashboard',
    cards: busyCards,
  },
};
