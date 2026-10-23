import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const chrome = read('components/SiteChrome.tsx');
const content = read('lib/content.ts');
const marketing = read('components/Marketing.tsx');
const contact = read('app/contact-us/page.tsx');
const about = read('app/about/page.tsx');
const services = read('app/services/[slug]/page.tsx');
const serviceIndex = read('app/services/page.tsx');
const layout = read('app/layout.tsx');
const nextConfig = read('next.config.mjs');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const globalCss = read('app/globals.css');
const contactCss = read('app/contact-us/contact.css');
const gitignore = read('.gitignore');
const legacyEditorial = read('lib/legacyEditorialContent.ts');
const newerBlogs = read('lib/october12BlogPosts.ts');
const newerResearch = read('lib/october12ResearchPosts.ts');
const siteConfig = read('lib/site.ts');

function parseArrayExport(source, declaration) {
  const start = source.indexOf(declaration);
  assert.notEqual(start, -1, `Missing export: ${declaration}`);
  const valueStart = start + declaration.length;
  const valueEnd = source.lastIndexOf('];') + 1;
  return JSON.parse(source.slice(valueStart, valueEnd));
}

function parseRecordExport(source, declaration, nextDeclaration) {
  const start = source.indexOf(declaration);
  assert.notEqual(start, -1, `Missing export: ${declaration}`);
  const valueStart = start + declaration.length;
  const valueEnd = nextDeclaration ? source.indexOf(nextDeclaration, valueStart) : source.lastIndexOf(';');
  const serialized = source.slice(valueStart, valueEnd).trim().replace(/;$/, '');
  return JSON.parse(serialized);
}

const legacyBlogs = parseRecordExport(
  legacyEditorial,
  'export const legacyBlogSections: Record<string, ArticleSection[]> = ',
  'export const legacyResearchSections',
);
const legacyResearch = parseRecordExport(
  legacyEditorial,
  'export const legacyResearchSections: Record<string, ArticleSection[]> = ',
);
const octoberBlogs = parseArrayExport(newerBlogs, 'export const october12BlogPosts: BlogPost[] = ');
const octoberResearch = parseArrayExport(newerResearch, 'export const october12ResearchPosts: ResearchPost[] = ');

function visibleProseSources() {
  return [chrome, content, marketing, contact, services, serviceIndex, blog, research, legacyEditorial, newerBlogs, newerResearch];
}

test('global chrome uses exact three-item persistent primary navigation and both parent attributions', () => {
  for (const label of ['Home', 'Services', 'Contact Us']) {
    assert.match(content, new RegExp(`label:\\s*'${label}'`));
  }
  const navBlock = content.match(/export const nav = \[([\s\S]*?)\];/)?.[1] || '';
  assert.equal((navBlock.match(/label:/g) || []).length, 3);
  assert.doesNotMatch(navBlock, /About|Blog|Research/);
  assert.match(navBlock, /href:\s*'\/'[\s\S]*href:\s*'\/services'[\s\S]*href:\s*'\/contact-us'/);
  const secondaryBlock = content.match(/export const secondaryNav = \[([\s\S]*?)\];/)?.[1] || '';
  for (const label of ['About', 'Blog', 'Research']) assert.match(secondaryBlock, new RegExp(`label:\\s*'${label}'`));
  assert.equal((chrome.match(/<ParentAttribution/g) || []).length, 2);
  assert.match(chrome, /<span>Powered by<\/span>/);
  assert.match(chrome, /alt="StealthAgents"/);
  assert.doesNotMatch(chrome, /TimedLeadModal/);
  assert.match(chrome, /aria-expanded/);
  assert.match(chrome, /aria-controls/);
  assert.match(chrome, /skip-link/);
  assert.match(chrome, /secondaryNav/);
});

test('approved StealthAgents review collection contains at least ten unique sourced records', () => {
  const path = join(root, 'content/stealth-agents-proof.json');
  assert.equal(existsSync(path), true);
  const proof = JSON.parse(readFileSync(path, 'utf8'));
  assert.ok(proof.reviews.length >= 10);
  assert.equal(new Set(proof.reviews.map((review) => review.quote)).size, proof.reviews.length);
  assert.ok(proof.reviews.every((review) => review.name && review.quote && review.sourceUrl === 'https://stealthagents.com/'));
  const marquee = read('components/ReviewMarquee.tsx');
  assert.match(marquee, /★★★★★/);
  assert.match(marquee, /tabIndex=\{0\}/);
  assert.match(marquee, /tabIndex=\{clone \? -1 : undefined\}/);
});

