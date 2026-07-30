const developmentSiteUrl = "http://localhost:3000";

export interface SiteUrlEnvironment {
  nodeEnv: string | undefined;
  siteUrl: string | undefined;
}

function normalizeSiteUrl(rawSiteUrl: string, isProduction: boolean): string {
  let parsedUrl: URL;

  try {
    parsedUrl = new URL(rawSiteUrl);
  } catch {
    throw new Error("SITE_URL must be a valid absolute URL.");
  }

  const hasUnexpectedParts =
    parsedUrl.username !== "" ||
    parsedUrl.password !== "" ||
    parsedUrl.pathname !== "/" ||
    parsedUrl.search !== "" ||
    parsedUrl.hash !== "";

  if (hasUnexpectedParts) {
    throw new Error("SITE_URL must contain only the origin, without a path, query or hash.");
  }

  if (isProduction && parsedUrl.protocol !== "https:") {
    throw new Error("SITE_URL must use HTTPS in production.");
  }

  return parsedUrl.origin;
}

export function resolveSiteUrl({ nodeEnv, siteUrl }: SiteUrlEnvironment): string {
  const isProduction = nodeEnv === "production";
  const configuredSiteUrl = siteUrl?.trim();

  if (!configuredSiteUrl) {
    if (isProduction) {
      throw new Error("SITE_URL is required for production builds.");
    }

    return developmentSiteUrl;
  }

  return normalizeSiteUrl(configuredSiteUrl, isProduction);
}
