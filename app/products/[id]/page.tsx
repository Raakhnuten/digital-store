import Link from 'next/link';
import { sampleProducts } from '@/lib/seed';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = sampleProducts.find((p) => p.id === params.id);

  if (!product) return <div className="p-8">Product not found.</div>;

  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8">
      <Link href="/" className="text-blue-600">← Back to shop</Link>
      <div className="mt-4 bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-6">
        <img src={product.image_url} alt={product.name} className="rounded-xl w-full h-72 object-cover" />
        <div>
          <p className="text-sm text-blue-700 font-semibold">{product.category}</p>
          <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
          <p className="mt-3 text-slate-600">{product.description}</p>
          <p className="mt-4 text-3xl font-bold text-blue-700">${product.price.toFixed(2)}</p>
          <p className="mt-1 text-sm">Stock status: {product.stock > 0 ? 'In stock' : 'Sold out'}</p>
          <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-slate-700">
            Purchase instructions: after checkout you will receive account details in your order dashboard.
          </div>
          <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold">Checkout with Stripe (placeholder)</button>
          <button className="mt-2 w-full rounded-xl border border-blue-600 py-3 text-blue-700 font-semibold">Manual Payment / KHQR (coming soon)</button>
        </div>
      </div>
    </main>
  );
}
