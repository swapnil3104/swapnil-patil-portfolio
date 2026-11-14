import { useSyncExternalStore, useCallback } from 'react';
import { trackPageView } from '@/utils/analytics';

export type RouteType =
  | 'home'
  | 'work'
  | 'consultant'
  | 'ui-ux'
  | 'services'
  | 'about'
  | 'lab'
  | 'contact';

function getRouteFromLocation(): RouteType {
  if (typeof window === 'undefined') return 'home';

  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path === '/work' || path === '/work/' || hash === '#/work') {
    return 'work';
  }
  if (path === '/consultant' || path === '/consultant/' || hash === '#/consultant') {
    return 'consultant';
  }
  if (path === '/ui-ux' || path === '/ui-ux/' || path === '/uiux' || path === '/uiux/' || hash === '#/ui-ux' || hash === '#/uiux') {
    return 'ui-ux';
  }
  if (path === '/services' || path === '/services/' || hash === '#/services') {
    return 'services';
  }
  if (path === '/about' || path === '/about/' || hash === '#/about') {
    return 'about';
  }
  if (path === '/lab' || path === '/lab/' || hash === '#/lab') {
    return 'lab';
  }
  if (path === '/contact' || path === '/contact/' || hash === '#/contact') {
    return 'contact';
  }
  return 'home';
}

function updatePageTitle(route: RouteType) {
  if (typeof document === 'undefined') return;

  switch (route) {
    case 'work':
      document.title = 'Work: Engineering Case Studies with Numbers | Swapnil Patil';
      break;
    case 'consultant':
      document.title = 'Commercial Deployments & Consulting | Swapnil Patil';
      break;
    case 'ui-ux':
      document.title = 'Design Systems & UI/UX Architecture | Swapnil Patil';
      break;
    case 'services':
      document.title = 'Services & Technical Capabilities | Swapnil Patil';
      break;
    case 'about':
      document.title = 'About Swapnil Patil — AI/ML Engineer, Python Developer & Product Designer';
      break;
    case 'lab':
      document.title = 'Research Lab & Open-Source Experiments | Swapnil Patil';
      break;
    case 'contact':
      document.title = 'Contact & Project Inquiries | Swapnil Patil';
      break;
    case 'home':
    default:
      document.title = 'Swapnil Patil — AI/ML Engineer, Python Developer & Product Designer';
      break;
  }
}

// React 18+ Tearing-Free External Route Store
type RouteListener = () => void;
const listeners = new Set<RouteListener>();

function subscribe(callback: RouteListener) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

let cachedRoute: RouteType = typeof window !== 'undefined' ? getRouteFromLocation() : 'home';

function notify() {
  const nextRoute = getRouteFromLocation();
  if (nextRoute !== cachedRoute) {
    cachedRoute = nextRoute;
    updatePageTitle(cachedRoute);
    trackPageView();
  }
  listeners.forEach((listener) => listener());
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', notify);
  window.addEventListener('hashchange', notify);
  // Initial title setup
  updatePageTitle(cachedRoute);
}

function getSnapshot(): RouteType {
  // Sync if location changed out of band
  const current = getRouteFromLocation();
  if (current !== cachedRoute) {
    cachedRoute = current;
  }
  return cachedRoute;
}

function getServerSnapshot(): RouteType {
  return 'home';
}

export function useRouter() {
  const currentRoute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const navigate = useCallback((to: string) => {
    // External link or download
    if (to.startsWith('http') || to.endsWith('.pdf')) {
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    // Determine target
    let targetPath = to;
    let targetHash = '';
    if (to.includes('#') && !to.startsWith('#/')) {
      const parts = to.split('#');
      targetPath = parts[0] || window.location.pathname;
      targetHash = '#' + parts[1];
    }

    if (targetPath === '' || targetPath === '/') {
      targetPath = '/';
    }

    // Push state without page reload
    window.history.pushState({}, '', targetPath + targetHash);
    notify();

    if (targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return { currentRoute, navigate };
}
