import Link from 'next/link';

export default function NotFound() {
  return <section className="not-found container"><span className="not-found-mark">n.</span><span className="eyebrow">A LITTLE DETOUR</span><h1>This page took<br /><em>the scenic route.</em></h1><p>We couldn't find what you were looking for. It may have moved, or it may never have been here.</p><Link href="/products" className="button button-dark">Back to good things <span>↗</span></Link></section>;
}