test('official parent assets exist and Contact Us follows the gated conversion contract', () => {
  assert.equal(existsSync(join(root, 'public/brand/stealth-agents-logo-black.png')), true);
  assert.equal(existsSync(join(root, 'public/brand/stealth-agents-team-bacolod.webp')), true);
  assert.match(contact, /contact-conversion-fold/);
  assert.match(contact, /<ReviewMarquee compact \/>/);
  assert.match(contact, /<LeadForm source="contact-page-consultation" \/>/);
  assert.ok(contact.indexOf('<ReviewMarquee compact />') < contact.indexOf('<LeadForm source="contact-page-consultation" />'));
  assert.ok(contact.indexOf('contact-section credibility') > contact.indexOf('</section>'));
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /className="parent-proof-plate"/);
  assert.match(contact, /aria-label="Stealth Agents official team in Bacolod"/);
  assert.match(contactCss, /\.parent-proof-plate\{[^}]*background:#fff/);
  assert.match(contactCss, /\.parent-proof-plate strong\{/);
  assert.match(contact, /stealth-agents-logo-black\.png/);
  assert.match(contact, /stealth-agents-team-bacolod\.webp/);
  assert.doesNotMatch(contact, /<iframe/);
  assert.doesNotMatch(contact, /0\{index\s*\+\s*1\}/);
});

test('major routes use distinct approved hero media with route-specific alternatives', () => {
  assert.match(marketing, /site\.heroImage/);
  assert.match(serviceIndex, /image="\/images\/services-index\.svg"/);
  assert.match(serviceIndex, /imageAlt="Administrative service map connecting six specialist work queues to owners and review points"/);
  assert.match(about, /image="\/images\/about-admin-team\.svg"/);
  assert.match(contact, /contact-command-desk\.svg/);
  assert.doesNotMatch(serviceIndex, /image="\/hero\.png"/);
  assert.doesNotMatch(about, /image="\/hero\.png"/);
});

test('service index and each service detail use hero media and substantial operational sections', () => {
  assert.match(serviceIndex, /PageHero/);
  assert.match(services, /PageHero/);
  assert.equal((siteConfig.match(/"heroImage": "\/images\/services\//g) || []).length, 6);
  assert.match(services, /image=\{service\.heroImage\}/);
  assert.match(services, /imageFit="contain"/);
  for (const heading of ['Who this role is for', 'Inputs and access', 'Deliverables', 'Quality controls', 'Decision boundaries', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
    assert.match(services, new RegExp(heading));
  }
  for (const heading of ['Decision guide', 'What can move', 'What stays accountable', 'Choose by operating problem', 'A controlled launch', 'Service planning questions']) {
    assert.match(serviceIndex, new RegExp(heading));
  }
  assert.ok(serviceIndex.split(/\s+/).length >= 650, 'service index needs substantial decision and operating guidance');
  assert.equal((serviceIndex.match(/\['[^']+',\s*'[^']+'\]/g) || []).length >= 18, true);
});

test('editorial indexes provide prominent hero media and a thumbnail for every card', () => {
  for (const path of ['app/blog/page.tsx', 'app/research/page.tsx']) {
    const source = read(path);
    assert.match(source, /PageHero/);
    assert.match(source, /article-card-image/);
    assert.match(source, /post\.thumbnail \|\|/);
  }
});

test('every legacy article has topic-matched approved media and SVGs contain no decorative numbering', () => {
  const legacyPaths = [...content.matchAll(/"thumbnail": "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(legacyPaths.length, 25);
  assert.equal(new Set(legacyPaths).size, 25, 'legacy articles need unique topic media');
  assert.ok(legacyPaths.every((path) => path.startsWith('/images/editorial/') && existsSync(join(root, 'public', path))));

  const svgDir = join(root, 'public/images/editorial');
  const svgNames = readdirSync(svgDir).filter((name) => name.endsWith('.svg'));
  assert.equal(svgNames.length, 42);
  for (const name of svgNames) {
    const svg = read(`public/images/editorial/${name}`);
    assert.match(svg, /<title id="[^"]+">[^<]+<\/title>/);
    assert.match(svg, /<desc id="[^"]+">[^<]+<\/desc>/);
    assert.doesNotMatch(svg, /<text[^>]*>[^<]*\/\s*\d{2}<\/text>/);
  }
});

test('all forty-two rendered editorial records use distinct existing covers', () => {
  const records = [...Object.keys(legacyBlogs), ...Object.keys(legacyResearch), ...octoberBlogs.map(post => post.slug), ...octoberResearch.map(post => post.slug)];
  const sources = [content, newerBlogs, newerResearch];
  const mappings = new Map();
  for (const source of sources) {
    for (const match of source.matchAll(/"slug": "([^"]+)"[\s\S]*?"thumbnail": "([^"]+)"/g)) mappings.set(match[1], match[2]);
  }
  assert.equal(records.length, 42);
  assert.equal(new Set(records).size, 42);
  assert.equal(mappings.size, 42);
  assert.equal(new Set(mappings.values()).size, 42);
  for (const slug of records) {
    const thumbnail = mappings.get(slug);
    assert.ok(thumbnail?.startsWith('/images/editorial/'), `${slug} needs route-specific editorial media`);
    assert.equal(existsSync(join(root, 'public', thumbnail)), true, `${slug} media must exist`);
  }
});

test('nine commercial illustrations are present and wired to their routes', () => {
  const commercial = [
    'services-index.svg', 'about-admin-team.svg', 'contact-command-desk.svg',
    'services/executive-administration.svg', 'services/inbox-workflow-support.svg',
    'services/records-administration.svg', 'services/meeting-coordination.svg',
    'services/customer-administration.svg', 'services/project-administration.svg',
  ];
  assert.equal(commercial.length, 9);
  assert.ok(commercial.every(path => existsSync(join(root, 'public/images', path))));
});

test('all editorial details use topic-specific hero alternatives and complete sticky article navigation', () => {
  for (const source of [blog, research]) {
    assert.match(source, /PageHero/);
    assert.match(source, /ArticleNavigator/);
    assert.match(source, /imageFit="contain"/);
    assert.match(source, /imageAlt=\{`\$\{post\.title\} (?:editorial|research) illustration`\}/);
    assert.match(source, /navigationSections/);
  }
  assert.match(blog, /heading: 'Common questions answered'/);
  assert.match(blog, /id=\{idFor\('Common questions answered'\)\}/);
  assert.match(research, /heading: 'Sources'/);
  assert.match(research, /id=\{idFor\('Sources'\)\}/);
  const navigator = read('components/ArticleNavigator.tsx');
  assert.match(navigator, /IntersectionObserver/);
  assert.match(navigator, /aria-current/);
  assert.match(navigator, /Related reading/);
});

test('every legacy editorial record renders substantial explicit sections', () => {
  assert.equal(Object.keys(legacyBlogs).length, 5);
  assert.equal(Object.keys(legacyResearch).length, 20);
  assert.equal((content.match(/sections: legacyBlogSections\[/g) || []).length, 5);
  assert.equal((content.match(/sections: legacyResearchSections\[/g) || []).length, 20);

  for (const [slug, sections] of Object.entries(legacyBlogs)) {
    assert.ok(sections.length >= 5, `${slug} needs at least five sections`);
    assert.ok(sections.every((section) => section.heading && section.paragraphs.length >= 2), `${slug} has an incomplete section`);
    const words = sections.flatMap((section) => section.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(words >= 250, `${slug} needs substantial article copy`);
  }

  for (const [slug, sections] of Object.entries(legacyResearch)) {
    assert.ok(sections.length >= 6, `${slug} needs at least six research sections`);
    assert.ok(sections.every((section) => section.heading && section.paragraphs.length >= 1), `${slug} has an incomplete section`);
    const words = sections.flatMap((section) => section.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(words >= 250, `${slug} needs substantial protocol copy`);
  }

  const legacyResearchBlock = content.split('export const researchPosts: ResearchPost[] = [')[1].split('...october12ResearchPosts')[0];
  const routeSlugs = [...legacyResearchBlock.matchAll(/"slug": "([^"]+)"/g)].map((match) => match[1]);
  const sectionRefs = [...legacyResearchBlock.matchAll(/legacyResearchSections\["([^"]+)"\]/g)].map((match) => match[1]);
  assert.deepEqual([...routeSlugs].sort(), Object.keys(legacyResearch).sort(), 'every legacy research route needs an exact section record');
  assert.deepEqual([...sectionRefs].sort(), [...routeSlugs].sort(), 'section references must use exact route slugs');
  for (const field of ['summary', 'finding']) {
    const values = [...legacyResearchBlock.matchAll(new RegExp(`"${field}": "([^"]+)"`, 'g'))].map((match) => match[1]);
    assert.equal(values.length, 20, `expected 20 legacy ${field} values`);
    assert.equal(new Set(values).size, 20, `legacy ${field} values must be article-specific`);
    assert.ok(values.every((value) => value.split(/\s+/).length >= 20), `legacy ${field} values must be substantive`);
  }
});

test('newer articles omit generated filler while retaining topic-specific structure', () => {
  const newer = [...octoberBlogs, ...octoberResearch];
  assert.equal(newer.length, 17);
  for (const post of newer) {
    assert.ok(post.sections.length >= 8, `${post.slug} needs meaningful section structure`);
    assert.ok(post.sections.every((section) => section.paragraphs.length === 1), `${post.slug} still contains generated filler paragraphs`);
    assert.ok(post.sections.every((section) => section.paragraphs[0].length >= 120), `${post.slug} has a thin topic paragraph`);
  }
});

test('rendered article bodies contain no exact repeated substantive paragraphs', () => {
  const sectionSets = [
    ...Object.values(legacyBlogs),
    ...Object.values(legacyResearch),
    ...octoberBlogs.map((post) => post.sections),
    ...octoberResearch.map((post) => post.sections),
  ];
  const paragraphs = sectionSets
    .flatMap((sections) => sections.flatMap((section) => section.paragraphs))
    .map((paragraph) => paragraph.trim().replace(/\s+/g, ' '))
    .filter((paragraph) => paragraph.length >= 80);
  const seen = new Map();
  for (const paragraph of paragraphs) seen.set(paragraph, (seen.get(paragraph) || 0) + 1);
  const duplicates = [...seen.entries()].filter(([, count]) => count > 1).map(([paragraph]) => paragraph);
  assert.deepEqual(duplicates, []);
});

test('generated compiler state is ignored and excluded from the release index', () => {
  assert.match(gitignore, /^\*\.tsbuildinfo$/m);
  const tracked = execFileSync('git', ['ls-files', 'tsconfig.tsbuildinfo'], { cwd: root, encoding: 'utf8' }).trim();
  assert.equal(tracked, '');
});

test('security headers and canonical host redirects are configured', () => {
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.match(nextConfig, new RegExp(header));
  }
  assert.match(nextConfig, /www\.adminstaffingsolutions\.com/);
});

test('index, legal, and conversion routes declare exact self-canonicals', () => {
  const routes = [
    ['app/blog/page.tsx', '/blog'],
    ['app/research/page.tsx', '/research'],
    ['app/privacy/page.tsx', '/privacy'],
    ['app/terms/page.tsx', '/terms'],
    ['app/thank-you/page.tsx', '/thank-you'],
    ['app/thanks-whats-next/page.tsx', '/thanks-whats-next'],
  ];
  for (const [path, canonical] of routes) {
    assert.match(read(path), new RegExp(`alternates:\\s*\\{\\s*canonical:\\s*['"]${canonical}['"]`));
  }
  const thankYou = read('app/thank-you/page.tsx');
  assert.match(thankYou, /robots:\{index:false,follow:false\}/);
});

test('commercial source removes forbidden punctuation and decorative zero-padded labels', () => {
  for (const source of visibleProseSources()) {
    assert.doesNotMatch(source, /[—–]/);
    assert.doesNotMatch(source, /\\u201[34]/i);
  }
  assert.doesNotMatch(marketing, /service-number/);
  assert.doesNotMatch(marketing, />0[1-9]</);
});

test('conversion route and tracker contracts stay intact', () => {
  const form = read('components/LeadForm.tsx');
  const api = read('app/api/submit-lead/route.ts');
  const thankYou = read('app/thank-you/page.tsx');
  assert.match(form, /router\.push\('\/thank-you'\)/);
  assert.match(form, /window\.acrTracker\?\.trackLead/);
  assert.match(api, /ACR_LEAD_ENDPOINT/);
  assert.match(api, /readLimitedBody\(request, MAX_LEAD_BYTES\)/);
  assert.match(read('app/ingest/track/route.ts'), /readLimitedBody\(request, MAX_BODY_BYTES\)/);
  assert.match(read('lib/read-limited-body.ts'), /reader\.read\(\)/);
  assert.match(thankYou, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(layout, /\/ingest\/track/);
});

test('responsive chrome and card systems retain mobile access without horizontal overflow', () => {
  assert.match(globalCss, /\.sr-only\{/);
  assert.match(globalCss, /repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(globalCss, /\.home\.design-command \.hero\{grid-template-columns:1fr/);
  assert.match(globalCss, /\.site-header>\.parent-attribution\{display:flex/);
  assert.match(globalCss, /\.footer-brand-block \.parent-attribution\{display:flex/);
  assert.match(globalCss, /\.footer-brand-block \.parent-attribution\.inverse img\{filter:invert\(1\) brightness\(2\)/);
});
