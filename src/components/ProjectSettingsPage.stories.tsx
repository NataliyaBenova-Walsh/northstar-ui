import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectSettingsPage } from './ProjectSettingsPage';

const meta = {
  title: 'Pages/ProjectSettingsPage',
  component: ProjectSettingsPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectSettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MembersSectionSelected: Story = {
  args: {
    activeItemId: 'members',
  },
};
