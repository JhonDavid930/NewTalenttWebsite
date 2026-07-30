import { SitePage } from "@/components/site-page";
import { englishContent } from "@/content/site-content";
import { siteUrl } from "@/lib/site-url";

export default function HomePage() {
  return <SitePage content={englishContent} locale="en" siteUrl={siteUrl} />;
}
