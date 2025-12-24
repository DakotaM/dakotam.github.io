-- Add IP address and session tracking columns
alter table public.page_views 
  add column if not exists ip_address text,
  add column if not exists session_id text,
  add column if not exists is_new_visitor boolean default false;

-- Create index for IP lookups
create index if not exists idx_page_views_ip_address on public.page_views(ip_address);
create index if not exists idx_page_views_session_id on public.page_views(session_id);

-- Create a function to check if this is a new visitor
create or replace function is_first_visit(p_visitor_id text, p_ip_address text)
returns boolean
language plpgsql
security definer
as $$
declare
  visit_count integer;
begin
  select count(*) into visit_count
  from public.page_views
  where visitor_id = p_visitor_id or ip_address = p_ip_address;
  
  return visit_count = 0;
end;
$$;
