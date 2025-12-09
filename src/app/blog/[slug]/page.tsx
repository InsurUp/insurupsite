import BlogDetailLayout from "@/components/pages/blog/BlogDetailLayout";
import { notFound } from "next/navigation";
import blogData from "@/data/blog.json";
import { getBlogMetadata } from "@/utils/metadata";
import { Metadata } from "next";

interface BlogDetail {
    _id: string;
    title: string;
    image: string;
    link: string;
    date: string;
    desc?: string;
    meta_title?: string;
    detail_content?: string;
    cta?: boolean;
    cta_title?: string;
    cta_text?: string;
    cta_link?: string;
    category?: string;
    category_id?: { _id?: string; category?: string };
    author?: string;
    author_id?: { _id?: string; link?: string; name_surname?: string };
    image_bg?: string;
    color_id?: { code?: string };
}

function normalizeLink(link: string): string {
    if (!link) return "";
    let s = link.trim().toLowerCase();
    if (s.startsWith("/")) s = s.slice(1);
    if (s.startsWith("blog/")) s = s.slice("blog/".length);
    if (s.endsWith("/")) s = s.slice(0, -1);
    return s;
}

function getBlogs(): BlogDetail[] {
    const raw = blogData as unknown as BlogDetail[];
    return Array.isArray(raw) ? raw : [];
}

// Statik parametreler
export async function generateStaticParams() {
    const blogs = getBlogs();
    return blogs
        .filter((blog) => blog.link)
        .map((blog) => ({
            slug: blog.link,
        }));
}

// Dinamik metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blogs = getBlogs();
    const normalizedSlug = normalizeLink(decodeURIComponent(slug));
    const blog = blogs.find((b) => normalizeLink(b.link || "") === normalizedSlug);

    if (!blog) {
        return {
            title: "Blog Bulunamadı | InsurUp",
            description: "Aradığınız blog yazısı bulunamadı.",
        };
    }

    return getBlogMetadata(blog);
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blogs = getBlogs();

    const normalizedSlug = normalizeLink(decodeURIComponent(slug));
    const blog = blogs.find((b) => normalizeLink(b.link || "") === normalizedSlug);

    if (!blog) return notFound();
    return <BlogDetailLayout blog={blog} />;
}
