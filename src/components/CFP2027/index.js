import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';
import people from './people.json';

const OPENREVIEW = 'https://openreview.net/group?id=AAAI.org/2027/Workshop/WMAC';
const DESCRIPTION = 'WMAC 2027: an AAAI-27 workshop on measuring collective intelligence in multi-agent and sub-agent systems. Montréal, February 22–23, 2027.';
const EVENT_JSONLD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'WMAC 2027: Measuring Collective Intelligence in Agentic Systems',
  startDate: '2027-02-22',
  endDate: '2027-02-23',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {'@type': 'Place', name: 'AAAI-27', address: {'@type': 'PostalAddress', addressLocality: 'Montréal', addressCountry: 'CA'}},
  description: DESCRIPTION,
});

const SECTIONS = [
  ['overview', 'Overview'],
  ['topics', 'Topics'],
  ['speakers', 'Speakers'],
  ['schedule', 'Schedule'],
  ['dates', 'Dates'],
  ['submit', 'Submit'],
  ['organizers', 'Organizers'],
  ['series', 'Past editions'],
];

const MILESTONES = [
  ['Submissions due', 'November 20, 2026', '2026-11-20T23:59:00-12:00'],
  ['Notifications', 'December 2, 2026', '2026-12-02T23:59:00-12:00'],
  ['Workshop begins', 'February 22, 2027', '2027-02-22T08:30:00-05:00'],
];

const TOPICS = [
  ['📏', 'Metrics & evaluation methodologies', 'New metrics for coordination quality, communication efficiency, specialization, and robustness in agent teams. Extending single-agent frameworks such as AgentBoard, and multi-agent arenas such as LLMArena, to measure collective behavior.'],
  ['🧪', 'Benchmarks, environments & simulations', 'Controlled environments where collective behavior can be studied reproducibly, including negotiation and social settings, and benchmarks that score collaboration and competition directly.'],
  ['∑', 'Foundations & theories', 'Formal definitions and scaling laws for collective intelligence, with connections to how it has been studied in biological and economic systems.'],
  ['🌳', 'Hierarchical & sub-agent architectures', 'Measurement questions specific to planner–executor and manager–worker structures, where performance is attributable to no single component.'],
  ['🤝', 'Human–agent collectives', 'Evaluation of mixed human–AI teams and collective decision making.'],
  ['🚀', 'Applications', 'Case studies from software engineering, scientific discovery, robotics, healthcare, and economics where collective performance was measured, successfully or not.'],
];

const SCHEDULE = [
  ['08:30', 'Opening remarks', '5 min'],
  ['08:35', 'Invited talk 1', '45 min', 'talk'],
  ['09:20', 'Oral presentation 1', '20 min', 'oral'],
  ['09:40', 'Coffee break', '20 min', 'brk'],
  ['10:00', 'Invited talk 2', '45 min', 'talk'],
  ['10:45', 'Lightning talks', '15 min', 'oral'],
  ['11:00', 'Poster session', '60 min', 'poster'],
  ['12:00', 'Lunch break', '90 min', 'brk'],
  ['13:30', 'Breakout discussions', '45 min', 'hl', 'Small groups around posted questions: what to measure, how to compare systems, how to evaluate human–agent teams. Each group reports back.'],
  ['14:15', 'Industry demo session', '45 min', 'hl', 'Live walkthroughs of deployed multi-agent systems, with questions mid-demo.'],
  ['15:00', 'Coffee break', '20 min', 'brk'],
  ['15:20', 'Invited talk 3', '45 min', 'talk'],
  ['16:05', 'Oral presentation 2', '20 min', 'oral'],
  ['16:25', 'Invited talk 4', '45 min', 'talk'],
  ['17:10', 'Oral presentation 3', '20 min', 'oral'],
  ['17:30', 'Panel discussion', '30 min', 'panel'],
  ['18:00', 'Awards & closing', '10 min'],
];

const LEGEND = [['talk', 'Invited talk'], ['oral', 'Contributed'], ['poster', 'Poster'], ['hl', 'Interactive'], ['panel', 'Panel']];

