// lib/tawk.ts
// Tawk API control functions (SSR safe, guarded, short retry)

const TAWK_EMBED_URL = 'https://tawk.to/chat/6777a952af5bfec1dbe615e7/1jf02o63o';

function getTawkAPI(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject('Not in browser');
    let waited = 0;
    const interval = 200;
    const maxWait = 5000;
    function check() {
      if ((window as any).Tawk_API) return resolve((window as any).Tawk_API);
      waited += interval;
      if (waited >= maxWait) return reject('Tawk_API not ready');
      setTimeout(check, interval);
    }
    check();
  });
}

export async function hideWidget() {
  if (typeof window === 'undefined') return;
  try {
    const api = await getTawkAPI();
    api.hideWidget();
  } catch {}
}

export async function showWidget() {
  if (typeof window === 'undefined') return;
  try {
    const api = await getTawkAPI();
    api.showWidget();
  } catch {}
}

export async function openChat() {
  if (typeof window === 'undefined') return;
  try {
    const api = await getTawkAPI();
    api.maximize();
  } catch {}
}

export async function setAttributes(data: Record<string, any>) {
  if (typeof window === 'undefined') return;
  try {
    const api = await getTawkAPI();
    api.setAttributes(data);
  } catch {}
}
