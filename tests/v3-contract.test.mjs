import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const chrome = read('components/SiteChrome.tsx');
const content = read('lib/content.ts');
const marketing = read('components/Marketing.tsx');
const contact = read('app/contact-us/page.tsx');
const services = read('app/services/[slug]/page.tsx');
const serviceIndex = read('app/services/page.tsx');
const layout = read('app/layout.tsx');
const nextConfig = read('next.config.mjs');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const globalCss = read('app/globals.css');

function visibleProseSources() {
  return [chrome, content, marketing, contact, services, serviceIndex, blog, research];
}

test('global chrome uses exact persistent primary navigation and both parent attributions', () => {
  for (const label of ['Home', 'Services', 'About', 'Blog', 'Research', 'Contact Us']) {
    assert.match(content, new RegExp(`label:\\s*'${label}'`));
  }
  const navBlock = content.match(/export const nav = \[([\s\S]*?)\];/)?.[1] || '';
  assert.equal((navBlock.match(/label:/g) || []).length, 6);
  assert.equal((chrome.match(/<ParentAttribution/g) || []).length, 2);
  assert.match(chrome, /<span>Powered by<\/span>/);
  assert.match(chrome, /alt="StealthAgents"/);
  assert.doesNotMatch(chrome, /TimedLeadModal/);
  assert.match(chrome, /aria-expanded/);
  assert.match(chrome, /aria-controls/);
  assert.match(chrome, /skip-link/);
});

test('approved StealthAgents review collection contains at least ten unique sourced records', () => {
  const path = join(root, 'content/stealth-agents-proof.json');
  assert.equal(existsSync(path), true);
  const proof = JSON.parse(readFileSync(path, 'utf8'));
  assert.ok(proof.reviews.length >= 10);
  assert.equal(new Set(proof.reviews.map((review) => review.quote)).size, proof.reviews.length);
  assert.ok(proof.reviews.every((review) => review.name && review.quote && review.sourceUrl === 'https://stealthagents.com/'));
});

test('official parent assets exist and Contact Us follows the gated conversion contract', () => {
  assert.equal(existsSync(join(root, 'public/brand/stealth-agents-logo-black.png')), true);
  assert.equal(existsSync(join(root, 'public/brand/stealth-agents-team-bacolod.webp')), true);
  assert.match(contact, /StealthAgents reviews/);
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /stealth-agents-logo-black\.png/);
  assert.match(contact, /stealth-agents-team-bacolod\.webp/);
  assert.doesNotMatch(contact, /<iframe/);
  assert.doesNotMatch(contact, /0\{index\s*\+\s*1\}/);
});

test('service index and each service detail use hero media and substantial operational sections', () => {
  assert.match(serviceIndex, /PageHero/);
  assert.match(services, /PageHero/);
  for (const heading of ['Who this role is for', 'Inputs and access', 'Deliverables', 'Quality controls', 'Decision boundaries', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
    assert.match(services, new RegExp(heading));
  }
});

test('all editorial details use shared hero media and complete sticky article navigation', () => {
  for (const source of [blog, research]) {
    assert.match(source, /PageHero/);
    assert.match(source, /ArticleNavigator/);
    assert.match(source, /imageFit="contain"/);
    assert.match(source, /imageAlt=\{/);
  }
  const navigator = read('components/ArticleNavigator.tsx');
  assert.match(navigator, /IntersectionObserver/);
  assert.match(navigator, /aria-current/);
  assert.match(navigator, /Related reading/);
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
  ];
  for (const [path, canonical] of routes) {
    assert.match(read(path), new RegExp(`alternates:\\{canonical:'${canonical}'\\}`));
  }
  const thankYou = read('app/thank-you/page.tsx');
  assert.match(thankYou, /robots:\{index:false,follow:false\}/);
});

test('commercial source removes forbidden punctuation and decorative zero-padded labels', () => {
  for (const source of visibleProseSources()) {
    assert.doesNotMatch(source, /[—–]/);
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
  assert.match(thankYou, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(layout, /\/ingest\/track/);
});

test('responsive chrome and card systems retain mobile access without horizontal overflow', () => {
  assert.match(globalCss, /\.sr-only\{/);
  assert.match(globalCss, /repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(globalCss, /\.home\.design-command \.hero\{grid-template-columns:1fr/);
  assert.match(globalCss, /\.site-header>\.parent-attribution\{display:flex/);
  assert.match(globalCss, /\.footer-brand-block \.parent-attribution\{display:flex/);
});
