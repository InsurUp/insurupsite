import colorData from '@/data/color.json'

interface BlogAuthorRef {
    link: string
    name_surname: string
}

interface BlogCategoryRef {
    _id?: string
    category?: string
}

interface Blog {
    _id: string
    title: string
    image: string
    date: string
    link: string
    author_id?: BlogAuthorRef
    category?: string
    category_id?: BlogCategoryRef
    image_bg?: string // color id
    color_id?: { code?: string } // olası eski şema uyumu
}

interface BlogCardProps {
    blog: Blog
}

function resolveBgColor(blog: Blog): string | undefined {
    if (blog?.color_id?.code) return blog.color_id.code
    if (!blog?.image_bg) return undefined
    try {
        const colors = colorData as unknown as Array<{ _id: string; code: string }>
        const match = colors.find(c => c._id === blog.image_bg)
        return match?.code
    } catch {
        return undefined
    }
}

function BlogCard({ blog }: BlogCardProps) {
    const bg = resolveBgColor(blog)
    const categoryId = blog.category_id?._id || blog.category

    return (
        <div className="blog-card" data-id={categoryId}>
            <a href={`/blog/${blog.link}`} className="card-img" style={bg ? { backgroundColor: bg } : undefined}>
                <img src={blog.image} className="img-fluid w-100" alt={`${blog.title} Görseli`} />
            </a>

            <a href={`/blog/${blog.link}`} className="blog-link">
                <i className="fa-solid fa-arrow-right first-icon"></i>
                <i className="fa-solid fa-arrow-right second-icon"></i>
            </a>

            <div className="ps-2">
                <div className="blog-f">
                    {blog.author_id ? (
                        <a href={`/yazarlar/${blog.author_id.link}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {blog.author_id.name_surname}
                        </a>
                    ) : null}
                    <i className="fa-solid fa-circle"></i>
                    <span>{blog.date}</span>
                </div>
                <a href={`/blog/${blog.link}`} className="text-decoration-none">
                    <h2 className="blog-card-title">{blog.title}</h2>
                </a>
            </div>
        </div>
    )
}

export default BlogCard