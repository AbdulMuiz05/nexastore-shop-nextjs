import ProductCard from '@/components/ProductCard';

export default function ProductGrid({ products, priorityFirst = false }) {
  if (!products.length) return <div className="empty-state"><span className="empty-icon">⌕</span><h3>No products found</h3><p>Try a different search or clear your filters to see everything.</p></div>;
  return <div className="product-grid">{products.map((product, index) => <ProductCard key={product.id} product={product} priority={priorityFirst && index === 0} />)}</div>;
}
