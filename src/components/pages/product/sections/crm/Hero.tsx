"use client";
import Link from 'next/link'
import { focusSection } from '@/utils/helper'

function Hero() {
    return (
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner_wrapper" data-aos="fade-up"
                            data-aos-duration="1500">
                            <div className="banner_text">
                                <span className="banner-badge"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75 3.16406C7.25482 3.16406 7.66406 2.75482 7.66406 2.25H8.08594C8.08594 2.75482 8.49518 3.16406 9 3.16406V3.58594C8.49518 3.58594 8.08594 3.99518 8.08594 4.5H7.66406C7.66406 3.99518 7.25482 3.58594 6.75 3.58594V3.16406ZM1.875 5.625C3.11764 5.625 4.125 4.61764 4.125 3.375H4.875C4.875 4.61764 5.88236 5.625 7.125 5.625V6.375C5.88236 6.375 4.875 7.38236 4.875 8.625H4.125C4.125 7.38236 3.11764 6.375 1.875 6.375V5.625ZM7.96875 6.75C7.96875 7.42309 7.42309 7.96875 6.75 7.96875V8.53125C7.42309 8.53125 7.96875 9.07691 7.96875 9.75H8.53125C8.53125 9.07691 9.07691 8.53125 9.75 8.53125V7.96875C9.07691 7.96875 8.53125 7.42309 8.53125 6.75H7.96875Z" fill="#335CFF" />
                                    <path d="M6.75 3.16406C7.25482 3.16406 7.66406 2.75482 7.66406 2.25H8.08594C8.08594 2.75482 8.49518 3.16406 9 3.16406V3.58594C8.49518 3.58594 8.08594 3.99518 8.08594 4.5H7.66406C7.66406 3.99518 7.25482 3.58594 6.75 3.58594V3.16406ZM1.875 5.625C3.11764 5.625 4.125 4.61764 4.125 3.375H4.875C4.875 4.61764 5.88236 5.625 7.125 5.625V6.375C5.88236 6.375 4.875 7.38236 4.875 8.625H4.125C4.125 7.38236 3.11764 6.375 1.875 6.375V5.625ZM7.96875 6.75C7.96875 7.42309 7.42309 7.96875 6.75 7.96875V8.53125C7.42309 8.53125 7.96875 9.07691 7.96875 9.75H8.53125C8.53125 9.07691 9.07691 8.53125 9.75 8.53125V7.96875C9.07691 7.96875 8.53125 7.42309 8.53125 6.75H7.96875Z" fill="url(#paint0_linear_1026_2479)" fillOpacity="0.16" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1026_2479" x1="5.8125" y1="2.25" x2="5.8125" y2="9.75" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                    Sigorta acenteleri için CRM sistemi</span>
                                <h1>Acentenizin potansiyelini en üst düzeye çıkarın</h1>
                                <p>
                                    InsurUp CRM, sigorta acenteleri ve brokerleri için satış performansını artıran ve müşteriye 360 derece odaklanan birçok özellik sağlar.
                                </p>
                                <Link href="javascript:;" onClick={(event: React.MouseEvent<HTMLAnchorElement>) => focusSection('iletisim', event)} className="btn-default">Erken erişime katıl</Link>
                            </div>
                            <div className="banner_video">

                                <div className="video-layer">
                                    <div className="video-container">
                                        <video id="video1" src="/video/intro-min.mp4" autoPlay muted playsInline style={{ cursor: 'auto', width: '100%', height: '100%', borderRadius: '0px', display: 'block', objectFit: 'cover', backgroundColor: 'rgba(0, 0, 0, 0)', objectPosition: '50% 50%' }}></video>
                                        <video id="video2" src="/video/loop-min.mp4" loop autoPlay muted playsInline style={{ cursor: 'auto', width: '100%', height: '100%', borderRadius: '0px', display: 'block', objectFit: 'cover', backgroundColor: 'rgba(0, 0, 0, 0)', objectPosition: '50% 50%' }}></video>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero


