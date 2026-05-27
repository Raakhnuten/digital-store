-- Users/Admins handled via Supabase Auth. Extend with profiles table.
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete set null,
  name text not null,
  description text,
  image_url text,
  price numeric(10,2) not null,
  old_price numeric(10,2),
  stock integer not null default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  product_id uuid references products(id),
  quantity integer default 1,
  total_amount numeric(10,2) not null,
  payment_method text not null default 'stripe_placeholder',
  payment_status text not null default 'pending',
  notes text,
  created_at timestamptz default now()
);

create table if not exists admin_users (
  user_id uuid primary key references auth.users(id),
  role text not null default 'admin',
  created_at timestamptz default now()
);

-- Seed categories
insert into categories (name, slug) values
('Design', 'design'),
('Streaming', 'streaming'),
('Music', 'music'),
('Software', 'software'),
('AI Tools', 'ai-tools')
on conflict (slug) do nothing;
