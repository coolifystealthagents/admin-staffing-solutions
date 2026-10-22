'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';

const ParentAttribution = ({ inverse = false }: { inverse?: boolean }) => (
  <span className={`parent-attribution${inverse ? ' inverse' : ''}`}>
    <span>Powered by</span>
    <Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={89} height={30} />
  </span>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const focusable = navRef.current?.querySelectorAll<HTMLElement>('a,button');
    focusable?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <Image src="/logo.svg" alt="" width={42} height={42} priority />
        <span>{site.name}</span>
      </Link>
      <ParentAttribution />
      <button ref={buttonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}>
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true">Menu</span>
      </button>
      <nav ref={navRef} id="primary-navigation" aria-label="Primary navigation" data-open={open}>
        {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
    </header>
  </>;
}

export function Footer() {
  return <footer>
    <div className="footer-brand-block">
      <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
      <p>Specialist remote administrative staff for {site.audience}.</p>
      <ParentAttribution inverse />
    </div>
    <div className="footer-links" aria-label="Footer navigation">
      {nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      <Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
    </div>
    <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
  </footer>;
}
