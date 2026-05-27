'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, sampleProducts } from '@/lib/seed';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const products = useMemo(
    () => (selectedCategory === 'All' ? sampleProducts : sampleProducts.filter((p) => p.category === selectedCategory)),
    [selectedCategory]
  );

  return (
    <main>
      <div className="bg-blue-700 text-white text-sm py-2 text-center">New arrivals every day • Secure instant delivery</div>
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="font-black text-blue-700 text-xl">BlueCart</div>
          <input className="flex-1 rounded-xl border border-slate-300 px-4 py-2" placeholder="Search digital products..." />
          <button className="rounded-xl bg-blue-600 text-white px-4 py-2">Login</button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-700 to-sky-500 rounded-3xl p-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold">Digital products for creators and teams</h1>
          <p className="mt-3 text-blue-50 max-w-2xl">Shop premium tools with transparent pricing and fast account delivery.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-4 flex gap-2 flex-wrap">
        {['All', ...categories].map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full text-sm border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-300 text-slate-700'}`}>
            {cat}
          </button>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </section>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-600">
          <p>© 2026 BlueCart Digital. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Telegram</a><a href="#">Email</a><a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
