function HowItsWork() {
    return (
        <section className="position-relative">
            <img src="/InsurUp/x.png" className="shape-x" alt="" />
            <section className="benefits" id="benefits">
                <div className="container">
                    <div className="row spacing-48">
                        <div className="col-lg-12">
                            <div className="section-badge">
                                <i className="icon-star"></i>
                                <span>Nasıl Çalışır</span>
                            </div>
                            <h2>Dakikalar İçinde Online Satışa Başlayın</h2>
                            <p>
                                Sigorta satışınızı online dünyaya taşıyın. Kullanıcı dostu arayüzümüz ile hızlıca sitenizi oluşturun, özelleştirin ve yayına alın.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="benefit-card" id="benefit1">
                                <div className="benefit-header">
                                    <img src="/tasarim-sec-yeni.png" width={300} alt="Tasarım Seç" />
                                </div>
                                <div className="benefit-body">
                                    <h3>Tasarım Seç</h3>
                                    <p>
                                        Web sitenizin şablonunu seçin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-header">
                                    <img src="/ozellikler-yeni.png" width={300} alt="Özelleştir" />
                                </div>
                                <div className="benefit-body">
                                    <h3>Özelleştir</h3>
                                    <p>
                                        Logo, renk ve ürünleri ayarlayın.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="benefit-card" id="benefit3">
                                <div>

                                </div>
                                <div className="benefit-header">
                                    <img src="/InsurUp/stream-yeni-image.png" alt="Yayına Al" />
                                </div>
                                <div className="benefit-body">
                                    <h3>Yayına Al</h3>
                                    <p>
                                        Domain gir ve başlatın.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="properties" id="properties">

                <div className="properties-bg">
                    <img src="/platform-yeni.png" className="d-none d-md-block" alt="Özellikler Görseli" />
                    <img src="/platform-yeni.png" className="d-md-none" alt="Özellikler Görseli" />
                </div>
            </section>
            <section className="information-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <span className="badge d-flex align-items-center gap-2">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Karşılaştırmalı Teklif
                            </span>
                            <h2>Anında Teklif</h2>
                            <p className="info-text">
                                Müşterilerinize 6 branşta 30+ şirketin 300+ sigorta ürünü için anında online teklif sunun. Ek olarak offline olarak sorunsuz talep toplama imkanı sağlayın.
                            </p>
                            <ul className="list-unstyled ">
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> Online saniyeler içinde teklif
                                </li>
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> 300+ ürün, 30+ şirket
                                </li>
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> Offline talep toplama
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 text-center">
                            <div className="info-card">
                                <img src="/video/aninda-teklif.gif" alt="Anında Teklif Görseli" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-lg-row-reverse align-items-center ">
                        <div className="col-lg-5">
                            <span className="badge d-flex align-items-center gap-2">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Sigortalı Giriş
                            </span>
                            <h2>Müşteri Portalı</h2>
                            <p className="info-text">
                                Müşterilerinize poliçelerine erişebilecekleri, bilgilerini yönetebilecekleri ve sigorta geçmişlerini 7/24 her cihazdan görebilecekleri kişiselleştirilmiş bir portal sunun.
                            </p>
                            <ul className="list-unstyled ">
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> 7/24 poliçe erişimi
                                </li>
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> Kişisel bilgi yönetimi
                                </li>
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> Sigorta geçmişi görüntüleme
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 text-center">
                            <div className="info-card">
                                <img src="/video/musteri-portali.gif" alt="Müşteri Portalı Görseli" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <span className="badge d-flex align-items-center gap-2">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Poliçeleştirme
                            </span>
                            <h2>Güvenli Ödeme</h2>
                            <p className="info-text">
                                Müşterilerinizin sigorta poliçeleri için 3D Secure teknolojisiyle güvenli online ödeme yapmalarını sağlayın, işlem güvenliğini ve sektör standartlarına uyumluluğu garantileyin.
                            </p>
                            <ul className="list-unstyled ">
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> 3D Secure teknolojisi
                                </li>
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> Güvenli online işlemler
                                </li>
                                <li className="d-flex align-items-center ">
                                    <i className="fa-solid fa-check-circle text-primary me-2"></i> Sektör uyumlu ödemeler
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 text-center">
                            <div className="info-card">
                                <img src="/video/odeme.gif" alt="Güvenli Ödeme Görseli" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HowItsWork
