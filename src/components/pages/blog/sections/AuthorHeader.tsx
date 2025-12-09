import { Author } from "@/types/blog";

interface AuthorHeaderProps {
    author: Author;
    blogCount: number;
}

function AuthorHeader({ author, blogCount }: AuthorHeaderProps) {
    return (
        <section className="author-section">
            <div className="container">
                <h1>{author.name_surname}</h1>
                <div className="author-box">
                    <div className="author-flex">
                        <img
                            src={author.image}
                            alt={`${author.name_surname} Görseli`}
                        />
                        <div className="d-flex gap-3 align-items-center">
                            <span>{blogCount} Blog</span>
                            {author.linkedin && (
                                <a
                                    href={author.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <article
                    className="author-content"
                    dangerouslySetInnerHTML={{ __html: author.desc }}
                />
            </div>
        </section>
    );
}

export default AuthorHeader;

