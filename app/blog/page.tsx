import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Blog', description: 'Practical guides for designing, delegating, and reviewing specialist remote support.', alternates: { canonical: '/blog' } };

const fallbackThumbnail: Record<string, string> = {
  'Role design': '/thumbnails/october-12/vendor-credential-request-workflow.svg',
  'Administrative systems': '/thumbnails/october-12/document-naming-migration-control.svg',
  'Executive support': '/thumbnails/october-12/executive-briefing-source-verification.svg',
  'Project coordination': '/thumbnails/october-12/project-status-evidence-cadence.svg',
};

export default function BlogPage() {
  return <main>
    <PageHero eyebrow="Practical field notes" title="Clearer roles. Better handoffs." description="Guides for owners and managers who want to delegate recurring work without losing visibility or control." image="/thumbnails/october-12/executive-briefing-source-verification.svg" imageAlt="Executive briefing source verification workflow" imageFit="contain" />
    <section className="content-wrap">
      <div className="principles">{['All', ...new Set(blogPosts.map(post => post.category))].map(category => <span className="pill" key={category}>{category} ({category === 'All' ? blogPosts.length : blogPosts.filter(post => post.category === category).length})</span>)}</div>
      <div className="article-grid">{blogPosts.map(post => {
        const thumbnail = post.thumbnail || fallbackThumbnail[post.category] || '/hero.png';
        return <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}>
          <span className="article-card-image"><Image src={thumbnail} alt={`${post.title} workflow illustration`} fill sizes="(max-width: 700px) 92vw, 31vw" /></span>
          <span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta">Published <time dateTime={post.publishedAt}>{post.publishedAt}</time></p><span className="text-link">Read article</span>
        </Link>;
      })}</div>
    </section>
  </main>;
}
