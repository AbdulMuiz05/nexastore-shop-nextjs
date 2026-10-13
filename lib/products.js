import 'server-only';

export const products = [
  { id: 'orbit-watch', name: 'Orbit Smartwatch', category: 'Tech', price: 129.99, rating: 4.8, badge: 'BESTSELLER', image: '/images/orbit-watch.svg', shortDescription: 'A focused, everyday companion for movement and mindful moments.', description: 'A lightweight smartwatch with a crisp display, activity tracking, thoughtful notifications, and a battery designed to keep up with your week.', color: 'Mint' },
  { id: 'lumen-lamp', name: 'Lumen Desk Lamp', category: 'Home', price: 74.00, rating: 4.7, badge: 'DESIGN PICK', image: '/images/lumen-lamp.svg', shortDescription: 'Warm, adjustable light for your favourite corner.', description: 'A sculptural desk lamp with a soft glow, adjustable head, and minimal silhouette that makes late-night work feel a little calmer.', color: 'Sand' },
  { id: 'nimbus-mat', name: 'Nimbus Desk Mat', category: 'Workspace', price: 32.50, rating: 4.9, badge: 'STAFF PICK', image: '/images/nimbus-mat.svg', shortDescription: 'A soft landing for your keyboard, mouse, and ideas.', description: 'A premium, easy-care desk mat with a smooth surface, stitched edges, and a grippy base to bring order to your workspace.', color: 'Stone' },
  { id: 'echo-headphones', name: 'Echo Studio Headphones', category: 'Tech', price: 159.00, rating: 4.8, badge: 'NEW', image: '/images/echo-headphones.svg', shortDescription: 'Immersive sound, without the visual noise.', description: 'Comfort-first over-ear headphones with balanced audio, intuitive controls, and a foldable profile for commutes and deep-work sessions.', color: 'Lavender' },
  { id: 'arc-bottle', name: 'Arc Everyday Bottle', category: 'Lifestyle', price: 28.00, rating: 4.6, badge: '', image: '/images/arc-bottle.svg', shortDescription: 'Hydration made simple, from desk to trail.', description: 'A durable insulated bottle with a comfortable carry loop and a clean, understated finish that belongs wherever your day takes you.', color: 'Blue' },
  { id: 'form-speaker', name: 'Form Mini Speaker', category: 'Tech', price: 89.00, rating: 4.5, badge: '', image: '/images/form-speaker.svg', shortDescription: 'Room-filling sound in a small, considered form.', description: 'A compact wireless speaker with rich sound, tactile controls, and a fabric finish designed to fit naturally into your space.', color: 'Charcoal' },
  { id: 'terra-planter', name: 'Terra Ceramic Planter', category: 'Home', price: 39.00, rating: 4.7, badge: '', image: '/images/terra-planter.svg', shortDescription: 'A little more green, with a little more character.', description: 'A hand-finished ceramic planter with a subtle texture and a warm neutral glaze. A thoughtful home for your favourite small plant.', color: 'Clay' },
  { id: 'daily-tote', name: 'Daily Carry Tote', category: 'Lifestyle', price: 44.00, rating: 4.6, badge: '', image: '/images/daily-tote.svg', shortDescription: 'Room for the essentials, and whatever comes next.', description: 'A sturdy everyday tote with reinforced handles, a roomy main compartment, and an inside pocket for the small things you need close.', color: 'Olive' }
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id) ?? null;
}

export function getCategories() {
  return ['All', ...new Set(products.map((product) => product.category))];
}
