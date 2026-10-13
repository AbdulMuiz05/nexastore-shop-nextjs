import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/products';

export const revalidate = 60;

export function GET() {
  return NextResponse.json({ count: getProducts().length, products: getProducts() }, {
    headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' }
  });
}
