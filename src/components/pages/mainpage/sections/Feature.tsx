function Feature() {
    return (
        <section className="information-section">
            <div className="container">
                <div className="row align-items-center">    
                    <div className="col-lg-5">
                        <span className="badge d-flex align-items-center gap-2">
                            <i className="fa-solid fa-cart-shopping"></i>
                            InsurUp CRM
                        </span>
                        <h2>Satışlarınızı ve Müşteri Yönetiminizi Güçlendirin</h2>
                        <p className="info-text">
                            InsurUp CRM, sigorta acenteleri için özel olarak geliştirilmiş müşteri yönetimi ve satış süreçlerini hızlandıran bir platformdur.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i>Hızlı kurulum ve kullanım kolaylığı
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Müşteri 360° takip sistemi
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Otomatik teklif ve poliçe yenileme süreçleri
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-7 text-center">
                        <div className="info-card">
                            <img src="/InsurUp/main/products.png" alt="Anında Teklif Görseli" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row flex-lg-row-reverse align-items-center">
                    <div className="col-lg-5">
                        <span className="badge d-flex align-items-center gap-2">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Sigorta Web Satış Platformu
                        </span>
                        <h2>Anında Teklif ve Poliçe Yönetimi</h2>
                        <p className="info-text">
                            Sigorta Web Satış Platformu ile müşterilerinize saniyeler içinde online sigorta teklifleri sunun ve poliçeleştirme süreçlerini hızlandırın.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Rakipsiz uygun fiyatlı kurulum
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Online ve offline teklif alma seçenekleri
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Gerçek zamanlı teklif yönetimi
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-7 text-center">
                        <div className="info-card">
                            <img src="/InsurUp/main/package.png" alt="Müşteri Portalı Görseli" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <span className="badge d-flex align-items-center gap-2">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Sigorta Cüzdanı
                        </span>
                        <h2>Dijital Pazarda Yerinizi Alın</h2>
                        <p className="info-text">
                            Sigorta Cüzdanı, müşterilerinizin poliçelerini kolayca takip etmesini sağlar ve sigorta tekliflerinizi binlerce müşterinin olduğu bir dijital pazarda sunmanıza imkan tanır.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Sıfır masraf ile geniş müşteri ağı
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Hızlı entegrasyon ile saatler içinde aktif kullanım
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fa-solid fa-check-circle text-primary me-2"></i> Kişiselleştirilmiş dijital dükkan tasarımı
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-7 text-center">
                        <div className="info-card">
                            <img src="/InsurUp/main/agency-1.png" alt="Güvenli Ödeme Görseli" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
