type NavItem = {
  id: string;
  label: string;
  description: string;
};

type SideNavProps = {
  items: NavItem[];
  activeItemId: string;
};

export function SideNav({ items, activeItemId }: SideNavProps) {
  return (
    <aside className="w-full rounded-[28px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)] lg:max-w-[280px]">
      <div className="mb-5 px-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Workspace</p>
        <h2 className="mt-2 text-lg font-bold text-slate-900">Settings</h2>
      </div>

      <nav aria-label="Workspace settings">
        <ul className="space-y-2">
          {items.map((item) => {
            const isActive = item.id === activeItemId;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block rounded-2xl px-4 py-3 transition focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-orange-300 ${
                    isActive
                      ? 'bg-orange-50 text-slate-900 ring-1 ring-orange-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="block text-sm font-semibold">{item.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    {item.description}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export type { NavItem, SideNavProps };
