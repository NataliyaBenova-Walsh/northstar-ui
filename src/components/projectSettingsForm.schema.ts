import { z } from 'zod';

const projectSettingsSchema = z.object({
  projectName: z.string().min(3, 'Project name must be at least 3 characters.'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters.')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  environment: z.enum(['development', 'staging', 'production']),
  ownerEmail: z.email('Enter a valid email address.'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters.')
    .max(240, 'Description must stay under 240 characters.'),
  allowPublicSharing: z.boolean(),
  enableDailyDigest: z.boolean(),
});

type ProjectSettingsValues = z.infer<typeof projectSettingsSchema>;

const defaultProjectSettingsValues: ProjectSettingsValues = {
  projectName: 'Northstar Design System',
  slug: 'northstar-design-system',
  environment: 'staging',
  ownerEmail: 'team@northstar.app',
  description:
    'Shared UI foundations, component documentation, and release workflows for the product organization.',
  allowPublicSharing: false,
  enableDailyDigest: true,
};

export { defaultProjectSettingsValues, projectSettingsSchema };
export type { ProjectSettingsValues };
