import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import { getProductById, getProducts } from '@/lib/products';
import { formatPrice } from '@/lib/format';

export const revalidate = 60;

export async function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product not found' };
  return { title: product.name, description: product.shortDescription, openGraph: { images: [product.image] } };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  const related = getProducts().filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  const generatedAt = new Date();

  return <>
    <section className="product-detail-section container"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/products">Shop</Link><span>/</span><span>{product.name}</span></div><div className="detail-layout"><div className="detail-image-wrap"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 800px) 100vw, 55vw" className="detail-image" /><span className="detail-image-label">NEXA OBJECT NO. {String(getProducts().findIndex((item) => item.id === product.id) + 1).padStart(2, '0')}</span></div><div className="detail-copy"><span className="eyebrow">{product.category.toUpperCase()} / EVERYDAY EDIT</span><h1>{product.name}<em>.</em></h1><div className="detail-rating"><span>★ {product.rating.toFixed(1)}</span><span>Thoughtfully selected</span></div><p className="detail-price">{formatPrice(product.price)}</p><p className="detail-description">{product.description}</p><div className="detail-divider" /><div className="detail-spec"><span>Colour</span><strong>{product.color}</strong></div><div className="detail-spec"><span>Our take</span><strong>Useful by design</strong></div><Link href="/products" className="button button-dark detail-button">Back to the collection <span>↗</span></Link><p className="detail-footnote">A considered pick. No clutter, just good design.</p><p className="rendering-note">CATALOG PAGE · GENERATED {generatedAt.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' })} UTC</p><div className="detail-perks"><span>✳ Thoughtfully selected</span><span>↺ Easy everyday living</span></div></div></div></section>
    {related.length ? <section className="section container related-section"><div className="section-heading"><div><span className="eyebrow">IN THE SAME CORNER</span><h2>You might also <em>like.</em></h2></div><Link href="/products" className="underlined-link">Shop all <span>↗</span></Link></div><ProductGrid products={related} /></section> : null}
  </>;
}
