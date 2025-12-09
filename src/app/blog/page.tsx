import BlogPageLayout from "@/components/pages/blog/BlogPageLayout";
import "@/style/blog.css";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/blog");

function BlogPage() {
    return <BlogPageLayout />;
}

export default BlogPage;
