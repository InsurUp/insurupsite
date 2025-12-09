import AllBlogs from './sections/AllBlogs'
import SuggestBlogs from './sections/SuggestBlogs'
function BlogPageLayout() {
    return (
        <main>
            <SuggestBlogs />
            <AllBlogs />
        </main>
    )
}

export default BlogPageLayout