import proof from '@/content/stealth-agents-proof.json';

export function ReviewMarquee({ compact = false }: { compact?: boolean }) {
  return <section className={`review-section${compact ? ' review-section-compact' : ''}`} aria-labelledby={compact ? 'contact-reviews-title' : 'reviews-title'}>
    <div className="section-heading review-heading">
      <p className="eyebrow">StealthAgents reviews</p>
      <h2 id={compact ? 'contact-reviews-title' : 'reviews-title'}>Trusted support, described by the teams using it.</h2>
      <p>First-party testimonials published by Stealth Agents. Individual results vary and these statements have not been independently verified by this site.</p>
    </div>
    <div className="review-window" tabIndex={0} aria-label="Moving StealthAgents reviews. Focus pauses the movement.">
      <div className="review-track">
        {[...proof.reviews, ...proof.reviews].map((review, index) => {
          const clone = index >= proof.reviews.length;
          return <figure className="review-card" key={`${review.name}-${index}`} aria-hidden={clone}>
            <div>
              <div className="review-stars" aria-label="Five stars">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
            </div>
            <figcaption>{review.name}<a href={review.sourceUrl} rel="noopener noreferrer" tabIndex={clone ? -1 : undefined}>Source: Stealth Agents</a></figcaption>
          </figure>;
        })}
      </div>
    </div>
  </section>;
}
