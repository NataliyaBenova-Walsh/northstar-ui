import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto flex max-w-5xl justify-center">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    eyebrow: 'Featured',
    title: 'Build components in isolation',
    description:
      'Storybook helps you design, test, and document UI states without depending on a full page.',
    actionLabel: 'Read more',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Comparison: Story = {
  render: (args) => (
    <div className="grid gap-6 md:grid-cols-2">
      <Card {...args} />
      <Card
        {...args}
        eyebrow="Secondary"
        title="Compare variations"
        description="A render function is useful when one story needs a custom layout or multiple instances."
        actionLabel="Compare"
      />
    </div>
  ),
};

export const ContentStress: Story = {
  args: {
    eyebrow: 'Deep dive',
    title: 'A card with a much longer title that checks wrapping and vertical rhythm',
    description:
      'This story intentionally uses longer content to expose spacing problems, awkward wrapping, and visual imbalance that often stay hidden in the default state. It is a high-value edge case because real product copy is rarely as short and tidy as the first design pass.',
    actionLabel: 'Read the full analysis',
  },
};
