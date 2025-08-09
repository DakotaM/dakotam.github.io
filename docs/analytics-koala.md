# Koala Analytics

1. Set env vars:
   - NEXT_PUBLIC_KOALA_API_KEY=YOUR_PUBLIC_KEY
   - ENABLE_KOALA_PROXY=false (or true)
   - ENABLE_CONSENT_GATE=false (or true)

2. Deploy to Vercel. If proxy is enabled, rewrites are active automatically.

3. To identify users, call `koalaIdentify({...})` after login or signup.
