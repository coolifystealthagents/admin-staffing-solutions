import Image from 'next/image';
import type { ReactNode } from 'react';
import { site } from '@/lib/site';

export function PageHero({ eyebrow, title, description, image, imageAlt, imageFit = 'cover', children }: { eyebrow: string; title: string; description: string; image?: string; imageAlt?: string; imageFit?: 'cover' | 'contain'; children?: ReactNode }) {
  return <header className="page-hero page-hero-media">
    <div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p>{children}</div>
    <div className={`page-hero-image ${imageFit === 'contain' ? 'contain' : ''}`}><Image src={image || site.heroImage} alt={imageAlt || site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 42vw" /></div>
  </header>;
}
