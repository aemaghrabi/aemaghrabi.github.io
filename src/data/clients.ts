// Generated from the Design 3 canvas content. Edit freely.

export interface Client {
  /** Real name, shown when SHOW_CLIENT_NAMES is true. */
  name: string;
  /** Generic description, always shown, and used as the name when SHOW_CLIENT_NAMES is false. */
  description: string;
  /** When true, the description is always used as the name (e.g. clients under NDA). */
  alwaysGeneric?: boolean;
  role: string;
  dates: string;
  where: string;
  facts: string[];
  need: string;
  delivered: string[];
  tags: string[];
}

export type ClientKey = "findfill" | "nfta" | "iotech" | "search" | "freelance";

export const clients: Record<ClientKey, Client> = {
  findfill: {
    "name": "FindFill",
    "description": "A healthcare staffing platform",
    "role": "Software Engineer",
    "dates": "Sep 2023 – Feb 2026",
    "where": "Remote",
    "facts": [
      "400+ clinicians",
      "86 facilities",
      "160+ travel HCPs"
    ],
    "need": "A per-diem staffing platform built on Bubble.io needed back-end services beyond what the platform could do on its own.",
    "delivered": [
      "A .NET serverless geolocation service on Azure Functions with 4 ms responses",
      "Automated HHS-OIG exclusion screening for every clinician",
      "Same-day clinician payouts through the Branch API",
      "Custom Bubble.io plugins for Stripe subscriptions and payments",
      "Self-serve background checks through Simply Verified",
      "Webhook pipelines with HMAC validation and OAuth 2.0"
    ],
    "tags": [
      ".NET",
      "Azure Functions",
      "Stripe",
      "Bubble.io",
      "Webhooks"
    ]
  },
  nfta: {
    "name": "Nurse First Travel Agency",
    "description": "A travel nursing agency",
    "role": "Software Engineer",
    "dates": "Sep 2020 – Feb 2026",
    "where": "Remote",
    "facts": [
      "2,000+ live job postings",
      "Refreshed every 5 minutes"
    ],
    "need": "A travel nursing agency needed its job feed, facility systems and production cloud to run reliably every day.",
    "delivered": [
      "A WordPress job board with custom PHP plugins on the Jobrobotix API",
      "A bidirectional integration with Symplr’s contingent talent VMS",
      "Azure Data Factory, Azure Functions and Storage pipelines",
      "Supervision of the production Azure infrastructure and its uptime",
      "Custom WordPress plugins where nothing off the shelf fit"
    ],
    "tags": [
      "Azure",
      "Data Factory",
      "PHP",
      "WordPress",
      "Symplr VMS"
    ]
  },
  iotech: {
    "name": "IoTech LLC",
    "description": "An oil and gas automation company",
    "role": "R&D Engineer, earlier Software Developer",
    "dates": "Feb 2025 – Present · Jan 2018 – Oct 2020",
    "where": "Giza, Egypt",
    "facts": [
      "Zigbee gateway hardware",
      "Intellija SCADA MVP"
    ],
    "need": "An industrial automation company needed field hardware, protocol bridges and the software that brings field data to operators.",
    "delivered": [
      "Hardware for a custom Zigbee gateway",
      "A battery-powered Zigbee wireless transmitter with a 7-year runtime",
      "Multi-layer PCB layouts, and antenna assemblies for an Ex d enclosure",
      "Industrial instrumentation prototypes: 4–20 mA, RS-485, Modbus",
      "The Intellija SCADA frontend MVP with an ISA 18.2 alarm UI",
      "IoTech’s first Node.js IIoT gateway, adopted as a standard approach",
      "Sparkplug B migration with Protobuf over MQTT"
    ],
    "tags": [
      "PCB",
      "Zigbee",
      "Modbus",
      "Angular",
      "Node.js",
      "MQTT"
    ]
  },
  search: {
    "name": "A business search engine startup",
    "description": "A business search engine startup",
    "alwaysGeneric": true,
    "role": "Web Developer",
    "dates": "Oct 2015 – Jun 2016",
    "where": "Remote",
    "facts": [
      "Backend API",
      "SQL Server proof of concept"
    ],
    "need": "A new search engine needed results backed by third-party business data.",
    "delivered": [
      "The backend API in ASP.NET Core MVC",
      "Third-party business-data integrations",
      "The initial SQL Server proof of concept and an Angular landing page"
    ],
    "tags": [
      "ASP.NET Core",
      "SQL Server",
      "Angular"
    ]
  },
  freelance: {
    "name": "Freelance clients",
    "description": "Freelance clients",
    "role": "Freelance C# Developer",
    "dates": "Jan 2011 – Jan 2020",
    "where": "Self-employed",
    "facts": [
      "9 years of C# delivery"
    ],
    "need": "Small businesses and individuals who needed custom software.",
    "delivered": [
      "C# software delivered for freelance clients"
    ],
    "tags": [
      "C#",
      ".NET"
    ]
  },
};
