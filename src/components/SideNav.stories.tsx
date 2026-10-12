import type { Meta, StoryObj } from '@storybook/react-vite';
import { SideNav } from './SideNav';

const items = [
  { id: 'overview', label: 'Overview', description: 'Status, usage, and release health.' },
  { id: 'members', label: 'Members', description: 'Access levels, invites, and teams.' },
  { id: 'settings', label: 'Settings', description: 'Naming, visibility, and delivery rules.' },
  { id: 'billing', label: 'Billing', description: 'Plan details and seat usage.' },
];

const meta = {
  title: 'Layout/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  args: {
    items,
    activeItemId: 'settings',
  },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OverviewSelected: Story = {
  args: {
    activeItemId: 'overview',
  },
};
