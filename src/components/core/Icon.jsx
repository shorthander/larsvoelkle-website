import React from "react";

const icons = {
  "arrow-right": <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  "chevron-down": <path d="m6 9 6 6 6-6"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  "circle-alert": <><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><path d="M12 16h.01"/></>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/></>,
  footprints: <><path d="M4 16c1.5-1.5 4-1 5 1s0 4-2 4-4.5-2.5-3-5Z"/><path d="M15 7c1.5-2 4-2 5-1s-.5 4-2.5 5-4-.5-2.5-4Z"/><path d="M6 11c-2-2-2-5-1-7"/><path d="M17 15c2 2 2 4 1 6"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></>,
  leaf: <><path d="M20 4C12 4 5 7 5 14c0 3 2 5 5 5 7 0 10-7 10-15Z"/><path d="M4 20c3-5 7-8 12-11"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
  close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  "map-pin": <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  mountain: <><path d="m3 20 6-11 4 6 2-3 6 8Z"/><path d="m7.5 12 1.5 1 1.5-1"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>,
  sunrise: <><path d="M3 18h18"/><path d="M5 22h14"/><path d="M12 2v4"/><path d="m4.9 8.9 2.8 2.8"/><path d="m19.1 8.9-2.8 2.8"/><path d="M7 18a5 5 0 0 1 10 0"/></>,
  "triangle-alert": <><path d="M10.3 3.7 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3Z"/></>,
};

/** Local inline icons: no request to an external icon CDN. */
export function Icon({name,size=20,strokeColor="currentColor",style,...rest}){
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:"inline-block",flex:"0 0 auto",...style}} {...rest}>
      {icons[name] || icons.info}
    </svg>
  );
}
