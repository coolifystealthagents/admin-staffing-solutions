import proof from '@/content/stealth-agents-proof.json';

export function ReviewMarquee() {
  return <section className="review-section" aria-labelledby="reviews-title">
    <div className="section-heading review-heading"><p className="eyebrow">StealthAgents reviews</p><h2 id="reviews-title">Trusted support, described by the teams using it.</h2><p>First-party testimonials published by Stealth Agents. Individual results vary and these statements have not been independently verified by this site.</p></div>
    <div className="review-window"><div className="review-track">{[...proof.reviews, ...proof.reviews].map((review, index) => <figure className="review-card" key={`${review.name}-${index}`} aria-hidden={index >= proof.reviews.length}><blockquote>“{review.quote}”</blockquote><figcaption>{review.name}<a href={review.sourceUrl} rel="noopener noreferrer">Source: Stealth Agents</a></figcaption></figure>)}</div></div>
  </section>;
}
