import { Metadata } from "next";
import metadataConfig from "@/data/metadata.json";

interface PageMeta {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
}

interface SiteConfig {
    name: string;
    url: string;
    locale: string;
    defaultImage: string;
}

const site: SiteConfig = metadataConfig.site;
const pages: Record<string, PageMeta> = metadataConfig.pages;

/**
 * Sayfa yoluna göre metadata oluşturur
 * @param pathname - Sayfa yolu (örn: "/fiyatlandirma")
 * @param override - Üzerine yazılacak değerler (dinamik sayfalar için)
 */
export function getPageMetadata(pathname: string, override?: Partial<PageMeta>): Metadata {
    const pageMeta = pages[pathname] || pages["/"];
    const finalMeta = { ...pageMeta, ...override };

    const imageUrl = finalMeta.image || site.defaultImage;
    const fullImageUrl = imageUrl.startsWith("http") ? imageUrl : `${site.url}${imageUrl}`;

    return {
        title: finalMeta.title,
        description: finalMeta.description,
        keywords: finalMeta.keywords?.join(", "),
        authors: [{ name: site.name }],
        creator: site.name,
        publisher: site.name,
        metadataBase: new URL(site.url),
        alternates: {
            canonical: `${site.url}${pathname}`,
        },
        openGraph: {
            type: "website",
            locale: site.locale,
            url: `${site.url}${pathname}`,
            siteName: site.name,
            title: finalMeta.title,
            description: finalMeta.description,
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: finalMeta.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: finalMeta.title,
            description: finalMeta.description,
            images: [fullImageUrl],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

/**
 * Blog detay sayfası için metadata oluşturur
 */
export function getBlogMetadata(blog: {
    title: string;
    desc?: string;
    meta_title?: string;
    image?: string;
    link: string;
    author_id?: { name_surname?: string };
    date?: string;
}): Metadata {
    const title = blog.meta_title || blog.title;
    const description = blog.desc || `${blog.title} - InsurUp Blog`;
    const imageUrl = blog.image?.startsWith("http") ? blog.image : `${site.url}${blog.image}`;

    return {
        title: `${title} | InsurUp Blog`,
        description,
        authors: blog.author_id?.name_surname ? [{ name: blog.author_id.name_surname }] : [{ name: site.name }],
        creator: blog.author_id?.name_surname || site.name,
        publisher: site.name,
        metadataBase: new URL(site.url),
        alternates: {
            canonical: `${site.url}/blog/${blog.link}`,
        },
        openGraph: {
            type: "article",
            locale: site.locale,
            url: `${site.url}/blog/${blog.link}`,
            siteName: site.name,
            title,
            description,
            images: blog.image ? [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ] : undefined,
            publishedTime: blog.date,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: blog.image ? [imageUrl] : undefined,
        },
    };
}

/**
 * Yazar sayfası için metadata oluşturur
 */
export function getAuthorMetadata(author: {
    name_surname: string;
    desc?: string;
    image?: string;
    link: string;
}, blogCount: number): Metadata {
    const title = `${author.name_surname} - InsurUp Blog Yazarı`;
    // HTML taglerini temizle
    const cleanDesc = author.desc?.replace(/<[^>]*>/g, "").slice(0, 160) || `${author.name_surname} tarafından yazılan ${blogCount} blog yazısı`;
    const imageUrl = author.image?.startsWith("http") ? author.image : `${site.url}${author.image}`;

    return {
        title,
        description: cleanDesc,
        authors: [{ name: author.name_surname }],
        metadataBase: new URL(site.url),
        alternates: {
            canonical: `${site.url}/yazarlar/${author.link}`,
        },
        openGraph: {
            type: "profile",
            locale: site.locale,
            url: `${site.url}/yazarlar/${author.link}`,
            siteName: site.name,
            title,
            description: cleanDesc,
            images: author.image ? [
                {
                    url: imageUrl,
                    width: 400,
                    height: 400,
                    alt: author.name_surname,
                },
            ] : undefined,
        },
        twitter: {
            card: "summary",
            title,
            description: cleanDesc,
            images: author.image ? [imageUrl] : undefined,
        },
    };
}

export { site, pages };

