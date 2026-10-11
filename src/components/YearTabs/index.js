import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';

// Sub-page tabs for a workshop year. Rendered at the top of every page of
// that year so visitors can move between them from anywhere.
const TABS = {
  2027: [
    ['/2027/', 'Main'],
  ],
  2026: [
    ['/2026/', 'Main'],
    ['/wmac_2026_photos/', 'Photo Gallery'],
    ['pathname:///2026_remote/', 'Remote Portal'],
  ],
  2025: [
    ['/2025-cfp/', 'Main'],
    ['/posts/2025_takeaway/', 'Takeaways'],
    ['/2025-agenda/', 'Agenda'],
    ['/2025-presenter-guidance/', 'Presenter Guidance'],
    ['/2025-virtual-attendance/', 'Virtual Attendance'],
    ['/2025-survey/', 'Survey'],
    ['/2025_award/', 'Best Paper Award'],
  ],
};

const normalize = p => (p.endsWith('/') ? p : `${p}/`);
const routeOf = to => to.replace(/^pathname:\/\//, '');

export default function YearTabs({year}) {
  const {pathname} = useLocation();
  const tabs = TABS[year] || [];
  return (
    <nav className={styles.tabs} aria-label={`WMAC ${year} pages`}>
      <div className={styles.list}>
        {tabs.map(([to, label]) => {
          const active = normalize(pathname) === routeOf(to);
          return (
            <Link key={to} to={to} className={clsx(styles.tab, active && styles.active)} aria-current={active ? 'page' : undefined}>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
