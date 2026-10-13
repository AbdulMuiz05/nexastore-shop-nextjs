import { NextResponse } from 'next/server';
import { getProductById } from '@/lib/products';

export async function GET(_request, { params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return NextResponse.json({ error: 'Product not found', id }, { status: 404 });
  return NextResponse.json({ product }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } });
}
