# Northstar UI

[![Build and deploy Storybook](https://github.com/NataliyaBenova-Walsh/northstar-ui/actions/workflows/storybook.yml/badge.svg)](https://github.com/NataliyaBenova-Walsh/northstar-ui/actions/workflows/storybook.yml)

A small React component library and page kit, documented and tested in Storybook.

**[View the live Storybook →](https://nataliyabenova-walsh.github.io/northstar-ui/)**

It covers the building blocks of a typical SaaS settings area: buttons, cards, accessible form fields,
app navigation, and full page compositions with a schema-validated settings form.

<!-- TODO: add a screenshot -->

## Tech stack

- **React 19** + **TypeScript**
- **Vite** for the app and Storybook builder
- **Tailwind CSS v4** for styling
- **Storybook 10** with autodocs and `play` interaction tests
- **react-hook-form** + **zod** for typed, schema-driven form validation

## Components

| Group      | Components                                                                 |
| ---------- | -------------------------------------------------------------------------- |
| Basics     | `Button` (primary / secondary / danger, 3 sizes), `Card`                   |
| Forms      | `TextField`, `SelectField`, `TextareaField`, `CheckboxField`, `FormField`  |
| Layout     | `AppShell`, `TopNav`, `SideNav`                                            |
| Pages      | `DashboardPage`, `ProjectSettingsPage`, `ProjectSettingsForm`              |

Every component has stories for its meaningful states, for example default, empty, loading,
invalid input, and busy data sets.

## Highlights

- **Schema-driven forms**: one zod schema provides both the validation rules and the TypeScript types
  (`projectSettingsForm.schema.ts`).
- **Accessibility**: error messages are linked to inputs with `aria-describedby` and `aria-invalid`,
  navigation uses real links with `aria-current`, and save feedback is announced with `role="status"`.
- **Interaction tests**: page stories use `play` functions to check rendered content and empty states.
- **Form state handling**: tracks unsaved changes, resets to the last saved values, and shows save feedback.

## Getting started

```bash
npm install
npm run storybook   # Storybook on http://localhost:6006
npm run dev         # demo app on http://localhost:5173
```

## Scripts

| Script                    | Description                         |
| ------------------------- | ----------------------------------- |
| `npm run dev`             | Start the Vite dev server           |
| `npm run build`           | Type-check and build the demo app   |
| `npm run storybook`       | Start Storybook                     |
| `npm run build-storybook` | Build a static Storybook            |

## Project structure

```
.storybook/          Storybook config and global decorators
src/
  components/        Components, stories, mocks, and form schema
  App.tsx            Demo app (renders the project settings page)
```
