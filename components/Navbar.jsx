import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="NexaStore home">
          <span className="brand-mark">n.</span><span>Nexa<span className="brand-light">Store</span></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/products">Shop all</Link>
          <Link href="/#categories">Collections</Link>
          <Link href="/about">Our story</Link>
        </nav>
        <Link className="nav-cta rounded-sm transition-colors duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2" href="/products">Explore <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
