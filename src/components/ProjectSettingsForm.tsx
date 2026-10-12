import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';
import { CheckboxField } from './CheckboxField';
import { SelectField } from './SelectField';
import { TextareaField } from './TextareaField';
import { TextField } from './TextField';
import {
  defaultProjectSettingsValues,
  projectSettingsSchema,
} from './projectSettingsForm.schema';
import type { ProjectSettingsValues } from './projectSettingsForm.schema';

type ProjectSettingsFormProps = {
  initialValues?: Partial<ProjectSettingsValues>;
  onSubmit?: (values: ProjectSettingsValues) => void;
};

export function ProjectSettingsForm({
  initialValues,
  onSubmit,
}: ProjectSettingsFormProps) {
  const [hasSaved, setHasSaved] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProjectSettingsValues>({
    resolver: zodResolver(projectSettingsSchema),
    defaultValues: {
      ...defaultProjectSettingsValues,
      ...initialValues,
    },
  });

  const submitForm = (values: ProjectSettingsValues) => {
    // Saved values become the new baseline, so isDirty resets and further edits hide the banner.
    reset(values);
    setHasSaved(true);
    onSubmit?.(values);
  };

  const resetForm = () => {
    reset();
    setHasSaved(false);
  };

  return (
    <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
            Project settings
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-slate-900">
            Configure your workspace defaults
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Control how this project is named, where it is deployed, who owns it, and how your
            team is notified about changes.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {isDirty ? 'Unsaved changes' : 'Everything is up to date'}
        </div>
      </div>

      {hasSaved && !isDirty ? (
        <div role="status" className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Settings saved successfully.
        </div>
      ) : null}

      <form className="mt-8 space-y-8" onSubmit={handleSubmit(submitForm)}>
        <div className="grid gap-6 lg:grid-cols-2">
          <TextField
            label="Project name"
            hint="Public label"
            error={errors.projectName?.message}
            placeholder="Northstar Design System"
            registration={register('projectName')}
          />
          <TextField
            label="Project slug"
            hint="URL-safe"
            error={errors.slug?.message}
            placeholder="northstar-design-system"
            registration={register('slug')}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SelectField
            label="Environment"
            error={errors.environment?.message}
            options={[
              { value: 'development', label: 'Development' },
              { value: 'staging', label: 'Staging' },
              { value: 'production', label: 'Production' },
            ]}
            registration={register('environment')}
          />
          <TextField
            label="Owner email"
            error={errors.ownerEmail?.message}
            placeholder="team@northstar.app"
            registration={register('ownerEmail')}
          />
        </div>

        <TextareaField
          label="Description"
          hint="20-240 characters"
          error={errors.description?.message}
          placeholder="Describe the project purpose, audience, and workflow."
          registration={register('description')}
        />

        <div className="grid gap-4">
          <CheckboxField
            label="Allow public sharing"
            description="Permit non-members to view shared Storybook links without requesting access."
            registration={register('allowPublicSharing')}
          />
          <CheckboxField
            label="Enable daily digest"
            description="Send a summary of review requests, failed builds, and recent component changes."
            registration={register('enableDailyDigest')}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
          <Button
            label={isSubmitting ? 'Saving...' : 'Save settings'}
            type="submit"
            disabled={isSubmitting}
          />
          <Button
            label="Reset changes"
            variant="secondary"
            disabled={!isDirty}
            onClick={resetForm}
          />
        </div>
      </form>
    </section>
  );
}

export type { ProjectSettingsFormProps };
