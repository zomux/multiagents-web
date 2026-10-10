import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <figure className={styles.banner}>
        <img src="/2027/montreal-skyline.webp" width="1920" height="572"
          alt="Panoramic view of the Montréal skyline at dusk" fetchpriority="high" />
        <figcaption>
          <span>Montréal, Canada</span>
          <a href="https://unsplash.com/photos/PND3BaH9FeE">Photo: Hamed Naji / Unsplash</a>
        </figcaption>
      </figure>
      <div className={styles.heroBody}>
        <p className={styles.eyebrow}>WMAC 2027 <span>AAAI-27 Workshop · Third edition</span></p>
        <h1>Measuring Collective Intelligence <span>in Agentic Systems</span></h1>
        <p className={styles.lede}>Does a team of agents actually beat its best member, or does it just add cost?</p>
        <p className={styles.eventDate}>February 22–23, 2027 <span>One-day workshop · exact day TBD</span></p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="#submission-guidelines">Call for papers <span aria-hidden="true">↗</span></Link>
          <Link className={styles.secondaryButton} to="#important-dates">Important dates <span aria-hidden="true">↓</span></Link>
        </div>
      </div>
    </header>
  );
}

export function Dates() {
  return (
    <dl className={styles.dates}>
      <div className={styles.deadline}><dt>Paper submission</dt><dd><time dateTime="2026-11-20">November 20, 2026</time><span>Full, short, demo &amp; position papers</span></dd></div>
      <div><dt>Acceptance notification</dt><dd><time dateTime="2026-12-02">December 2, 2026</time><span>Double-blind review on OpenReview</span></dd></div>
      <div><dt>Workshop in Montréal</dt><dd>February 22–23, 2027<span>One day · exact day to be announced</span></dd></div>
    </dl>
  );
}

export function Tracks() {
  return (
    <div className={styles.tracks}>
      <section><p className={styles.trackLabel}>Original research</p><h3>Full papers</h3><p className={styles.pageLimit}>8 <span>pages maximum</span></p><p>Original research on measuring collective intelligence in agentic systems.</p></section>
      <section><p className={styles.trackLabel}>Ideas, systems &amp; early results</p><h3>Short, demo &amp; position papers</h3><p className={styles.pageLimit}>4 <span>pages maximum</span></p><p>Early results, system demos, case studies, and position statements.</p></section>
    </div>
  );
}

export function People({people}) {
  return (
    <div className={styles.people}>
      {people.map(person => (
        <article className={styles.person} key={person.name}>
          <div className={styles.personHeading}>
            {person.image ? <img src={`/2027/${person.image}.webp`} alt={person.name} width="64" height="64" loading="lazy" /> : <span className={styles.initials} aria-hidden="true">MG</span>}
            <div><h3>{person.name}</h3><p>{person.affiliation}</p></div>
          </div>
          {person.role && <p className={styles.role}>{person.role}</p>}
          <p className={styles.bio}>{person.bio}</p>
          {person.email && <a className={styles.email} href={`mailto:${person.email}`}>{person.email}</a>}
        </article>
      ))}
    </div>
  );
}
