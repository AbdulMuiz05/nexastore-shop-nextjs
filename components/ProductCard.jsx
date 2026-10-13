import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/format';

export default function ProductCard({ product, priority = false }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.id}`} className="product-image-wrap group rounded-sm focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2" aria-label={`View ${product.name}`}>
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 23vw" priority={priority} className="product-image transition duration-500 ease-out group-hover:brightness-[1.03]" />
        <span className="quick-view" aria-hidden="true">View item ↗</span>
      </Link>
      <div className="product-info">
        <div><p className="product-category">{product.category}</p><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3></div>
        <span className="product-price tabular-nums">{formatPrice(product.price)}</span>
      </div>
      <p className="product-description">{product.shortDescription}</p>
      <div className="product-meta"><span>★ {product.rating.toFixed(1)}</span><span>{product.color}</span></div>
    </article>
  );
}
