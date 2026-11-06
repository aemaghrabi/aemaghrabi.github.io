import { SHOW_CLIENT_NAMES } from '../config';
import { clients, type ClientKey } from '../data/clients';

/** The name to display for a client, honouring SHOW_CLIENT_NAMES and alwaysGeneric. */
export function clientName(key: ClientKey): string {
  const c = clients[key];
  return SHOW_CLIENT_NAMES && !c.alwaysGeneric ? c.name : c.description;
}

/** Label for a project's source line: client name, or the project's own source (e.g. research). */
export function projectSource(client: ClientKey | null, source?: string): string {
  return client ? clientName(client) : (source ?? '');
}
