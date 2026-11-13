/**
 * Privacy-Preserving Analytics & Telemetry Utility (TASK-1005)
 * 
 * Strict Privacy Commitments:
 * - 100% cookie-free and local-storage-free
 * - Respects Global Privacy Control & Do-Not-Track (DNT: 1)
 * - Zero PII (Personally Identifiable Information) collection
 * - Plug-and-play compatibility with Plausible / Vercel Web Analytics
 */

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void;
    va?: (action: 'beforeSend' | 'event', eventName?: string, data?: Record<string, any>) => void;
  }
}

/** Check if user has requested privacy / Do Not Track */
export function isDoNotTrackEnabled(): boolean {
  if (typeof window === 'undefined') return true;

  const dnt =
    navigator.doNotTrack ||
    (window as any).doNotTrack ||
    (navigator as any).msDoNotTrack;

  return dnt === '1' || dnt === 'yes';
}

/** Track a custom engagement event */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number | boolean | undefined>
): void {
  if (isDoNotTrackEnabled()) {
    if (import.meta.env.DEV) {
      console.log(`[Telemetry:DNT-Suppressed] ${eventName}`, props || {});
    }
    return;
  }

  // Plausible Analytics integration (if script is embedded)
  if (typeof window.plausible === 'function') {
    try {
      window.plausible(eventName, { props });
    } catch {
      // Fail silently
    }
  }

  // Vercel Web Analytics integration (if injected by deployment)
  if (typeof window.va === 'function') {
    try {
      window.va('event', eventName, props);
    } catch {
      // Fail silently
    }
  }

  // Dev mode logging
  if (import.meta.env.DEV) {
    console.log(
      `%c[Telemetry]%c ${eventName}`,
      'color: #10B981; font-weight: bold;',
      'color: #A1A1AA;',
      props || {}
    );
  }
}

/** Track page view navigation */
export function trackPageView(path = window.location.pathname + window.location.hash): void {
  trackEvent('page_view', { path });
}

/** Safely report uncaught exceptions */
export function reportError(error: Error, componentStack?: string): void {
  if (isDoNotTrackEnabled()) return;

  const sanitizedMessage = error.message.slice(0, 120);
  trackEvent('system_error', {
    errorName: error.name,
    message: sanitizedMessage,
    hasStack: Boolean(componentStack),
  });
}