const DATES = [
  ['Oct 2, 2026', 'Call for participation'],
  ['Nov 20, 2026', 'Paper submission deadline', true],
  ['Dec 2, 2026', 'Notification of acceptance'],
  ['Feb 22–23, 2027', 'Workshop, Montréal'],
];

function initials(name) {
  return name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

/* Drifting agent network drawn behind the hero text. */
function useNetworkCanvas(ref) {
  useEffect(() => {
    const c = ref.current;
    if (!c || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = c.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, nodes = [], raf = 0;
    const resize = () => {
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({length: Math.round(w * h / 18000)}, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: 2 + Math.random() * 2.5,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const col = '120,210,240';
      for (const a of nodes) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 140) {
          ctx.strokeStyle = `rgba(${col},${.35 * (1 - d / 140)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      for (const a of nodes) {
        ctx.fillStyle = `rgba(${col},.6)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [ref]);
}

function Countdown() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const m = MILESTONES.find(x => new Date(x[2]) > now);
      if (!m) { setState({done: true}); return; }
      const ms = new Date(m[2]) - now;
      setState({label: m[0], date: m[1], d: Math.floor(ms / 864e5), h: Math.floor(ms / 36e5) % 24, m: Math.floor(ms / 6e4) % 60});
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  if (state && state.done) return null;
  const s = state || {label: 'Submissions due', date: 'November 20, 2026', d: '–', h: '–', m: '–'};
  return (
    <div className={styles.countdownWrap}>
      <div className={styles.countdown} aria-live="polite">
        <div><span>{s.label}</span><b>{s.date}</b></div>
        <div className={styles.cdUnits}>
          <p><b>{s.d}</b>days</p><p><b>{s.h}</b>hours</p><p><b>{s.m}</b>min</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const canvas = useRef(null);
  useNetworkCanvas(canvas);
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true"><canvas ref={canvas} /></div>
      <div className={clsx(styles.wrap, styles.heroInner)}>
        <div>
          <p className={styles.eyebrow}>AAAI-27 Workshop · Third edition of WMAC</p>
          <h1 className={styles.title}>Measuring Collective Intelligence in Agentic Systems</h1>
          <ul className={styles.facts}>
            <li><svg viewBox="0 0 24 24"><path d="M7 2v3M17 2v3M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>February 22–23, 2027 <small>(one-day workshop; exact day TBD)</small></li>
            <li><svg viewBox="0 0 24 24"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Montréal, Canada · co-located with AAAI-27</li>
          </ul>
          <div className={styles.cta}>
            <Link className={clsx(styles.btn, styles.primary)} href={OPENREVIEW}>Submit on OpenReview <span aria-hidden="true">↗</span></Link>
            <a className={clsx(styles.btn, styles.ghost)} href="#dates">Important dates</a>
          </div>
        </div>
      </div>
      <span className={styles.credit}>Palais des congrès de Montréal · AAAI-27 venue</span>
      <Countdown />
    </header>
  );
}

function SectionNav({active}) {
  return (
    <nav className={styles.subnav} aria-label="Page sections">
      <div className={clsx(styles.wrap, styles.subnavInner)}>
        {SECTIONS.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={clsx(active === id && styles.active)}>{label}</a>
        ))}
      </div>
    </nav>
  );
}

function Section({id, alt, kicker, title, sub, children}) {
  return (
    <section id={id} className={clsx(styles.section, alt && styles.alt)}>
      <div className={styles.wrap}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        {title && <h2 className={styles.h2}>{title}</h2>}
        {sub && <p className={styles.sub}>{sub}</p>}
        {children}
      </div>
    </section>
  );
}

function Person({person, variant}) {
  return (
    <article className={clsx(styles.person, styles.reveal)}>
      {person.image
        ? <img src={`/2027/${person.image}.webp`} alt={person.name} loading="lazy" width="132" height="132" />
        : <div className={styles.initials} role="img" aria-label={person.name}>{initials(person.name)}</div>}
      <h3>{person.name}</h3>
      <p className={styles.aff}>{person.affiliation}{person.role && <> · {person.role}</>}</p>
      <p className={clsx(styles.bio, variant === 'speaker' && styles.bioCenter)}>{person.bio}</p>
    </article>
  );
}

export default function CFP2027() {
  const root = useRef(null);
  const [active, setActive] = useState('overview');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const el = root.current;
    el.classList.add(styles.js);
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add(styles.in); io.unobserve(e.target); }
    }), {threshold: .12});
    el.querySelectorAll(`.${styles.reveal}`).forEach((n, i) => { n.style.transitionDelay = `${(i % 4) * 60}ms`; io.observe(n); });
    const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), {rootMargin: '-45% 0px -50% 0px'});
    SECTIONS.forEach(([id]) => { const s = document.getElementById(id); if (s) spy.observe(s); });
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => { io.disconnect(); spy.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <div ref={root} className={styles.page}>
      <Head><script type="application/ld+json">{EVENT_JSONLD}</script></Head>
      <Hero />
      <SectionNav active={active} />

      <Section id="overview" kicker="Overview" title="The measurement gap">
        <div className={styles.twoCol}>
          <div className={styles.prose}>
            <p>Modern agent deployments rarely consist of a single model. A coding assistant delegates to sub-agents for retrieval, editing, and verification; research prototypes organize dozens of agents into societies that negotiate and trade; and most real systems keep humans in the loop. How well these pieces work together decides how well the system works.</p>
            <p>Our evaluation tools have not kept up. Standard benchmarks score one model on one task and say little about coordination overhead, specialization, communication efficiency, or whether adding another agent helps at all. Failure analyses of multi-agent systems point the same way: recurring problems in specification, coordination, and verification are not surfaced by task-level scores.</p>
            <p>The first two WMAC editions asked <em>how to make LLM-based agents collaborate</em>. In their discussion sessions, one question kept coming back and stayed open: <strong>how do we know a group of agents is actually working well together?</strong> This edition takes that question as its topic.</p>
          </div>
          <aside className={styles.questions}>
            <h3>Three questions we want to make progress on</h3>
            <ol>
              <li><span>1</span><p><b>What</b> is worth measuring in a multi-agent or sub-agent system, beyond end-task success?</p></li>
              <li><span>2</span><p><b>How</b> can it be measured reproducibly and comparably across systems?</p></li>
              <li><span>3</span><p><b>When</b> do collectives outperform individuals, and when do they merely add cost?</p></li>
            </ol>
          </aside>
        </div>
        <div className={styles.disciplines}>
          {['Machine learning', 'Multi-agent systems', 'Reinforcement learning', 'Economics', 'Cognitive science'].map(d => <span key={d}>{d}</span>)}
        </div>
        <div className={styles.newGrid}>
          <div className={styles.newItem}><span>New this year</span><h3>Measurement as the theme</h3><p>The first two editions asked how to make agents collaborate. This one asks how to tell whether they do.</p></div>
          <div className={styles.newItem}><span>New this year</span><h3>Breakout discussions</h3><p>Small groups around posted questions, added because past open-discussion sessions overflowed.</p></div>
          <div className={styles.newItem}><span>Returning</span><h3>Live industry demos &amp; panel</h3><p>Deployed multi-agent systems shown live, plus the panel that drew the liveliest exchanges in both prior editions.</p></div>
        </div>
      </Section>

      <Section id="topics" alt kicker="Call for papers" title="Topics of interest" sub="Submissions on the following topics are welcome, but not limited to them.">
        <div className={styles.cards}>
          {TOPICS.map(([ico, h, p]) => (
            <article key={h} className={clsx(styles.card, styles.reveal)}><div className={styles.ico}>{ico}</div><h3>{h}</h3><p>{p}</p></article>
          ))}
        </div>
      </Section>

      <Section id="speakers" kicker="Invited speakers & panelists"
        title={<>Invited participants <small className={styles.tag}>Tentative</small></>}
        sub={<><b>This list is tentative</b> and pending final confirmation of availability. Four will give invited talks. The rest join the panel and help moderate the breakout discussions. Talk assignments will be announced later.</>}>
        <div className={clsx(styles.people, styles.speakers)}>
          {people.speakers.map(p => <Person key={p.name} person={p} variant="speaker" />)}
        </div>
      </Section>

      <Section id="schedule" alt kicker="Program" title="Proposed schedule" sub="A full day built for interaction. The final agenda will be aligned with the AAAI-27 conference timetable.">
        <div className={styles.timeline}>
          {SCHEDULE.map(([t, name, dur, kind, desc]) => (
            <div key={t} className={clsx(styles.slot, kind && styles[kind])}>
              <time>{t}</time>
              <div><b>{name}</b><span>{dur}</span>{desc && <p>{desc}</p>}</div>
            </div>
          ))}
        </div>
        <ul className={styles.legend}>
          {LEGEND.map(([k, label]) => <li key={k} className={styles[k]}>{label}</li>)}
        </ul>
      </Section>

      <Section id="dates" kicker="Timeline" title="Important dates">
        <div className={styles.dates}>
          {DATES.map(([d, label, key]) => (
            <div key={d} className={clsx(styles.date, styles.reveal, key && styles.key)}><b>{d}</b><span>{label}</span></div>
          ))}
        </div>
        <p className={styles.note}>Dates follow the schedule set by the AAAI-27 workshop chairs and may change.</p>
      </Section>

      <Section id="submit" alt kicker="Submission" title="Submission guidelines">
        <div className={styles.twoCol}>
          <div className={styles.tracks}>
            <div className={styles.track}><h3>Full papers</h3><p className={styles.big}>up to 8 pages</p><p>Original research on measuring collective intelligence in agentic systems.</p></div>
            <div className={styles.track}><h3>Short, demo &amp; position papers</h3><p className={styles.big}>up to 4 pages</p><p>Early results, system demos, case studies, and position statements.</p></div>
          </div>
          <ul className={styles.checks}>
            <li><b>Non-archival.</b> Presenting here does not prevent publishing elsewhere.</li>
            <li><b>Double-blind review</b> on OpenReview, with three reviews per paper.</li>
            <li><b>Best Student Paper Award</b> for master's and PhD students.</li>
            <li>Expected: 40–50 submissions, roughly 15–20 accepted. Three oral talks, the rest posters, each with a short lightning pitch.</li>
            <li><b>Industry demos</b> welcome. Presenters should prepare a recorded fallback.</li>
          </ul>
        </div>
        <div className={clsx(styles.cta, styles.center)}>
          <Link className={clsx(styles.btn, styles.primary)} href={OPENREVIEW}>Submit your paper on OpenReview <span aria-hidden="true">↗</span></Link>
        </div>
      </Section>

      <Section id="organizers" kicker="Team" title="Organizers" sub="Four of the five organizers ran previous WMAC editions. Shu chaired both, Geramifard and Marin co-organized both, and Zhang co-chaired 2026.">
        <div className={clsx(styles.people, styles.orgs)}>
          {people.organizers.map(p => <Person key={p.name} person={p} />)}
        </div>
      </Section>

      <Section id="series" alt kicker="The series" title="Third edition of WMAC" sub="The Workshop on Multi-Agent Collaboration at AAAI has drawn a growing community since 2025.">
        <div className={styles.editions}>
          <Link className={clsx(styles.ed, styles.reveal)} to="/2025-agenda/"><span>AAAI-25 · Workshop · Philadelphia</span><h3>WMAC 2025</h3><div className={styles.nums}><p><b>33</b>submissions</p><p><b>178</b>registered</p></div></Link>
          <Link className={clsx(styles.ed, styles.reveal)} to="/2026/"><span>AAAI-26 · Bridge Program · Singapore</span><h3>WMAC 2026</h3><div className={styles.nums}><p><b>42</b>submissions</p><p><b>360</b>registered</p></div></Link>
          <div className={clsx(styles.ed, styles.now, styles.reveal)}><span>AAAI-27 · Workshop · Montréal</span><h3>WMAC 2027</h3><div className={styles.nums}><p><b>40–50</b>expected submissions</p></div></div>
        </div>
      </Section>

      <section id="contact" className={styles.section}>
        <div className={clsx(styles.wrap, styles.contact)}>
          <img src="/2027/wmac-logo.png" alt="" width="72" height="72" />
          <div>
            <h2 className={styles.h2}>Questions?</h2>
            <p>Contact the workshop chair Raphael Shu.</p>
          </div>
        </div>
      </section>

      <button type="button" className={clsx(styles.toTop, showTop && styles.show)} aria-label="Back to top"
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
    </div>
  );
}
