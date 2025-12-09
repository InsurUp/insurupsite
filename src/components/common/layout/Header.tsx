'use client';
import { useState, useEffect } from "react";
import { focusSection } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
    { label: "Fiyatlandırma", href: "/fiyatlandirma" },
    { label: "Faydalar", onClick: (e: React.MouseEvent<HTMLElement>) => focusSection("benefits", e) },
    { label: "Özellikler", onClick: (e: React.MouseEvent<HTMLElement>) => focusSection("properties", e) },
    {
        label: "Ürünler",
        submenu: [
            { label: "Web Satış Platformu", href: "/urunler/web-satis-platformu" }
        ],
    },
    { label: "Ücretlendirme", onClick: (e: React.MouseEvent<HTMLElement>) => focusSection("billing", e) },
    { label: "SSS", onClick: (e: React.MouseEvent<HTMLElement>) => focusSection("faq-section", e) },
    { label: "Blog", href: "/blog" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

    // Body class toggle for menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

    const handleHamburgerClick = () => {
        setMenuOpen(true);
    };

    const handleCloseClick = () => {
        setMenuOpen(false);
        setOpenSubmenuIndex(null);
    };

    const handleSubmenuToggle = (index: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
        setOpenSubmenuIndex(null);
    };

    return (
        <header>
            <div className="container">
                <nav className="menu">
                    <Link href="/">
                        <Image
                            src="/InsurUp/insurup-logo.svg"
                            alt="InsurUp Logo"
                            width={120}
                            height={40}
                        />
                    </Link>
                    <ul>
                        {menuItems.map((item, i) => (
                            <li
                                key={i}
                                className={item.submenu ? "submenu-hover" : ""}
                            >
                                {item.href ? (
                                    <Link href={item.href}>{item.label}</Link>
                                ) : (
                                    <a href="#" onClick={(e) => { e.preventDefault(); item.onClick?.(e); }}>
                                        {item.label}
                                        {item.submenu && <i className="fa-solid fa-chevron-down"></i>}
                                    </a>
                                )}
                                {item.submenu && (
                                    <div className="submenu">
                                        <ul>
                                            {item.submenu.map((sub, j) => (
                                                <li key={j}>
                                                    <Link href={sub.href}>{sub.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://app.insurup.com"
                        target="_blank"
                        className="btn-menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M9.99991 13.75C12.7464 13.75 15.1487 14.9312 16.4552 16.6937L15.0737 17.347C14.0102 16.087 12.1352 15.25 9.99991 15.25C7.86466 15.25 5.98966 16.087 4.92616 17.347L3.54541 16.693C4.85191 14.9305 7.25341 13.75 9.99991 13.75ZM9.99991 2.5C10.9945 2.5 11.9483 2.89509 12.6516 3.59835C13.3548 4.30161 13.7499 5.25544 13.7499 6.25V8.5C13.7499 9.46635 13.3768 10.3954 12.7084 11.0933C12.0401 11.7913 11.1281 12.2043 10.1627 12.2462L9.99991 12.25C9.00535 12.25 8.05152 11.8549 7.34826 11.1517C6.645 10.4484 6.24991 9.49456 6.24991 8.5V6.25C6.24997 5.28365 6.62307 4.35463 7.2914 3.65667C7.95974 2.95871 8.87172 2.54569 9.83716 2.50375L9.99991 2.5ZM9.99991 4C9.426 3.99997 8.87377 4.21924 8.45621 4.61296C8.03865 5.00668 7.78733 5.54508 7.75366 6.118L7.74991 6.25V8.5C7.74935 9.08568 7.97717 9.6485 8.38499 10.0689C8.7928 10.4892 9.34846 10.734 9.93388 10.7512C10.5193 10.7684 11.0884 10.5566 11.5201 10.1609C11.9519 9.76519 12.2124 9.2167 12.2462 8.632L12.2499 8.5V6.25C12.2499 5.65326 12.0129 5.08097 11.5909 4.65901C11.1689 4.23705 10.5966 4 9.99991 4V4Z"
                                fill="white"
                            />
                        </svg>
                        Acente Girişi
                    </a>
                </nav>
            </div>
            <div className="mobile-menu">
                <Link href="/">
                    <Image src="/InsurUp/insurup-logo.svg" alt="InsurUp Logo" width={120} height={40} />
                </Link>
                <div className="mobile-icon">
                    <Image
                        id="hamburger"
                        src="/InsurUp/hamburger-menus.svg"
                        alt="Hamburger Menu"
                        width={24}
                        height={24}
                        onClick={handleHamburgerClick}
                        style={{ cursor: 'pointer' }}
                    />
                    <Image
                        id="close-mbl"
                        src="/InsurUp/close-menus.svg"
                        alt="Close Menu"
                        width={24}
                        height={24}
                        onClick={handleCloseClick}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="mobile-open">
                    <ul>
                        {menuItems.map((item, i) => (
                            <li
                                key={i}
                                className={item.submenu ? "submenu-hover" : ""}
                            >
                                {item.href ? (
                                    <Link href={item.href} onClick={handleLinkClick}>{item.label}</Link>
                                ) : item.submenu ? (
                                    <a
                                        href="#"
                                        onClick={(e) => handleSubmenuToggle(i, e)}
                                    >
                                        {item.label}
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </a>
                                ) : (
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            item.onClick?.(e);
                                            handleLinkClick();
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                )}
                                {item.submenu && (
                                    <div className={`submenu ${openSubmenuIndex === i ? 'open' : ''}`}>
                                        <ul>
                                            {item.submenu.map((sub, j) => (
                                                <li key={j}>
                                                    <Link href={sub.href} onClick={handleLinkClick}>{sub.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-social">
                        <a href="https://app.insurup.com" target="_blank" className="btn-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99991 13.75C12.7464 13.75 15.1487 14.9312 16.4552 16.6937L15.0737 17.347C14.0102 16.087 12.1352 15.25 9.99991 15.25C7.86466 15.25 5.98966 16.087 4.92616 17.347L3.54541 16.693C4.85191 14.9305 7.25341 13.75 9.99991 13.75ZM9.99991 2.5C10.9945 2.5 11.9483 2.89509 12.6516 3.59835C13.3548 4.30161 13.7499 5.25544 13.7499 6.25V8.5C13.7499 9.46635 13.3768 10.3954 12.7084 11.0933C12.0401 11.7913 11.1281 12.2043 10.1627 12.2462L9.99991 12.25C9.00535 12.25 8.05152 11.8549 7.34826 11.1517C6.645 10.4484 6.24991 9.49456 6.24991 8.5V6.25C6.24997 5.28365 6.62307 4.35463 7.2914 3.65667C7.95974 2.95871 8.87172 2.54569 9.83716 2.50375L9.99991 2.5ZM9.99991 4C9.426 3.99997 8.87377 4.21924 8.45621 4.61296C8.03865 5.00668 7.78733 5.54508 7.75366 6.118L7.74991 6.25V8.5C7.74935 9.08568 7.97717 9.6485 8.38499 10.0689C8.7928 10.4892 9.34846 10.734 9.93388 10.7512C10.5193 10.7684 11.0884 10.5566 11.5201 10.1609C11.9519 9.76519 12.2124 9.2167 12.2462 8.632L12.2499 8.5V6.25C12.2499 5.65326 12.0129 5.08097 11.5909 4.65901C11.1689 4.23705 10.5966 4 9.99991 4V4Z" fill="white" />
                            </svg>
                            Acente Girişi
                        </a>
                        <div className="social-flex">
                            <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
