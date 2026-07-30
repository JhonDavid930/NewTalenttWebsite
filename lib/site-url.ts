import "server-only";
import { resolveSiteUrl } from "./site-url-core";

export const siteUrl = resolveSiteUrl({
  nodeEnv: process.env.NODE_ENV,
  siteUrl: process.env.SITE_URL,
});
