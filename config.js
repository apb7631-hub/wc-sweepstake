const SUPABASE_URL  = 'https://kvnrrdlvhdrrpogvfanq.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bnJyZGx2aGRycnBvZ3ZmYW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NDIwNzAsImV4cCI6MjA5NjQxODA3MH0.Z-yhcb4s2lW0S8MkDYqncmi_-NT6SkugH1lP7jRtOYg';
const STRIPE_PK     = 'pk_test_51TfkHI1QLPCiZRc2MMLVFkVSaOKsw2qP21GNo87K93BA3k28dXT1fHfLLcgM01OB1pc3OEDoMaZ9Z3MjK1mAhk7p00ugQcZc4G';
const PAYMENT_LINK  = 'https://buy.stripe.com/test_dRm3cn7s9dXf9r252P7Re01';

const ALL_TEAMS = [
  "Brazil","Austria","Tunisia","Cape Verde",
  "Uruguay","USA","Bosnia-Herzegovina","Uzbekistan",
  "France","Australia","Iran","Panama",
  "Argentina","Japan","Saudi Arabia","Jordan",
  "Mexico","South Korea","Czechia","Haiti",
  "England","Senegal","Paraguay","Qatar",
  "Portugal","Switzerland","Norway","South Africa",
  "Colombia","Canada","Algeria","Ghana",
  "Netherlands","Morocco","Turkey","Iraq",
  "Spain","Croatia","Egypt","Curaçao",
  "Belgium","Ivory Coast","Sweden","New Zealand",
  "Germany","Ecuador","Scotland","DR Congo"
];

function initSupabase() {
  return supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
}

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({length: 6}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}
