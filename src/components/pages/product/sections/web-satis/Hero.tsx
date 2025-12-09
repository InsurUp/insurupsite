"use client"

import { focusSection } from '@/utils/helper'

function Hero() {

    return (
        <>
            <a href="#iletisim" onClick={(e) => focusSection('iletisim', e)} className="btn-menu fixed-phone">
                <img src="/InsurUp/phone-icon.png" alt="Telefon İkonu" />
                Formu doldurun sizi arayalım
            </a>
            <section className="hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center gap-lg-0 gap-5">
                        {/* Sol Taraf (Metin İçeriği) */}
                        <div className="col-lg-5 ">
                            <span className="badge bg-light text-primary shadow-sm d-flex align-items-center gap-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75 3.16406C7.25482 3.16406 7.66406 2.75482 7.66406 2.25H8.08594C8.08594 2.75482 8.49518 3.16406 9 3.16406V3.58594C8.49518 3.58594 8.08594 3.99518 8.08594 4.5H7.66406C7.66406 3.99518 7.25482 3.58594 6.75 3.58594V3.16406ZM1.875 5.625C3.11764 5.625 4.125 4.61764 4.125 3.375H4.875C4.875 4.61764 5.88236 5.625 7.125 5.625V6.375C5.88236 6.375 4.875 7.38236 4.875 8.625H4.125C4.125 7.38236 3.11764 6.375 1.875 6.375V5.625ZM7.96875 6.75C7.96875 7.42309 7.42309 7.96875 6.75 7.96875V8.53125C7.42309 8.53125 7.96875 9.07691 7.96875 9.75H8.53125C8.53125 9.07691 9.07691 8.53125 9.75 8.53125V7.96875C9.07691 7.96875 8.53125 7.42309 8.53125 6.75H7.96875Z" fill="#335CFF" />
                                    <path d="M6.75 3.16406C7.25482 3.16406 7.66406 2.75482 7.66406 2.25H8.08594C8.08594 2.75482 8.49518 3.16406 9 3.16406V3.58594C8.49518 3.58594 8.08594 3.99518 8.08594 4.5H7.66406C7.66406 3.99518 7.25482 3.58594 6.75 3.58594V3.16406ZM1.875 5.625C3.11764 5.625 4.125 4.61764 4.125 3.375H4.875C4.875 4.61764 5.88236 5.625 7.125 5.625V6.375C5.88236 6.375 4.875 7.38236 4.875 8.625H4.125C4.125 7.38236 3.11764 6.375 1.875 6.375V5.625ZM7.96875 6.75C7.96875 7.42309 7.42309 7.96875 6.75 7.96875V8.53125C7.42309 8.53125 7.96875 9.07691 7.96875 9.75H8.53125C8.53125 9.07691 9.07691 8.53125 9.75 8.53125V7.96875C9.07691 7.96875 8.53125 7.42309 8.53125 6.75H7.96875Z" fill="url(#paint0_linear_241_3001)" fillOpacity="0.16" />
                                    <defs>
                                        <linearGradient id="paint0_linear_241_3001" x1="5.8125" y1="2.25" x2="5.8125" y2="9.75" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                Online Sigorta Satış Sistemi
                            </span>
                            <h1>Sigorta Web Satış <span className="text-primary">Platformu</span></h1>
                            <p className="text-muted">
                                InsurUp ile sigorta acenteleri, müşterilerine hızlı ve güvenli online poliçe satış deneyimi sunar.
                            </p>
                            <a href="#iletisim" onClick={(e) => focusSection('iletisim', e)} className="btn-menu w-max">Hemen Başlayın</a>
                        </div>

                        {/* Sağ Taraf (Görsel İçerik) */}
                        <div className="col-lg-7 position-relative">
                            <div className="hero-image">
                                <img className="position-absolute product-shape-1" src="/InsurUp/product-hero-shape-1.png" alt="Ürün Banner Shape 1" />
                                <img className="position-absolute product-shape-2" src="/InsurUp/product-hero-shape-2.svg" alt="Ürün Banner Shape 2" />
                                <img className="position-absolute product-shape-3" src="/InsurUp/product-hero-shape-3.png" alt="Ürün Banner Shape 3" />
                                <img className="position-absolute product-shape-4" src="/InsurUp/product-hero-shape-4.png" alt="Ürün Banner Shape 4" />
                                <img className="position-relative pc-img" src="/banner-laptop-yeni.png" alt="B2C Ekran Görseli" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
