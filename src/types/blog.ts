// Author Types
export interface Author {
    _id: string;
    name_surname: string;
    link: string;
    image: string;
    desc: string;
    linkedin?: string;
    _languageId?: number;
    _createDate?: string;
    _updateDate?: string;
}

// Category Types
export interface Category {
    _id: string;
    category: string;
    _languageId?: number;
    _createDate?: string;
    _updateDate?: string;
}

// Blog Types
export interface BlogAuthorRef {
    _id?: string;
    link: string;
    name_surname: string;
}

export interface BlogCategoryRef {
    _id?: string;
    category?: string;
}

export interface BlogColorRef {
    _id?: string;
    code?: string;
}

export interface Blog {
    _id: string;
    title: string;
    image: string;
    date: string;
    link: string;
    desc?: string;
    detail_content?: string;
    meta_title?: string;
    category?: string;
    category_id?: BlogCategoryRef;
    author?: string;
    author_id?: BlogAuthorRef;
    image_bg?: string;
    color_id?: BlogColorRef;
    cta?: boolean;
    cta_title?: string;
    cta_text?: string;
    cta_link?: string;
    _languageId?: number;
    _createDate?: string;
    _updateDate?: string;
}

