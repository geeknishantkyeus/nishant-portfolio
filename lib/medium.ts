import Parser from "rss-parser";

const MEDIUM_USERNAME = "yourusername"; // ← apna Medium username

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  isoDate: string;
  categories: string[];
};

export async function getMediumPosts(limit = 4): Promise<MediumPost[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      `https://medium.com/feed/@${MEDIUM_USERNAME}`
    );

    return feed.items.slice(0, limit).map((item) => ({
      title: item.title || "Untitled",
      link: item.link || "#",
      pubDate: item.pubDate || "",
      isoDate: item.isoDate || new Date().toISOString(),
      categories: item.categories || [],
    }));
  } catch (error) {
    console.error("Medium fetch error:", error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}