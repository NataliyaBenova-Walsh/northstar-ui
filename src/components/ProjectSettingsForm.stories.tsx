import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectSettingsForm } from './ProjectSettingsForm';

const meta = {
  title: 'Forms/ProjectSettingsForm',
  component: ProjectSettingsForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ProjectSettingsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PreFilledProduction: Story = {
  args: {
    initialValues: {
      environment: 'production',
      allowPublicSharing: true,
      ownerEmail: 'platform@northstar.app',
    },
  },
};

export const InvalidStartingValues: Story = {
  args: {
    initialValues: {
      projectName: 'UI',
      slug: 'Bad Slug',
      ownerEmail: 'invalid-email',
      description: 'Too short',
    },
  },
};
