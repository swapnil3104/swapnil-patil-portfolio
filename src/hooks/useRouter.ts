import { useState, useEffect, useCallback } from 'react';
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

export function useRouter() {
  const [currentRoute, setCurrentRoute] = useState<RouteType>(getRouteFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      const newRoute = getRouteFromLocation();
      setCurrentRoute(newRoute);
      trackPageView();
      updatePageTitle(newRoute);
    };

    // Initial check
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    // If it's an external link or file
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

    // Push state
    window.history.pushState({}, '', targetPath + targetHash);

    // Broadcast popstate event so all useRouter hook instances across the app (Navbar, App, Footer) update synchronously
    window.dispatchEvent(new PopStateEvent('popstate'));

    const newRoute = getRouteFromLocation();
    setCurrentRoute(newRoute);
    trackPageView();
    updatePageTitle(newRoute);

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
