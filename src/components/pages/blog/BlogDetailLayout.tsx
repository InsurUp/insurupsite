import { getAuthorInfo, getBackgroundColor, getCategoryName } from '@/utils/blog'
import '@/style/blogdetail.css'
interface BlogDetailData {
    _id: string
    title: string
    image: string
    link: string
    date: string
    detail_content?: string
    cta?: boolean
    cta_title?: string
    cta_text?: string
    cta_link?: string
    category?: string
    category_id?: { _id?: string; category?: string }
    author?: string
    author_id?: { link?: string; name_surname?: string }
    image_bg?: string
    color_id?: { code?: string }
}

interface BlogDetailLayoutProps {
    blog: BlogDetailData
}

function BlogDetailLayout({ blog }: BlogDetailLayoutProps) {
    const categoryName = getCategoryName(blog)
    const author = getAuthorInfo(blog)
    const bg = getBackgroundColor(blog)
    const shareUrl = `https://insurup.com/blog/${blog.link}`

    return (
        <section className="blog-detail-section">
            <div className="container">
                <div className="badge-box">
                    <i className="fa-solid fa-circle"></i>
                    {categoryName}
                </div>
                <h1 className="blog-detail-title">{blog.title}</h1>
                <div className="datail-img-box" style={bg ? { background: bg } : undefined}>
                    <img src={blog.image} className="img-fluid" alt={blog.title} />
                </div>
                <article
                    className="blog-detail-content"
                    dangerouslySetInnerHTML={{ __html: blog.detail_content || '' }}
                />
                {blog.cta ? (
                    <div className="cta-flex">
                        <div>
                            {blog.cta_title ? <span>{blog.cta_title}</span> : null}
                            {blog.cta_text ? (
                                <p dangerouslySetInnerHTML={{ __html: blog.cta_text }} />
                            ) : null}
                        </div>
                        <a href={blog.cta_link || '#'} className="btn btn-white">Bilgi Al</a>
                    </div>
                ) : null}

                <div className="detail-bottom">
                    <div className="blog-f">
                        {author ? (
                            <a href={`/yazarlar/${author.link}`} className="author-redirect">{author.name_surname}</a>
                        ) : null}
                        <i className="fa-solid fa-circle"></i>
                        <span>{blog.date}</span>
                    </div>
                    <div className="share-flex">
                        <span>Paylaş: </span>
                        <ul>
                            <li>
                                <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://www.facebook.com/share.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" id="copy-url-btn" className="copy-link" data-toggle="tooltip"
                                    data-placement="top" title="Bağlantıyı Kopyala">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailLayout