/**
 * Uploaded artwork lives on Lovable's asset storage, reachable only through a
 * Lovable-hosted domain. The site is also deployed elsewhere (the agency's own
 * domain), where the relative "/__l5e/assets-v1/..." path does not exist and
 * returns 404. Always point to the published Lovable domain so every host and
 * device receives the original image bytes.
 */
export const HOSTED_ASSET_ORIGIN = "https://agenciajpdigital.lovable.app";

export const hostedAsset = (path: string): string =>
  path.startsWith("/__l5e/") ? `${HOSTED_ASSET_ORIGIN}${path}` : path;
