import type { CardProps } from './Card';

export const sampleCards: CardProps[] = [
  {
    eyebrow: 'Featured',
    title: 'Build in isolation',
    description: 'Use Storybook to develop UI without depending on a full app screen.',
    actionLabel: 'Read more',
  },
  {
    eyebrow: 'Workflow',
    title: 'Review states quickly',
    description: 'Page stories make it easier to compare realistic layouts and combinations.',
    actionLabel: 'Explore',
  },
  {
    eyebrow: 'Testing',
    title: 'Document real screens',
    description: 'A page story can represent a feature or dashboard, not only primitive components.',
    actionLabel: 'Open',
  },
];

export const adminCards: CardProps[] = [
  {
    eyebrow: 'Users',
    title: 'Review new signups',
    description: 'Track pending accounts and approve or reject them from one place.',
    actionLabel: 'Manage users',
  },
  {
    eyebrow: 'Reports',
    title: 'Investigate flagged content',
    description: 'Moderation queues and policy reviews can be modeled as page-level stories too.',
    actionLabel: 'Open reports',
  },
  {
    eyebrow: 'Settings',
    title: 'Update workspace rules',
    description: 'A second dataset helps you test how flexible the page really is.',
    actionLabel: 'Edit settings',
  },
];

export const busyCards: CardProps[] = [
  ...sampleCards,
  ...adminCards,
  {
    eyebrow: 'Billing',
    title: 'Resolve invoice failures',
    description: 'Stress the dashboard grid with one more realistic card state.',
    actionLabel: 'Open billing',
  },
  {
    eyebrow: 'Activity',
    title: 'Review recent workspace events',
    description: 'A dense dashboard is a better test for spacing than the default three-card layout.',
    actionLabel: 'View activity',
  },
];
