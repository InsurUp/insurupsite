import blogData from '@/data/blog.json'
import { getAuthorInfo, getCategoryName, pickFeatured } from '@/utils/blog'

interface BlogCategoryRef {
    _id?: string
    category?: string
    _languageId?: number
    _createDate?: string
}

interface BlogAuthorRef {
    link: string
    name_surname: string
}

interface Blog {
    _id: string
    title: string
    image: string
    date: string
    link: string
    category?: string
    category_id?: BlogCategoryRef
    author?: string
    author_id?: BlogAuthorRef
    oncecikarilan_1?: boolean
    oncecikarilan_2?: boolean
    oncecikarilan_3?: boolean
}

interface BlogCardProps {
    blog: Blog
}

function BlogMeta({ blog }: { blog: Blog }) {
    const author = getAuthorInfo(blog)
    const hasAuthor = !!author?.link && !!author?.name_surname
    return (
        <div className="blog-f">
            {hasAuthor ? (
                <>
                    <a href={`/yazarlar/${author!.link}`}><span>{author!.name_surname}</span></a>
                    <i className="fa-solid fa-circle"></i>
                </>
            ) : null}
            <span>{blog.date}</span>
        </div>
    )
}

function BlogCardOne({ blog }: BlogCardProps) {
    return (
        <div className="blog-card blog-blue">
            <div className="badge-box">
                <i className="fa-solid fa-circle"></i>
                {getCategoryName(blog)}
            </div>
            <a href={`/blog/${blog.link}`} className="d-block">
                <img src={blog.image} className="img-fluid w-100" alt={`${blog.title} Görseli`} />
            </a>

            <BlogMeta blog={blog} />

            <div className="sub-flex">
                <a href={`/blog/${blog.link}`}>
                    <h2 className="blog-card-title">
                        {blog.title}
                    </h2>
                </a>
                <a href={`/blog/${blog.link}`} className="blog-link">
                    <i className="fa-solid fa-arrow-right first-icon"></i>
                    <i className="fa-solid fa-arrow-right second-icon"></i>
                </a>
            </div>
        </div>
    )
}

function BlogCardTwo({ blog }: BlogCardProps) {
    return (
        <div className="blog-card blog-dark">
            <a href={`/blog/${blog.link}`} className="blog-link">
                <i className="fa-solid fa-arrow-right first-icon"></i>
                <i className="fa-solid fa-arrow-right second-icon"></i>
            </a>
            <img src="/shape-dark.svg" className="shape-dark" alt="" />
            <div className="badge-box">
                <i className="fa-solid fa-circle"></i>
                {getCategoryName(blog)}
            </div>
            <div style={{ position: "relative" }}>
                <BlogMeta blog={blog} />
                <a href={`/blog/${blog.link}`}>
                    <h2 className="blog-card-title">
                        {blog.title}
                    </h2>
                </a>
            </div>
        </div>
    )
}

function BlogCardThree({ blog }: BlogCardProps) {
    return (
        <div className="blog-card blog-light mt-lg-4 mt-sm-0 mt-4">
            <img src="/shape-bg.png" className="shape-light" alt="" />
            <div className="badge-box">
                <i className="fa-solid fa-circle"></i>
                {getCategoryName(blog)}
            </div>
            <div>
                <BlogMeta blog={blog} />
                <div className="sub-flex">
                    <a href={`/blog/${blog.link}`} className=" position-relative">
                        <h2 className="blog-card-title">
                            {blog.title}
                        </h2>
                    </a>
                    <a href={`/blog/${blog.link}`} className="blog-link position-relative">
                        <i className="fa-solid fa-arrow-right first-icon"></i>
                        <i className="fa-solid fa-arrow-right second-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

function SuggestBlogs() {
    const blogs = (blogData as unknown as Blog[]) || []
    const [b1, b2, b3] = pickFeatured(blogs)

    if (!b1 && !b2 && !b3) return null

    return (
        <section>
            <div className="container">
                <h1>Bloglar</h1>
                <div className="recommended-blog-flex">
                    {b1 ? <BlogCardOne blog={b1} /> : null}
                    <div className="d-lg-block d-sm-flex gap-3">
                        {b2 ? <BlogCardTwo blog={b2} /> : null}
                        {b3 ? <BlogCardThree blog={b3} /> : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuggestBlogs