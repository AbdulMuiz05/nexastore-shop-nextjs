import Link from 'next/link';

const items = [
  { name: 'Technology', category: 'Tech', number: '01', symbol: '◉', className: 'category-tech' },
  { name: 'For your space', category: 'Home', number: '02', symbol: '⌂', className: 'category-home' },
  { name: 'The workspace', category: 'Workspace', number: '03', symbol: '▤', className: 'category-work' },
  { name: 'Everyday carry', category: 'Lifestyle', number: '04', symbol: '◇', className: 'category-life' }
];

export default function CategoryLinks() {
  return <div className="category-grid">{items.map((item) => <Link key={item.category} href={`/products?category=${encodeURIComponent(item.category)}`} className={`category-tile group rounded-sm focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 ${item.className}`}><span className="category-number">{item.number} / 04</span><span className="category-symbol" aria-hidden="true">{item.symbol}</span><span className="category-title">{item.name}</span><span className="category-arrow transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div>;
}
