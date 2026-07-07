// app/blog/[slug]/page.js — updated with Article schema, CTA, phone, internal links
import "@/app/styles/blog.css";
import Link from "next/link";
import Script from "next/script";

export const revalidate = 300;

function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>?/gm, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&hellip;/g, "…")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .trim();
}

async function getPostBySlug(slug) {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE;
  if (!base) return null;

  const res = await fetch(
    `${base}/wp-json/wp/v2/posts?slug=${slug}&_fields=id,slug,title,content,excerpt,date,featured_media`,
    { next: { revalidate } }
  );

  if (!res.ok) return null;
  const posts = await res.json();
  if (!posts?.length) return null;
  return posts[0];
}

async function getMediaById(id) {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE;
  if (!base || !id) return null;

  try {
    const res = await fetch(`${base}/wp-json/wp/v2/media/${id}`, { next: { revalidate } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function getFeaturedImageFromMedia(media, postTitle = "") {
  const url =
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.full?.source_url ||
    media?.source_url ||
    "";
  const alt = media?.alt_text || stripHtml(postTitle) || "Blog featured image";
  return { url, alt };
}

async function getAllPostSlugs() {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE;
  if (!base) return [];

  const res = await fetch(`${base}/wp-json/wp/v2/posts?per_page=100&_fields=slug`, {
    next: { revalidate },
  });

  if (!res.ok) return [];
  const posts = await res.json();
  return (Array.isArray(posts) ? posts : [])
    .map((p) => p?.slug)
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Blog",
      description: "This blog post does not exist.",
    };
  }

  const title = stripHtml(post.title?.rendered || "Blog Post");
  const description =
    stripHtml(post.excerpt?.rendered || "").slice(0, 155) ||
    "Personal loan tips, debt payoff strategies, and financial guidance from Proper Path Loans.";

  return {
    title: `${title} | Proper Path Loans`,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="blog-page">
        <div className="blog-container blog-post-container">
          <header className="blog-post-header">
            <h1>Post not found</h1>
            <p>This blog post doesn't exist yet (or the slug is incorrect).</p>
            <div style={{ marginTop: "18px" }}>
              <Link href="/blog" className="blog-back-link">← Back to Blog</Link>
            </div>
          </header>
        </div>
      </main>
    );
  }

  const title = post.title?.rendered || "Blog Post";
  const dateLabel = post.date ? new Date(post.date).toLocaleDateString() : "";
  const dateISO = post.date ? new Date(post.date).toISOString() : "";
  const titleClean = stripHtml(title);

  const featuredId = post?.featured_media || 0;
  const media = featuredId ? await getMediaById(featuredId) : null;
  const { url: featuredUrl, alt: featuredAlt } = getFeaturedImageFromMedia(media, title);

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: titleClean,
    datePublished: dateISO,
    dateModified: dateISO,
    author: {
      "@type": "Organization",
      name: "Proper Path Loans",
      url: "https://properpathloans.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Proper Path Loans",
      url: "https://properpathloans.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://properpathloans.com/blog/${slug}`,
    },
    ...(featuredUrl && { image: featuredUrl }),
  };

  return (
    <main className="blog-page">

      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="blog-container blog-post-container">

        {/* Back link */}
        <div className="blog-post-back">
          <Link href="/blog" className="blog-back-link">← Back to Blog</Link>
        </div>

        {/* Featured Image */}
        {featuredUrl && (
          <div className="blog-post-featured">
            <img src={featuredUrl} alt={featuredAlt} loading="lazy" />
          </div>
        )}

        {/* Title */}
        <header className="blog-post-header">
          <div className="blog-post-meta">{dateLabel}</div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </header>

        {/* Content */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered || "" }}
        />

        {/* Internal Links */}
        <div className="blog-internal-links">
          <p className="blog-internal-links__label">Explore loan options</p>
          <div className="blog-internal-links__grid">
            <Link href="/personal-loans/texas/houston/debt-consolidation">Debt Consolidation Loans</Link>
            <Link href="/personal-loans/texas/houston/bad-credit">Bad Credit Loans</Link>
            <Link href="/personal-loans/texas/houston/emergency-loans">Emergency Loans</Link>
            <Link href="/personal-loans/texas/houston/home-improvement">Home Improvement Loans</Link>
            <Link href="/personal-loans">Browse All States</Link>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="blog-post-cta">
          <h3>Ready to check your rate?</h3>
          <p>Compare lenders in minutes — no impact to your credit score.</p>
          <Link href="/get-quote" className="blog-post-cta-btn">
            Check My Rate <span aria-hidden="true">→</span>
          </Link>
          <p className="blog-cta-phone">
            Prefer to talk? <a href="tel:18889008979">(888) 900-8979</a>
          </p>
        </div>

      </article>
    </main>
  );
}
