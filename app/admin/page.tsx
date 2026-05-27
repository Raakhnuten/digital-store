import { sampleProducts } from '@/lib/seed';

export default function AdminDashboardPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
      <p className="text-sm text-slate-500 mt-1">Login required: protect this route with Supabase middleware in production.</p>

      <section className="mt-6 bg-white rounded-2xl p-5 shadow">
        <h2 className="text-xl font-semibold">Product Manager</h2>
        <p className="text-sm text-slate-600 mb-4">Add / edit / delete products, upload images, set category, price, stock, and description.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleProducts.map((p) => (
                <tr key={p.id} className="border-b">
                  <td className="py-2">{p.name}</td><td>{p.category}</td><td>${p.price.toFixed(2)}</td><td>{p.stock}</td>
                  <td className="space-x-2"><button className="text-blue-600">Edit</button><button className="text-red-600">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 bg-white rounded-2xl p-5 shadow">
        <h2 className="text-xl font-semibold">Orders</h2>
        <p className="text-sm text-slate-600">Placeholder table for Stripe and manual orders (KHQR future support).</p>
      </section>
    </main>
  );
}
