/**
 * Base input.
 */
type Input = string | DivideConfig;

/**
 * Configuration object.
 */
interface DivideConfig {
  character?: string;
  width?: number | null;
  omitSource?: boolean;
}

/**
 * Returns a string of repeated characters for creating console divides.
 *
 * @param input - Input to determine length. Either an integer or a string whose length will be counted.
 * @param config - Object of {@link DivideConfig} config objects.
 * @returns string
 *
 * @example
 * Basic usage:
 * ```
 * divide('str')
 * // Returns '---'
 * ```
 */
export function divide(input: Input, config: DivideConfig): string {
  const settings = {
    character: '-',
    width: null,
    omitSource: false,
  };

  /** Reassign params if no string provided. */
  if (typeof input === 'object') {
    config = input;
    input = '';
  }

  /** Merge configs. */
  Object.assign(settings, config);

  const prefix = input && !settings.omitSource ? `${input}` : '';
  const len = (settings.width || input?.length) + prefix.length;
  if (prefix) {
    prefix.concat(prefix, '\n');
  }
  return prefix.padEnd(len, settings.character);
}
