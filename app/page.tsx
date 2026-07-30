import { SitePage } from "@/components/site-page";
import { englishContent } from "@/content/site-content";

export default function HomePage() {
  return <SitePage content={englishContent} locale="en" />;
}
