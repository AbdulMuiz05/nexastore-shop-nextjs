import ProductFilters from '@/components/ProductFilters';
import { getProducts, getCategories } from '@/lib/products';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Shop all products',
  description: 'Browse the NexaStore collection of thoughtfully selected everyday essentials.'
};

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const requestedCategory = typeof params?.category === 'string' ? params.category : 'All';
  const categories = getCategories();
  const initialCategory = categories.includes(requestedCategory) ? requestedCategory : 'All';
  const products = getProducts();

  return <section className="catalog-section container"><div className="catalog-intro"><span className="eyebrow"><span className="eyebrow-dot" /> THE FULL COLLECTION</span><h1>Find something <em>good.</em></h1><p>Useful, beautiful, everyday things — chosen with care and made to be lived with.</p><div className="catalog-note"><span>✳</span> A collection of {products.length} considered essentials</div></div><ProductFilters products={products} categories={categories} initialCategory={initialCategory} /></section>;
}
