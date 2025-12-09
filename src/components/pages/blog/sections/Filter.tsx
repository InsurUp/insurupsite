import categoriesData from '@/data/category.json'

interface BlogCategoryRef {
    _id?: string
    category?: string
}

type Category = { id: string; name: string; count: number }

function getCategories(): Category[] {
    const raw = categoriesData as unknown as Array<{ _id: string; category: string }>
    const categories = raw.map((c) => ({
        id: c._id,
        name: c.category || 'Kategori',
        count: 0,
    }))
    return categories.sort((a, b) => a.name.localeCompare(b.name, 'tr'))
}

const SelectCategories = () => {
    const categories = getCategories()
    return (
        <select name="categoryListDropdown" className="form-select filter-select" id="categoryListDropdown">
            <option value="*">Tümü</option>
            {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
            ))}
        </select>
    )
}

const ListCategories = () => {
    const categories = getCategories()
    return (
        <ul id="categoryList">
            <li className="active" data-id="*">Tümü</li>
            {categories.map((c) => (
                <li key={c.id} data-id={c.id}>{c.name}</li>
            ))}
        </ul>
    )
}

function Filter() {
    return (
        <section className="filter-section">
            <div className="container">
                <div className="filter-flex">
                    <SelectCategories />
                    <ListCategories />
                    <div className="search-box" id="searchIcon">
                        <input type="text" className="search-input" id="searchInput" placeholder="Ara..." />
                        <i className="fa-solid fa-search"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter