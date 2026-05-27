import Link from 'next/link';
import { Product } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  const soldOut = product.stock <= 0;

  return (
    <div className="rounded-2xl bg-white shadow-md ring-1 ring-slate-200 overflow-hidden">
      <img src={product.image_url} alt={product.name} className="h-40 w-full object-cover" />
      <div className="p-4 space-y-2">
        <div className="text-xs text-blue-700 font-semibold">{product.category}</div>
        <h3 className="font-semibold text-slate-900 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
        <div className="flex items-end gap-2">
          <p className="text-xl font-bold text-blue-700">${product.price.toFixed(2)}</p>
          {product.old_price ? <p className="text-sm text-slate-400 line-through">${product.old_price.toFixed(2)}</p> : null}
        </div>
        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${soldOut ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-700'}`}>
          {soldOut ? 'Sold Out' : 'In Stock'}
        </span>
        <Link href={`/products/${product.id}`} className={`block rounded-lg py-2 text-center text-sm font-semibold text-white ${soldOut ? 'bg-slate-400 pointer-events-none' : 'bg-blue-600 hover:bg-blue-700'}`}>
          Buy Now
        </Link>
      </div>
    </div>
  );
}
