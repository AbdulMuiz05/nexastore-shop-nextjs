import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="brand footer-brand"><span className="brand-mark">n.</span><span>Nexa<span className="brand-light">Store</span></span></Link>
          <p className="footer-copy">Good things, thoughtfully found.<br />A little less noise. A little more meaning.</p>
        </div>
        <div className="footer-links"><span className="footer-label">Explore</span><Link href="/products">Shop all</Link><Link href="/about">Our story</Link><Link href="/api/products">Product API ↗</Link></div>
        <div className="footer-note"><span className="footer-label">Made for everyday</span><p>Considered objects for better work, slower mornings, and the in-between.</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} NexaStore</span><span>Thoughtfully selected. Simply yours.</span></div>
    </footer>
  );
}
