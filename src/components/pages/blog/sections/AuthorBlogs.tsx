"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import Filter from "./Filter";
import { Blog } from "@/types/blog";
import { parseBlogTime } from "@/utils/blog";

interface AuthorBlogsProps {
    blogs: Blog[];
}

function AuthorBlogs({ blogs }: AuthorBlogsProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("*");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredBlogs = useMemo<Blog[]>(() => {
        const term = searchTerm.trim().toLowerCase();
        const filtered = blogs.filter((b) => {
            const catOk =
                selectedCategory === "*" ||
                b.category_id?._id === selectedCategory ||
                b.category === selectedCategory;
            const termOk =
                term.length === 0 ||
                b.title.toLowerCase().includes(term);
            return catOk && termOk;
        });
        return filtered.sort((a, b) => parseBlogTime(b) - parseBlogTime(a));
    }, [blogs, selectedCategory, searchTerm]);

    useEffect(() => {
        const selectEl = document.getElementById("categoryListDropdown") as HTMLSelectElement | null;
        const listEl = document.getElementById("categoryList") as HTMLUListElement | null;
        const searchEl = document.getElementById("searchInput") as HTMLInputElement | null;

        const syncCategoryUI = (value: string) => {
            if (selectEl && selectEl.value !== value) {
                selectEl.value = value;
            }
            if (listEl) {
                const items = Array.from(listEl.querySelectorAll("li"));
                items.forEach((li) => li.classList.remove("active"));
                const target = items.find((li) => li.getAttribute("data-id") === value);
                if (target) target.classList.add("active");
                else {
                    const all = items.find((li) => li.getAttribute("data-id") === "*");
                    if (all) all.classList.add("active");
                }
            }
        };

        const handleSelectChange = (e: Event) => {
            const val = (e.target as HTMLSelectElement).value;
            setSelectedCategory(val);
            syncCategoryUI(val);
        };

        const handleListClick = (e: Event) => {
            const target = e.target as HTMLElement;
            const li = target.closest("li");
            if (!li) return;
            const id = li.getAttribute("data-id");
            if (!id) return;
            setSelectedCategory(id);
            syncCategoryUI(id);
        };

        const handleSearchInput = (e: Event) => {
            const val = (e.target as HTMLInputElement).value;
            setSearchTerm(val);
        };

        selectEl?.addEventListener("change", handleSelectChange);
        listEl?.addEventListener("click", handleListClick);
        searchEl?.addEventListener("input", handleSearchInput);

        syncCategoryUI(selectedCategory);

        return () => {
            selectEl?.removeEventListener("change", handleSelectChange);
            listEl?.removeEventListener("click", handleListClick);
            searchEl?.removeEventListener("input", handleSearchInput);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const listEl = document.getElementById("categoryList") as HTMLUListElement | null;
        const selectEl = document.getElementById("categoryListDropdown") as HTMLSelectElement | null;

        if (selectEl && selectEl.value !== selectedCategory) {
            selectEl.value = selectedCategory;
        }
        if (listEl) {
            const items = Array.from(listEl.querySelectorAll("li"));
            items.forEach((li) => li.classList.remove("active"));
            const target = items.find((li) => li.getAttribute("data-id") === selectedCategory);
            if (target) target.classList.add("active");
        }
    }, [selectedCategory]);

    const showAlert = filteredBlogs.length === 0 && (searchTerm.trim().length > 0 || selectedCategory !== "*");

    return (
        <>
            <Filter />
            <section>
                <div className="container">
                    {showAlert && (
                        <div className="search-alert">
                            <i className="fa-solid fa-exclamation"></i> Aradığınız Sonuç Bulunamadı
                        </div>
                    )}
                    <div className="all-blog-grid">
                        {filteredBlogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthorBlogs;

