import { Card } from './Card';
import type { CardProps } from './Card';

type DashboardPageProps = {
  title: string;
  cards: CardProps[];
};

export function DashboardPage({ title, cards }: DashboardPageProps) {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black text-slate-900">{title}</h1>
        {cards.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <Card
                key={`${card.eyebrow}-${card.title}`}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                actionLabel={card.actionLabel}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-slate-500">
            No cards available yet.
          </div>
        )}
      </div>
    </main>
  );
}

export type { DashboardPageProps };
