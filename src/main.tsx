import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Analytics } from "@vercel/analytics/vue"
import { SpeedInsights } from "@vercel/speed-insights/vue"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsights />
    <Analytics />
    <App />
  </StrictMode>
);
