'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const idFor = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function ArticleNavigator({ sections, related, tone = 'blog' }: { sections: { heading: string }[]; related: { href: string; title: string }[]; tone?: 'blog' | 'research' }) {
  const [active, setActive] = useState(idFor(sections[0]?.heading || ''));
  useEffect(() => {
    const nodes = sections.map(section => document.getElementById(idFor(section.heading))).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-18% 0px -65% 0px', threshold: [0, .25, .6] });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);
  return <aside className={`sidebar article-navigator ${tone}-sidebar`}><nav aria-label="On this page"><p className="eyebrow">On this page</p>{sections.map(section => { const id = idFor(section.heading); return <a href={`#${id}`} key={id} aria-current={active === id ? 'location' : undefined}>{section.heading}</a>; })}</nav><div className="related-reading"><h3>Related reading</h3>{related.map(item => <Link href={item.href} key={item.href}>{item.title}</Link>)}</div><Link className="button" href="/contact-us">Discuss your workflow</Link></aside>;
}
