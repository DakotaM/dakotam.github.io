-- Create page_views table to store all tracking data
create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  page_path text not null,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  visitor_id text not null,
  user_agent text,
  screen_width integer,
  screen_height integer,
  language text,
  timezone text
);

-- Create indexes for better query performance
create index if not exists idx_page_views_created_at on public.page_views(created_at desc);
create index if not exists idx_page_views_page_path on public.page_views(page_path);
create index if not exists idx_page_views_visitor_id on public.page_views(visitor_id);
create index if not exists idx_page_views_utm_source on public.page_views(utm_source);

-- Enable RLS (but allow public inserts for tracking)
alter table public.page_views enable row level security;

-- Allow anyone to insert page views (for tracking pixel)
create policy "allow_public_insert"
  on public.page_views for insert
  with check (true);

-- Only allow reading page views (no policy means no one can read without service role)
-- This keeps data private by default
