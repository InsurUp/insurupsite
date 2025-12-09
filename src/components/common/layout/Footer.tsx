"use client"
import Image from 'next/image';
import Link from 'next/link';
import { focusSection } from "@/utils/helper";

function Footer() {
    return (
        <footer>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-wrapper">
                                <div className="top">
                                    <Link href="/"><Image src="/InsurUp/footer-logo.svg" alt="Footer Logo" width={100} height={40} quality={100} /></Link>

                                    <ul>
                                        <li><a href="javascript:;" onClick={(e) => focusSection('benefits', e)}>Faydalar</a></li>
                                        <li><a href="javascript:;" onClick={(e) => focusSection('price', e)}>Fiyatlar</a></li>
                                        <li><a href="javascript:;" onClick={(e) => focusSection('properties', e)}>Özellikler</a></li>
                                        <li><a href="javascript:;" onClick={(e) => focusSection('faq-section', e)}>SSS</a></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/urunler/web-satis-platformu">Web Satış Platformu</Link></li>
                                    </ul>
                                    <div className="social-flex">
                                        <a href="https://www.linkedin.com/company/insurup/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                                        <a href="https://x.com/insurup" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="https://www.instagram.com/insurupcrm/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="https://www.facebook.com/insurup/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>

                                    </div>
                                </div>
                                <div className="mid">
                                    <p>
                                        Çifte Havuzlar Mahallesi, Yıldız Teknik Üniversitesi Teknopark C1 Blok, No: 208, 34220 Esenler/İstanbul
                                    </p>
                                </div>
                                <div className="bot">
                                    <span>© 2024 InsurUp Inc.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer