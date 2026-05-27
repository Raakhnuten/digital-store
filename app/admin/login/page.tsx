export default function AdminLoginPage() {
  return (
    <main className="min-h-screen grid place-items-center p-4 bg-slate-100">
      <form className="w-full max-w-sm bg-white rounded-2xl shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold text-blue-700">Admin Login</h1>
        <input className="w-full rounded-lg border p-2" placeholder="Email" type="email" />
        <input className="w-full rounded-lg border p-2" placeholder="Password" type="password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign In</button>
        <p className="text-xs text-slate-500">Connect Supabase auth in production.</p>
      </form>
    </main>
  );
}
