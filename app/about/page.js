import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our story',
  description: 'Learn about the small philosophy behind NexaStore.'
};

export default function AboutPage() {
  return <section className="about-page container"><div className="about-hero"><span className="eyebrow">A SMALL INTRODUCTION</span><h1>Less noise.<br /><em>More meaning.</em></h1><p>NexaStore is a little corner for everyday objects that do their job beautifully — without asking for too much attention.</p></div><div className="about-image"><Image src="/images/promo.svg" alt="Thoughtfully arranged everyday objects in a quiet studio" fill priority sizes="90vw" /></div><div className="about-columns"><div><span className="eyebrow">WHAT WE BELIEVE</span><h2>Good design should feel <em>natural.</em></h2></div><div><p>We think the objects around us shape the rhythm of our days. The lamp that makes evenings softer. The desk mat that makes a workspace feel like yours. The bottle that comes along for the ride.</p><p>Our collection is a practice in paying attention: useful details, lasting forms, and things that feel good to reach for again and again.</p><Link href="/products" className="button button-dark">Explore the collection <span>↗</span></Link></div></div><div className="about-values"><div><span>01</span><h3>Choose with care</h3><p>Everyday essentials, considered from the start.</p></div><div><span>02</span><h3>Keep it useful</h3><p>Good looks matter. So does doing the job well.</p></div><div><span>03</span><h3>Make it last</h3><p>Fewer impulse buys. More long-time favourites.</p></div></div></section>;
}
