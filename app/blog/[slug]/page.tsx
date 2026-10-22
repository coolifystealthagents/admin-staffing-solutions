import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleNavigator } from '@/components/ArticleNavigator';
import { PageHero } from '@/components/PageHero';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
const displayDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
const idFor = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = blogBySlug(slug); return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.description, images: post.thumbnail ? [post.thumbnail] : undefined } } : {}; }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = blogBySlug(slug); if (!post) notFound();
  const position = blogPosts.findIndex(item => item.slug === post.slug);
  const related = blogPosts.filter(item => item.slug !== post.slug).slice(Math.max(0, position - 1), Math.max(0, position - 1) + 3);
  return <main>
    <PageHero eyebrow={`Blog / ${post.category}`} title={post.title} description={post.description} image={post.thumbnail} imageAlt={`${post.title} editorial illustration`} imageFit="contain"><p className="meta">{site.name} Editorial Team · Published <time dateTime={post.publishedAt}>{displayDate(post.publishedAt)}</time> · {post.readTime}</p></PageHero>
    <section className="content-wrap article-layout"><article className="prose article-prose">{post.sections.map((section, index) => <section key={section.heading} id={idFor(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{index === 2 && <p>Use the <Link href={post.internalService}>specialist service role</Link> to define scope and evidence.</p>}{index === 4 && <p><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides public guidance for testing workflow assumptions.</p>}{index === 6 && <p>Continue with <Link href={post.internalSibling}>the next related workflow</Link>.</p>}</section>)}<section><h2>Common questions answered</h2>{post.faq.map(item => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section><Link id="cta-blog-final-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></article><ArticleNavigator sections={post.sections} related={related.map(item => ({ href: `/blog/${item.slug}`, title: item.title }))} /></section>
    <nav className="article-pagination" aria-label="More blog articles">{position > 0 && <Link href={`/blog/${blogPosts[position - 1].slug}`}>Previous: {blogPosts[position - 1].title}</Link>}{position < blogPosts.length - 1 && <Link href={`/blog/${blogPosts[position + 1].slug}`}>Next: {blogPosts[position + 1].title}</Link>}</nav>
  </main>;
}
