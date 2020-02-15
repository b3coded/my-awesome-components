type Types =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function';

export function isTypeof(value: any, type: Types): boolean {
  return typeof value === type;
}
