// Site-wide settings. Change these, then rebuild.

/**
 * Build-time switch for client names.
 * true:  real client names (FindFill, Nurse First Travel Agency, IoTech LLC).
 * false: every client is shown by its generic description instead.
 * Clients marked `alwaysGeneric` in src/data/clients.ts are generic either way.
 */
export const SHOW_CLIENT_NAMES = true;

export const SITE = {
  title: 'Ahmed El-Maghrabi',
  description:
    'Engineer turning business needs into products that work, from the cloud API down to the hardware.',
  copyright: 'Ahmed Elmaghrabi',
  location: 'Giza, Egypt',
};

export const CONTACT = {
  workEmail: 'ahmed@elmaghrabi.co',
  ieeeEmail: 'a.elmaghrabi@ieee.org',
  linkedin: 'https://www.linkedin.com/in/a-elmaghrabi/',
  github: 'https://github.com/aemaghrabi',
  /** Placeholder until the business number is ready. Set to a string like '+20 ...' to publish it. */
  phone: '+201019931705',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/clients/', label: 'Clients' },
  { href: '/projects/', label: 'Projects' },
  { href: '/contact/', label: 'Contact' },
] as const;
