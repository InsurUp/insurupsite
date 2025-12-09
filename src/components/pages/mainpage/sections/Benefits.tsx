import Image from "next/image";

function Benefits() {
    return (
        <section className="benefits" id="benefits">
            <div className="container">
                <div className="row spacing-48">
                    <div className="col-lg-12" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="section-badge">
                            <i className="icon-star"></i>
                            <span>Faydalar</span>
                        </div>
                        <h2>Sizi güçlendirecek her şey</h2>
                        <p>
                            InsurUp CRM, kendi potansiyelinin farkına varan ve daha ileriye gitmek isteyen bir acentenin tüm ihtiyaçlarına özel olarak geliştirilmiştir.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos-delay="300" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="benefit-card" id="benefit1">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-1.png" alt="Yeni Satış Personeli" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Özgürce kullanım</h3>
                                <p>
                                    Kendiniz kurun, kendiniz yapılandırın.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos-delay="400" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="benefit-card">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-2.png" alt="Hızlı Kurulum" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Hızlı kurulum</h3>
                                <p>
                                    3 dakikadan kısa sürede kullanmaya başlayın.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos-delay="500" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="benefit-card">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-aile.png" alt="Müşteriye 360 derece odak" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Müşteriye 360 derece odak</h3>
                                <p>
                                    Bir müşteriden birçok fırsat çıkarın.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos-delay="300" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="benefit-card" id="benefit4">
                            <div className="benefit-header">
                                <Image src="/InsurUp/benefit-4.svg" alt="Satış odaklı otonom altyapı" width={340} height={287} quality={100} style={{ width: '87%', height: 'auto', margin: '0 auto', display: 'block' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Akıllı çözümler</h3>
                                <p>Karmaşık süreçleri basitleştirin ve otomatikleştirin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos-delay="400" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="benefit-card">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-5.png" alt="Her kanaldan erişin" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Her kanaldan erişim</h3>
                                <p>
                                    İster mobilden ister bilgisayardan online erişin.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos-delay="500" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="benefit-card" id="benefit6">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-6.png" alt="InsurGateway destekli" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>300+ sigorta ürünü</h3>
                                <p>
                                    30+ sigorta şirketinin ürünlerine erişin.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12" data-aos="fade-right" data-aos-delay="300"
                        data-aos-duration="1500">
                        <div className="benefit-card">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-7.png" alt="Aktif görev takip yönetimi" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Akıllı performans takibi</h3>
                                <p>
                                    Acente geneli, personeller ve müşteriler için Rozet mekanizması ile performans ve teşvik mekanizmaları oluşturun.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12" data-aos="fade-left" data-aos-delay="300"
                        data-aos-duration="1500">
                        <div className="benefit-card" id="benefit8">
                            <div className="benefit-header">
                                <Image src="/InsurUp/ben-8.png" alt="Artırılmış veri güvenliği ve mevzuata tam uyum" width={340} height={287} quality={100} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="benefit-body">
                                <h3>Veri güvenliği ve mevzuata tam uyum</h3>
                                <p>
                                    Tüm verilerinizi sigortacılık mevzuatlarına ve KVKK’a ya uygun bir şekilde üstün güvenlik önlemleri ile saklayın.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Benefits;