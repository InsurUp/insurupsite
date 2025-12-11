"use client";
import Link from 'next/link'

function Hero() {
    return (
        <section className="hero-section">
            <img 
                src="https://storage.acerapps.io/app-1551/InsurUp/main/banner-shape.png" 
                className="banner-shape w-100" 
                alt="Hero Shape" 
            />

            <div className="container">
                <div className="main-description">
                    <h1>Sigorta Operasyonlarınızı <span>Dijitalleştirin</span></h1>
                    <p>
                        Hızlı ve bütçe dostu websitesi, entegre CRM ve bir çok ürünümüz ile <br /> 
                        acentenizin <strong>büyüme hızını 3 kat artırın.</strong>
                    </p>
                </div>

                <div className="main-video-box">
                    <div className="play-box">
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>

                <div className="main-services-flex">
                    <Link href="/urunler/crm" className="item">
                        <div className="dot dot-1"></div>
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                        <div className="dot dot-4"></div>
                        <div className="icon-flex">
                            <div className="icon-box">
                                <img 
                                    src="https://storage.acerapps.io/app-1551/InsurUp/insurcrm-icon.png" 
                                    alt="Insurup CRM Görseli" 
                                    title="InsurUp CRM" 
                                />
                            </div>
                            <span>InsurUp CRM</span>
                        </div>
                    </Link>

                    <Link href="/urunler/web-satis-platformu" className="item">
                        <div className="dot dot-1"></div>
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                        <div className="dot dot-4"></div>
                        <div className="icon-flex">
                            <div className="icon-box">
                                <img 
                                    src="https://storage.acerapps.io/app-1551/InsurUp/web-satis.png" 
                                    alt="Web Satış Platformu Görseli" 
                                    title="Web Satış Platformu" 
                                />
                            </div>
                            <span>Web Satış Platformu</span>
                        </div>
                    </Link>

                    <Link href="/urunler/insurchat" className="item">
                        <div className="dot dot-1"></div>
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                        <div className="dot dot-4"></div>
                        <div className="icon-flex">
                            <div className="icon-box">
                                <img 
                                    src="https://storage.acerapps.io/app-1551/InsurUp/main/insur-wallet-ic.png" 
                                    alt="Sigorta Cüzdanı Görseli" 
                                    title="Sigorta Cüzdanı"
                                />
                            </div>
                            <span>Sigorta Cüzdanı</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
