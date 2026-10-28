import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { researchPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing specialist support roles.', alternates: { canonical: '/research' } };

function fallbackThumbnail(cluster: string) {
  const name = cluster.toLowerCase();
  if (name.includes('executive')) return '/thumbnails/october-12/calendar-conflict-classification-agreement-study.svg';
  if (name.includes('inbox')) return '/thumbnails/october-12/shared-inbox-handoff-completeness-study.svg';
  if (name.includes('meeting')) return '/thumbnails/october-12/meeting-action-acceptance-study.svg';
  if (name.includes('customer')) return '/thumbnails/october-12/customer-onboarding-first-review-study.svg';
  if (name.includes('project')) return '/thumbnails/october-12/project-status-lineage-reproducibility-study.svg';
  if (name.includes('role')) return '/thumbnails/october-12/vendor-credential-request-workflow.svg';
  return '/thumbnails/october-12/document-naming-migration-control.svg';
}

export default function ResearchPage() {
  return <main>
    <PageHero eyebrow="Research library" title="Evidence for better operating decisions." description="Source-led briefs that turn public guidance and operational patterns into questions your team can use." image="/thumbnails/october-12/project-status-lineage-reproducibility-study.svg" imageAlt="Project status lineage research workflow" imageFit="contain" />
    <section className="content-wrap content-grid">{[...researchPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug)).map(post => <Link className="content-card editorial-index-card" href={`/research/${post.slug}`} key={post.slug}>
      <span className="article-card-image"><Image src={post.thumbnail || fallbackThumbnail(post.cluster)} alt={`${post.title} research illustration`} fill sizes="(max-width: 700px) 92vw, 31vw" /></span>
      <span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta">Published <time dateTime={post.publishedAt}>{post.publishedAt}</time></p><span className="text-link">Review the brief</span>
    </Link>)}</section>
  </main>;
}
