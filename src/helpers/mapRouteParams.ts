import type { Route } from '@enums';

/**
 * @param route route of format /abc/:some-param/123
 * @param paramValues object with values to map to params
 * @returns route with updated params
 * */
export const mapRouteParams = (
  route: string | Route,
  paramValues: Record<string, string | number>,
): string => {
  let parsedRoute = route;

  Object.entries(paramValues).map(([key, value]) => {
    parsedRoute = parsedRoute.replace(`:${key}`, String(value));
  });

  return parsedRoute;
};
