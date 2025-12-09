import AuthorPageLayout from "@/components/pages/blog/AuthorPageLayout";
import { getAuthorMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import authorsData from "@/data/author.json";
import blogsData from "@/data/blog.json";
import { Author, Blog } from "@/types/blog";

const authors = authorsData as unknown as Author[];
const blogs = blogsData as unknown as Blog[];

function getAuthorBySlug(slug: string): Author | undefined {
    return authors.find((a) => a.link === slug);
}

function getAuthorBlogCount(authorId: string): number {
    return blogs.filter((b) => b.author === authorId || b.author_id?._id === authorId).length;
}

// Statik parametreler
export async function generateStaticParams() {
    return authors.map((author) => ({
        slug: author.link,
    }));
}

// Dinamik metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const author = getAuthorBySlug(slug);

    if (!author) {
        return {
            title: "Yazar Bulunamadı | InsurUp",
            description: "Aradığınız yazar bulunamadı.",
        };
    }

    const blogCount = getAuthorBlogCount(author._id);
    return getAuthorMetadata(author, blogCount);
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <AuthorPageLayout slug={slug} />;
}
