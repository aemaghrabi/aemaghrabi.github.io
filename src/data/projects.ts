// Generated from the Design 3 canvas content. Edit freely.
import type { ClientKey } from './clients';

export interface Project {
  id: string;
  /** Client this project was built for; null for research. */
  client: ClientKey | null;
  /** Shown instead of a client when client is null. */
  source?: string;
  title: string;
  stat?: string;
  statLabel?: string;
  need: string;
  built: string;
  outcome: string;
  tags: string[];
}

export const projects: Record<string, Project> = {
  "geo": {
    "id": "geo",
    "client": "findfill",
    "title": "Geolocation verification service",
    "stat": "4 ms",
    "statLabel": "response time",
    "need": "Clinicians’ physical addresses had to be verified and shifts geofenced without slowing the platform down.",
    "built": "A proprietary .NET serverless service on Azure Functions for geolocation identification, address verification and geofencing.",
    "outcome": "Higher throughput, with responses down to 4 ms.",
    "tags": [
      ".NET",
      "Azure Functions",
      "Geofencing"
    ]
  },
  "oig": {
    "id": "oig",
    "client": "findfill",
    "title": "Automated HHS-OIG exclusion screening",
    "need": "Staff checked every clinician by hand on the HHS site, a compliance requirement for per-diem placement.",
    "built": "An integration that pulls the full exclusion list internally and screens new and existing clinicians on a recurring schedule.",
    "outcome": "A manual compliance task became an automated, repeatable check.",
    "tags": [
      "Compliance",
      "Scheduled jobs",
      "Integration"
    ]
  },
  "pay": {
    "id": "pay",
    "client": "findfill",
    "title": "Instant clinician payouts",
    "need": "Clinicians were paid through manual bank transfers after each shift.",
    "built": "A Branch API integration that pays out on shift approval, plus custom Bubble.io plugins for Stripe subscriptions and clinician payments.",
    "outcome": "Same-day payment straight to clinician wallets or bank accounts.",
    "tags": [
      "Branch API",
      "Stripe",
      "Bubble.io"
    ]
  },
  "bg": {
    "id": "bg",
    "client": "findfill",
    "title": "Self-serve background checks",
    "need": "Background check orders waited on manual activation by staff.",
    "built": "A Simply Verified integration where clinicians order and pay for their own checks.",
    "outcome": "No activation bottleneck, and faster profile approval.",
    "tags": [
      "Simply Verified",
      "Payments"
    ]
  },
  "hook": {
    "id": "hook",
    "client": "findfill",
    "title": "Secure webhook pipelines",
    "need": "Payment, compliance and credentialing systems all push events into the platform.",
    "built": "Webhook pipelines with HMAC signature validation and OAuth 2.0 client-credentials integrations.",
    "outcome": "Every third-party endpoint is verified before it touches business data.",
    "tags": [
      "HMAC",
      "OAuth 2.0",
      "Webhooks"
    ]
  },
  "jobs": {
    "id": "jobs",
    "client": "nfta",
    "title": "Travel nursing job board",
    "stat": "2,000+",
    "statLabel": "live postings, refreshed every 5 minutes",
    "need": "The agency needed a public job board that stays in sync with its job feed.",
    "built": "A WordPress job board with custom PHP plugins, ingesting postings through the Jobrobotix API.",
    "outcome": "2,000+ live postings refreshed every 5 minutes.",
    "tags": [
      "WordPress",
      "PHP",
      "Jobrobotix API"
    ]
  },
  "vms": {
    "id": "vms",
    "client": "nfta",
    "title": "Symplr VMS integration",
    "need": "Agency systems and facility-side workforce management did not talk to each other.",
    "built": "A bidirectional integration with Symplr’s contingent talent management VMS.",
    "outcome": "Data now flows both ways between the agency and its facilities.",
    "tags": [
      "Symplr VMS",
      "Bidirectional sync"
    ]
  },
  "azure": {
    "id": "azure",
    "client": "nfta",
    "title": "Azure data infrastructure",
    "need": "Production staffing workflows needed reliable event processing and data pipelines.",
    "built": "Azure Data Factory for orchestration, .NET Azure Functions for event-driven processing and Storage Accounts for persistence. I supervised deployments and service health.",
    "outcome": "Monitored uptime across environments for the agency’s production systems.",
    "tags": [
      "Data Factory",
      "Azure Functions",
      "Storage"
    ]
  },
  "wtx": {
    "id": "wtx",
    "client": "iotech",
    "title": "Industrial wireless transmitter",
    "stat": "7 years",
    "statLabel": "battery runtime",
    "need": "Field measurements had to reach the platform wirelessly, without mains power, from inside an explosion-proof enclosure.",
    "built": "A battery-powered Zigbee wireless transmitter, with custom antenna assemblies that integrate with an Ex d enclosure while keeping its flameproof barrier intact.",
    "outcome": "Wireless field data on a battery runtime of 7 years.",
    "tags": [
      "Zigbee",
      "Battery powered",
      "Ex d",
      "RF"
    ]
  },
  "zig": {
    "id": "zig",
    "client": "iotech",
    "title": "Zigbee gateway",
    "need": "Remote oil and gas field operations needed reliable long-range telemetry and real-time data.",
    "built": "Hardware for a custom Zigbee gateway: schematics and multi-layer PCB layouts optimised for signal integrity and power efficiency in harsh industrial environments.",
    "outcome": "Reliable long-range telemetry and real-time data ingestion across remote oil and gas field operations.",
    "tags": [
      "Zigbee",
      "Multi-layer PCB",
      "Gateway"
    ]
  },
  "inst": {
    "id": "inst",
    "client": "iotech",
    "title": "Industrial instrumentation prototypes",
    "stat": "4–20 mA",
    "statLabel": "RS-485 and Modbus interfacing",
    "need": "New field instruments had to interface with existing industrial signals and protocols.",
    "built": "Prototypes covering sensor integration and signal conditioning, 4–20 mA, RS-485 and Modbus interfacing, component selection and BOM development.",
    "outcome": "Functional prototypes, validated through bring-up and bench testing with firmware and manufacturing partners.",
    "tags": [
      "4–20 mA",
      "RS-485",
      "Modbus",
      "BOM"
    ]
  },
  "node": {
    "id": "node",
    "client": "iotech",
    "title": "Node.js IIoT gateway",
    "need": "Traditional C-based embedded systems were slow to change for non-critical applications.",
    "built": "IoTech’s first IIoT gateway on Node.js and Angular, including a Modbus port to the Node.js runtime.",
    "outcome": "The proof of concept was adopted internally as a standard approach.",
    "tags": [
      "Node.js",
      "Angular",
      "Modbus",
      "MQTT"
    ]
  },
  "scada": {
    "id": "scada",
    "client": "iotech",
    "title": "Intellija SCADA frontend MVP",
    "stat": "",
    "statLabel": "Angular frontend on PrimeNG",
    "need": "IoTech’s SCADA platform needed its first operator interface.",
    "built": "An Angular and TypeScript frontend on a customised PrimeNG library, an ISA 18.2 alarm UI on ag-grid, Gridstack dashboards with Chart.js and Highcharts charts, and Protobuf decoders for live MQTT data.",
    "outcome": "An MVP that consumes live MQTT data in the browser.",
    "tags": [
      "TypeScript",
      "Angular",
      "PrimeNG",
      "MQTT",
      "Protobuf",
      "ISA 18.2"
    ]
  },
  "spb": {
    "id": "spb",
    "client": "iotech",
    "title": "Sparkplug B migration",
    "need": "Backend services had to align with IIoT standards for MQTT device communication.",
    "built": "Contributed to migrating Java services to Sparkplug B with Protobuf serialization.",
    "outcome": "The platform speaks the industry-standard MQTT payload format.",
    "tags": [
      "Sparkplug B",
      "Protobuf",
      "Java"
    ]
  },
  "cicd": {
    "id": "cicd",
    "client": "iotech",
    "title": "Cross-platform CI/CD for ARM",
    "need": "Node.js packages broke when builds moved from x86 to ARM devices.",
    "built": "CI/CD scripts for cross-platform builds and artifact deployment, using QEMU to resolve the architecture mismatches.",
    "outcome": "Repeatable builds and deployments for ARM gateways.",
    "tags": [
      "CI/CD",
      "QEMU",
      "ARM"
    ]
  },
  "search": {
    "id": "search",
    "client": "search",
    "title": "Search engine API and proof of concept",
    "need": "A new search engine needed results backed by third-party business data.",
    "built": "The backend API in ASP.NET Core MVC, third-party business-data integrations, the first SQL Server proof of concept and an Angular landing page.",
    "outcome": "A working proof of concept for the search engine.",
    "tags": [
      "ASP.NET Core",
      "SQL Server",
      "Angular"
    ]
  },
  "rf": {
    "id": "rf",
    "client": null,
    "source": "Published research",
    "title": "Antenna array for Wi-Fi energy harvesting",
    "need": "Harvesting usable energy from ambient Wi-Fi signals.",
    "built": "Designed a circular concentric microstrip patch antenna array for the Wi-Fi band.",
    "outcome": "Published as “Design of a Circular Concentric Microstrip Patch Antenna Array for Wi-Fi Band Energy Harvesting”.",
    "tags": [
      "RF",
      "Antenna design",
      "Research"
    ]
  },
};
