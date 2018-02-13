/** 
 * Escapes HTML tags.
 * @param html HTML contents.
 * @param tags Escape specified tags, default is 
 *  `<script><style><iframe><object><embed>`.
 */
export function escapeTags(html: string, tags?: string | string[]): string;

/** Escapes JavaScript hrefs. */
export function escapeScriptHrefs(html: string): string;

/** Escapes event attributes. */
export function escapeEventAttributes(html: string): string;