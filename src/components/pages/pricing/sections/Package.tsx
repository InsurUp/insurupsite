'use client'
import React from 'react'
import { focusSection } from "@/utils/helper";
import { pricingPackages, pricingCategories } from "@/data/pricing";

// Placeholder for selectProduct function, if it exists elsewhere, it should be imported.
// For now, assuming it's a simple function that might not exist yet.
const selectProduct = (productName: string) => {
    console.log(`Ürün seçildi: ${productName}`);
};

function Package() {
    const renderCell = (value: boolean | string) => {
        if (value === true) return <i className="fas fa-check"></i>;
        if (value === false) return <i className="fas fa-times"></i>;
        return value;
    };

    const isVisibleOnResponsive = (value: boolean | string) => {
        // Mobil/tab görünümünde yalnızca true veya string değerleri göster
        if (value === true) return true;
        if (value === false) return false;
        // string, ör. "⏳" veya metin
        return String(value).trim().length > 0;
    };

    return (
        <section className="table-section  benefits">
            <div className="container ">
                <div className="row spacing-48">
                    <div className="col-lg-12">
                        <div className="section-badge">
                            <i className="icon-star"></i>
                            <span>Paketler</span>
                        </div>
                        <h2>İhtiyacınıza Uygun Paketi Seçin</h2>
                        <p>
                            Sigorta satışınızı büyütmek için esnek paketlerimizle yanınızdayız. İhtiyacınıza en uygun çözümü seçin ve hemen kullanmaya başlayın.
                        </p>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>Paketler</th>
                                {pricingPackages.map((pkg) => (
                                    <th key={pkg.key}>
                                        <p>{pkg.name}</p>
                                        <span>{pkg.description}</span>
                                        <div className="price-box">
                                            <p className="price-text">{pkg.priceText}</p>
                                            {pkg.pricePeriod ? <span>{pkg.pricePeriod}</span> : null}
                                        </div>
                                        <div className="th-bottom">
                                            <div className="package-information">
                                                {pkg.metrics.map((metric, idx) => (
                                                    <React.Fragment key={`${pkg.key}-metric-${idx}`}>
                                                        <div>
                                                            <span>{metric.label}</span>
                                                            <div className="information" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Tooltip on top" data-bs-original-title="Tooltip on top">
                                                                <svg className="h-4 w-4 text-slate-400 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span>{metric.value}</span>
                                                            <div className="information" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Tooltip on top" data-bs-original-title="Tooltip on top">
                                                                <svg className="h-4 w-4 text-slate-400 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                            <a
                                                href="javascript:;"
                                                onClick={(e) => { focusSection('contact-form', e); selectProduct(pkg.ctaProductName); }}
                                                className={`btn-menu${pkg.key === 'digital' ? ' w-max' : ''}`}
                                            >
                                                Teklif Al
                                            </a>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {pricingCategories.map((category, cIdx) => (
                                <React.Fragment key={`cat-${cIdx}`}>
                                    <tr className="category-row"><td colSpan={4}>{category.title}</td></tr>
                                    {category.features.map((feature, fIdx) => (
                                        <tr key={`feat-${cIdx}-${fIdx}`}>
                                            <td>{feature.label}</td>
                                            {pricingPackages.map((pkg) => (
                                                <td key={`${pkg.key}-${cIdx}-${fIdx}`}>
                                                    {renderCell(feature.values[pkg.key])}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>

                    </table>
                </div>
                <div className="responsive-table">
                    <div className="navandtab">
                        <ul className="nav nav-tabs aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration="1500">
                            {pricingPackages.map((pkg, idx) => (
                                <li className="nav-item" role="presentation" key={`tab-btn-${pkg.key}`}>
                                    <button
                                        className={`nav-link${idx === 0 ? ' active' : ''}`}
                                        id={`tab-${pkg.key}-btn`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#tab-${pkg.key}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`tab-${pkg.key}`}
                                        aria-selected={idx === 0 ? 'true' : 'false'}
                                        tabIndex={idx === 0 ? undefined : -1}
                                    >
                                        {pkg.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="tab-content aos-init aos-animate" id="myTabContent" data-aos="fade-up" data-aos-duration="1500">
                            {pricingPackages.map((pkg, idx) => (
                                <div
                                    key={`tab-pane-${pkg.key}`}
                                    className={`tab-pane fade${idx === 0 ? ' show active' : ''}`}
                                    id={`tab-${pkg.key}`}
                                    role="tabpanel"
                                    aria-labelledby={`tab-${pkg.key}-btn`}
                                >
                                    <table className="table align-middle">
                                        <tbody>
                                            {pricingCategories.flatMap((category) =>
                                                category.features
                                                    .filter((f) => isVisibleOnResponsive(f.values[pkg.key]))
                                                    .map((f, ffIdx) => (
                                                        <tr key={`resp-${pkg.key}-${category.title}-${ffIdx}`}>
                                                            <td>{f.label}</td>
                                                            <td>{renderCell(f.values[pkg.key])}</td>
                                                        </tr>
                                                    ))
                                            )}
                                        </tbody>
                                    </table>
                                    <a
                                        href="javascript:;"
                                        onClick={(e) => { focusSection('contact-form', e); selectProduct(pkg.ctaProductName); }}
                                        className="btn-menu w-max"
                                    >
                                        Teklif Al
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package