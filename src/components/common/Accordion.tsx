"use client";

import { useState } from "react";
import { FAQCategory, FAQItem } from "@/data/faq";

interface AccordionProps {
    data: FAQCategory[];
    description?: string;
    title?: string;
}

function AccordionItemComponent({
    item,
    isOpen,
    onToggle,
    parentId,
}: {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
    parentId: string;
}) {
    return (
        <div className="accordion-item">
            <h3 className="accordion-header" id={item.id}>
                <button
                    className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}A`}
                >
                    <span className="accordion-icon">
                        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                    </span>
                    <span className="accordion-title">{item.question}</span>
                </button>
            </h3>
            <div
                id={`${item.id}A`}
                className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                aria-labelledby={item.id}
                data-bs-parent={`#${parentId}`}
            >
                <div className="accordion-body">{item.answer}</div>
            </div>
        </div>
    );
}

function Accordion({ data, description, title = "Merak ettikleriniz" }: AccordionProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [openItems, setOpenItems] = useState<Record<string, string | null>>(() => {
        const initial: Record<string, string | null> = {};
        data.forEach((category) => {
            initial[category.id] = category.items[0]?.id || null;
        });
        return initial;
    });

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleAccordionToggle = (categoryId: string, itemId: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [categoryId]: prev[categoryId] === itemId ? null : itemId,
        }));
    };

    return (
        <section className="faq-section" id="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-duration="1500">
                        <div className="section-badge">
                            <i className="icon-sss"></i>
                            <span>SSS</span>
                        </div>
                        <h2>{title}</h2>
                        {description && <p>{description}</p>}
                    </div>
                    <div className="col-12">
                        <div className="navandtab">
                            <ul
                                className="nav nav-tabs"
                                id="myTab"
                                role="tablist"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                {data.map((category, index) => (
                                    <li className="nav-item" role="presentation" key={category.id}>
                                        <button
                                            className={`nav-link ${activeTab === index ? "active" : ""}`}
                                            id={category.tabId}
                                            data-bs-toggle="tab"
                                            data-bs-target={`#${category.id}`}
                                            type="button"
                                            role="tab"
                                            aria-controls={category.id}
                                            aria-selected={activeTab === index}
                                            onClick={() => handleTabClick(index)}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div
                                className="tab-content"
                                id="myTabContent"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                {data.map((category, categoryIndex) => (
                                    <div
                                        key={category.id}
                                        className={`tab-pane fade ${activeTab === categoryIndex ? "show active" : ""}`}
                                        id={category.id}
                                        role="tabpanel"
                                        aria-labelledby={category.tabId}
                                    >
                                        <div className="accordion custom-accordion" id={category.accordionId}>
                                            {category.items.map((item) => (
                                                <AccordionItemComponent
                                                    key={item.id}
                                                    item={item}
                                                    isOpen={openItems[category.id] === item.id}
                                                    onToggle={() => handleAccordionToggle(category.id, item.id)}
                                                    parentId={category.accordionId}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accordion;
