export function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  isCaseSensitive: boolean
): boolean {
  return properties.some((property) => {
    if (typeof query !== 'string') {
      return false;
    }
    if (query === '') {
      return true;
    }

    const value = object[property];

    if (typeof value === 'string' || typeof value === 'number') {
      if (isCaseSensitive) {
        return value.toString().includes(query);
      } else {
        const result = value
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase());
        return result;
      }
    }

    return false;
  });
}
