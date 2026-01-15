"use client";
// hooks/useTawk.ts
import { useEffect } from 'react';
import { hideWidget, showWidget, setAttributes } from '../lib/tawk';

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ['utm_source','utm_medium','utm_campaign','utm_term','utm_content']) {
    if (params.get(key)) utm[key] = params.get(key)!;
  }
  return utm;
}

export function useTawk(isHome = false) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Visitor attributes
    setAttributes({
      pathname: window.location.pathname,
      source: 'DXBMark Portfolio',
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      ...getUtmParams(),
    });
    // Hide widget by default
    hideWidget();
    if (!isHome) return;
    // Scroll logic for homepage only
    let revealed = false;
    function onScroll() {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (!revealed && scrolled >= 0.35) {
        showWidget();
        revealed = true;
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHome]);
}
