import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav } from './TopNav';

const meta = {
  title: 'Layout/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  args: {
    workspaceName: 'Studio Grid',
    projectName: 'Northstar',
    userName: 'Natal Sjogren',
  },
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongWorkspaceName: Story = {
  args: {
    workspaceName: 'Scandinavian Growth Web Applications',
    projectName: 'Platform Foundations',
  },
};
