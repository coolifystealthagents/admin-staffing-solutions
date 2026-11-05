type TocItem = { id: string; label: string };

export function MobileToc({ items }: { items: TocItem[] }) {
  return (
    <details className="mobile-toc" aria-label="Article contents">
      <summary className="mobile-toc-toggle">
        <span>On this page</span>
        <span aria-hidden="true">Open</span>
      </summary>
      <nav id="mobile-toc-list" aria-label="Table of contents">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
