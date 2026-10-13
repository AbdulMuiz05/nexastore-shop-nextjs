import Image from 'next/image';
import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import CategoryLinks from '@/components/CategoryLinks';
import { getProducts } from '@/lib/products';

export const revalidate = 300;

export default function HomePage() {
  const products = getProducts();
  const featured = products.filter((product) => ['orbit-watch', 'lumen-lamp', 'nimbus-mat', 'echo-headphones'].includes(product.id));

  return (
    <>
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot" /> THE EVERYDAY EDIT — VOL. 01</span><h1>Good things.<br /><em>Thoughtfully</em> found.</h1><p>Considered objects for better work, slower mornings, and all the little moments in between.</p><div className="hero-actions"><Link className="button button-dark rounded-sm shadow-sm transition-all duration-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2" href="/products">Explore the collection <span aria-hidden="true">↗</span></Link><Link className="subtle-link" href="/about">A little about us <span aria-hidden="true">→</span></Link></div><div className="hero-proof"><div className="proof-avatars"><span>✳</span><span>◒</span><span>✦</span></div><div><strong>Small things, big difference.</strong><span>Curated with a little more care.</span></div></div></div>
          <div className="hero-art"><div className="hero-image-frame"><Image src="/images/hero.svg" alt="A considered collection of everyday objects arranged in a calm, sunlit studio" fill priority sizes="(max-width: 900px) 90vw, 50vw" className="hero-image" /></div><div className="hero-sticker"><span>THE GOOD<br />STUFF</span><span className="sticker-star">✳</span></div><div className="hero-caption"><span>01 — THE DAILY EDIT</span><span>Objects with intention</span></div></div>
        </div>
        <div className="hero-bottom-line"><div className="container hero-bottom-inner"><span>LESS, BUT BETTER.</span><span>DESIGNED FOR REAL LIFE</span><span>✳&nbsp; GOOD THINGS AHEAD</span></div></div>
      </section>

      <section className="section container" id="featured"><div className="section-heading"><div><span className="eyebrow">A FEW GOOD PICKS</span><h2>Meet your new <em>favourites.</em></h2></div><Link href="/products" className="underlined-link">Shop everything <span>↗</span></Link></div><ProductGrid products={featured} priorityFirst /></section>

      <section className="category-section" id="categories"><div className="container"><div className="section-heading"><div><span className="eyebrow">FIND YOUR KIND OF GOOD</span><h2>A place for every <em>little thing.</em></h2></div><p className="heading-note">A few thoughtfully chosen corners<br />to make your everyday feel better.</p></div><CategoryLinks /></div></section>

      <section className="manifesto-section"><div className="container manifesto-layout"><div className="manifesto-art"><Image src="/images/promo.svg" alt="A warm, minimal still life of everyday essentials" fill sizes="(max-width: 800px) 90vw, 45vw" /></div><div className="manifesto-copy"><span className="eyebrow">OUR LITTLE PHILOSOPHY</span><h2>Buy less.<br /><em>Love it longer.</em></h2><p>We believe the things you live with should earn their place. So we look for useful details, honest materials, and designs that feel right today and years from now.</p><Link href="/about" className="button button-outline rounded-sm transition-all duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2">Get to know us <span>↗</span></Link><div className="manifesto-signoff">A little more intention, every day. <span>✳</span></div></div></div></section>

      <section className="newsletter-section"><div className="container newsletter-inner"><span className="newsletter-star">✳</span><div><span className="eyebrow">A NOTE NOW AND THEN</span><h2>Good things are <em>worth sharing.</em></h2><p>New finds, small rituals, and ideas for a more considered everyday.</p></div><Link href="/products" className="button button-dark">Find your next favourite <span>↗</span></Link></div></section>
    </>
  );
}
