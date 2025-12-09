import categoriesData from '@/data/category.json'
import authorsData from '@/data/author.json'
import colorData from '@/data/color.json'

export interface BlogMinimal {
    _id: string
    title?: string
    image?: string
    link?: string
    date?: string
    _createDate?: string
    category?: string
    category_id?: { _id?: string; category?: string }
    author?: string
    author_id?: { link?: string; name_surname?: string }
    image_bg?: string
    color_id?: { code?: string }
    oncecikarilan_1?: boolean
    oncecikarilan_2?: boolean
    oncecikarilan_3?: boolean
}

type AuthorRecord = { _id: string; link: string; name_surname: string }
type CategoryRecord = { _id: string; category: string }
type ColorRecord = { _id: string; code: string }

export function getCategoryName(blog: BlogMinimal): string | undefined {
    const direct = blog.category_id?.category
    if (direct) return direct
    const categoryId = blog.category
    if (!categoryId) return undefined
    try {
        const found = (categoriesData as CategoryRecord[]).find(c => c._id === categoryId)
        return found?.category
    } catch {
        return undefined
    }
}

export function getAuthorInfo(blog: BlogMinimal): { link: string; name_surname: string } | undefined {
    if (blog.author_id?.link && blog.author_id?.name_surname) {
        return { link: blog.author_id.link, name_surname: blog.author_id.name_surname }
    }
    const authorId = blog.author
    if (!authorId) return undefined
    try {
        const found = (authorsData as AuthorRecord[]).find(a => a._id === authorId)
        if (!found) return undefined
        return { link: found.link, name_surname: found.name_surname }
    } catch {
        return undefined
    }
}

export function getBackgroundColor(blog: BlogMinimal): string | undefined {
    if (blog.color_id?.code) return blog.color_id.code
    if (!blog.image_bg) return undefined
    try {
        const found = (colorData as ColorRecord[]).find(c => c._id === blog.image_bg)
        return found?.code
    } catch {
        return undefined
    }
}

export function parseBlogTime(blog: BlogMinimal): number {
    if (blog._createDate) {
        const t = Date.parse(blog._createDate)
        if (!Number.isNaN(t)) return t
    }
    const date = blog.date
    if (date) {
        const m = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
        if (m) {
            const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]))
            const t = d.getTime()
            if (!Number.isNaN(t)) return t
        }
    }
    return 0
}

export function sortBlogsNewest<T extends BlogMinimal>(arr: T[]): T[] {
    return [...arr].sort((a, b) => parseBlogTime(b) - parseBlogTime(a))
}

export function pickFeatured<T extends BlogMinimal>(blogs: T[]): [T | undefined, T | undefined, T | undefined] {
    const b1 = blogs.find(b => b.oncecikarilan_1)
    const b2 = blogs.find(b => b.oncecikarilan_2)
    const b3 = blogs.find(b => b.oncecikarilan_3)
    const fallback = blogs.slice(0, 3)
    return [b1 || fallback[0], b2 || fallback[1], b3 || fallback[2]]
}


