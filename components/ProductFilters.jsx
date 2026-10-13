'use client';

import { useMemo, useState } from 'react';
import ProductGrid from '@/components/ProductGrid';

export default function ProductFilters({ products, categories, initialCategory = 'All' }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesQuery = !normalizedQuery || `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase().includes(normalizedQuery);
      const matchesCategory = category === 'All' || product.category === category;
      return matchesQuery && matchesCategory;
    });
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [products, query, category, sort]);

  function clearFilters() {
    setQuery('');
    setCategory('All');
    setSort('featured');
  }

  return (
    <>
      <div className="filter-panel">
        <label className="search-field rounded-sm transition-shadow duration-200 focus-within:ring-2 focus-within:ring-emerald-800 focus-within:ring-offset-2"><span aria-hidden="true">⌕</span><span className="sr-only">Search products</span><input type="search" autoComplete="off" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your next favourite…" /></label>
        <label className="select-field rounded-sm transition-shadow duration-200 focus-within:ring-2 focus-within:ring-emerald-800 focus-within:ring-offset-2"><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item} value={item}>{item === 'All' ? 'All categories' : item}</option>)}</select></label>
        <label className="select-field rounded-sm transition-shadow duration-200 focus-within:ring-2 focus-within:ring-emerald-800 focus-within:ring-offset-2"><span className="sr-only">Sort products</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select></label>
        <button className="text-button rounded-sm px-3 py-2 transition-colors duration-200 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-emerald-800" type="button" onClick={clearFilters}>Clear all</button>
      </div>
      <div className="results-row" aria-live="polite" aria-atomic="true"><p><strong>{filtered.length}</strong> thoughtful finds</p><p>Made to fit your everyday.</p></div>
      <ProductGrid products={filtered} />
    </>
  );
}
