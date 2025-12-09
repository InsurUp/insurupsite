import AuthorHeader from "./sections/AuthorHeader";
import AuthorBlogs from "./sections/AuthorBlogs";
import { Author, Blog } from "@/types/blog";
import authorsData from "@/data/author.json";
import blogsData from "@/data/blog.json";
import "@/style/author.css"
interface AuthorPageLayoutProps {
    slug: string;
}

const authors = authorsData as unknown as Author[];
const blogs = blogsData as unknown as Blog[];

function getAuthorBySlug(slug: string): Author | undefined {
    return authors.find((a) => a.link === slug);
}

function getAuthorBlogs(authorId: string): Blog[] {
    return blogs.filter((b) => b.author === authorId || b.author_id?._id === authorId);
}

function AuthorPageLayout({ slug }: AuthorPageLayoutProps) {
    const author = getAuthorBySlug(slug);

    if (!author) {
        return (
            <main>
                <section className="author-section">
                    <div className="container">
                        <h1>Yazar Bulunamadı</h1>
                        <p>Aradığınız yazar bulunamadı.</p>
                    </div>
                </section>
            </main>
        );
    }

    const authorBlogs = getAuthorBlogs(author._id);

    return (
        <main>
            <AuthorHeader author={author} blogCount={authorBlogs.length} />
            <AuthorBlogs blogs={authorBlogs} />
        </main>
    );
}

export default AuthorPageLayout;

