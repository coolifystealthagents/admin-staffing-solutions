import { site } from './site';
import type { BlogPost, ResearchPost } from './types';

// Previous editorial content remains recoverable in Git history.
export const blogPosts: BlogPost[] = [];
export const researchPosts: ResearchPost[] = [];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export const secondaryNav = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' }
];



export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
