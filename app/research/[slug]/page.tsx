import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleNavigator } from '@/components/ArticleNavigator';
import { PageHero } from '@/components/PageHero';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }
const displayDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
const idFor = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = researchBySlug(slug); return post ? { title: post.title, description: post.summary, alternates: { canonical: `/research/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.summary, images: post.thumbnail ? [post.thumbnail] : undefined } } : {}; }

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = researchBySlug(slug); if (!post) notFound();
  const sections = post.sections || [];
  const position = researchPosts.findIndex(item => item.slug === post.slug);
  const related = researchPosts.filter(item => item.slug !== post.slug).slice(Math.max(0, position - 1), Math.max(0, position - 1) + 3);
  const navigationSections = [...sections, { heading: 'Sources' }];
  return <main>
    <PageHero eyebrow={`Research / ${post.cluster}`} title={post.title} description={post.summary} image={post.thumbnail} imageAlt={`${post.title} research illustration`} imageFit="contain"><p className="meta">{site.name} Editorial Team · Published <time dateTime={post.publishedAt}>{displayDate(post.publishedAt)}</time></p></PageHero>
    <section className="content-wrap article-layout"><article className="prose article-prose"><p className="research-finding"><strong>Finding:</strong> {post.finding}</p>{sections.map(section => <section key={section.heading} id={idFor(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<section className="sources" id={idFor('Sources')}><h2>Sources</h2><ol>{post.sources.map(source => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></section><Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow</Link></article><ArticleNavigator tone="research" sections={navigationSections} related={related.map(item => ({ href: `/research/${item.slug}`, title: item.title }))} /></section>
    <nav className="article-pagination" aria-label="More research">{position > 0 && <Link href={`/research/${researchPosts[position - 1].slug}`}>Previous: {researchPosts[position - 1].title}</Link>}{position < researchPosts.length - 1 && <Link href={`/research/${researchPosts[position + 1].slug}`}>Next: {researchPosts[position + 1].title}</Link>}</nav>
  </main>;
}
