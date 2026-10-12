import { Button } from './Button';

type CardProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
};

export function Card({ eyebrow, title, description, actionLabel }: CardProps) {
  return (
    <article className="w-[22rem] rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6">
        <Button label={actionLabel} variant="primary" size="sm" />
      </div>
    </article>
  );
}

export type { CardProps };
