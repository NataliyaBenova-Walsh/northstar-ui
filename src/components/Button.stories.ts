import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { expect, fn, userEvent, within } from 'storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Save changes',
    variant: 'primary',
    size: 'md',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const LongDangerLabel: Story = {
  args: {
    label: 'Delete this workspace permanently',
    variant: 'danger',
    size: 'lg',
  },
};

export const ClickTest: Story = {
  args: {
    label: 'Click me',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Click me' });

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
