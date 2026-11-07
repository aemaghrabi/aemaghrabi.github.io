// Screenshot galleries shown on the Projects page.
import type { ClientKey } from './clients';

export interface GalleryImage {
  src: string;
  caption: string;
  width: number;
  height: number;
  /** Still image used for thumbnails and cover cards (set for animated GIFs so they only load when viewed). */
  thumb?: string;
  /** True for animated GIFs; shown with an "Animated" label. */
  animated?: boolean;
}

export interface GalleryProject {
  id: string;
  client: ClientKey;
  title: string;
  description: string;
  tags: string[];
  images: GalleryImage[];
}

const img = (file: string, caption: string, width: number, height: number): GalleryImage => ({
  src: `/images/gallery/${file}`,
  caption,
  width,
  height,
});

const gif = (file: string, poster: string, caption: string, width: number, height: number): GalleryImage => ({
  ...img(file, caption, width, height),
  thumb: `/images/gallery/${poster}`,
  animated: true,
});

export const gallery: GalleryProject[] = [
  {
    id: 'intellija',
    client: 'iotech',
    title: 'Intellija IIoT and SCADA platform',
    description:
      'Operator dashboards for artificial lift curves (ESP, gas lift and rod pump), ISA 18.2 alarm handling and asset monitoring on live MQTT data.',
    tags: ['TypeScript', 'Java', 'Node.js', 'Angular', 'MQTT', 'Quarkus', 'Spring Boot', 'Highcharts', 'D3.js', 'Webhooks', 'Azure'],
    images: [
      img('intellija-esp-curves.jpg', 'ESP pump performance curves', 1600, 900),
      img('intellija-gls-curves.jpg', 'Gas lift operating envelope and hydrate curves', 1600, 900),
      img('intellija-srp-curves.jpg', 'Rod pump dyna cards and permissible loads', 1600, 900),
      img('intellija-alarms.jpg', 'ISA 18.2 alarm list', 1600, 900),
      img('intellija-alarm-detail.jpg', 'Alarm status and detail panel', 1600, 900),
      img('intellija-asset-gauge.jpg', 'Asset dashboard gauge', 1600, 900),
    ],
  },
  {
    id: 'findfill',
    client: 'findfill',
    title: 'FindFill healthcare staffing platform',
    description:
      'Operations dashboard plus facility, clinician and agency portals: job boards, scheduling, timecards, payments and budgeting.',
    tags: ['C#', '.NET', 'Bubble.io', 'Stripe', 'API integrations', 'Webhooks', 'Azure', 'Azure Functions', 'Azure Data Factory', 'PHP'],
    images: [
      img('findfill-dashboard.jpg', 'Operations dashboard', 1512, 702),
      img('findfill-job-board.jpg', 'Clinician job board', 1512, 702),
      img('findfill-schedule.jpg', 'Facility shift schedule', 1512, 702),
      img('findfill-payments.jpg', 'Facility payments', 1512, 702),
      img('findfill-budgeting.jpg', 'Facility budgeting', 1512, 702),
      img('findfill-timecards.jpg', 'Shift timecards', 1512, 702),
    ],
  },
  {
    id: 'sharpstat',
    client: 'iotech',
    title: 'SharpStat electrochemical console',
    description:
      'A web console that connects to a potentiostat over a serial interface, configures techniques like cyclic voltammetry, plots voltage and current live and exports CSV.',
    tags: ['C#', 'ASP.NET', 'MVC', 'Razor', 'Serial interface', 'JSON'],
    images: [
      gif('sharpstat-walkthrough.gif', 'sharpstat-walkthrough-poster.jpg', 'Full walkthrough: connect, configure and run a cyclic voltammetry scan', 800, 660),
      img('sharpstat-1-disconnected.jpg', '1. Device disconnected', 1200, 990),
      img('sharpstat-2-connected.jpg', '2. Device connected', 1200, 990),
      img('sharpstat-3-configured.jpg', '3. Technique configured', 1200, 990),
      img('sharpstat-4-running.jpg', '4. Acquisition running', 1200, 990),
      img('sharpstat-5-done.jpg', '5. Acquisition complete', 1200, 990),
    ],
  },
];
