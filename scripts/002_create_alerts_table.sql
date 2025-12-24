-- Create alerts table to track which alerts have been sent
create table if not exists public.alerts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  page_view_id uuid references public.page_views(id) on delete cascade,
  alert_type text not null,
  sent_successfully boolean default false
);

-- Create index for better query performance
create index if not exists idx_alerts_created_at on public.alerts(created_at desc);
create index if not exists idx_alerts_page_view_id on public.alerts(page_view_id);

-- Enable RLS
alter table public.alerts enable row level security;

-- Allow service role to manage alerts (no public access)
