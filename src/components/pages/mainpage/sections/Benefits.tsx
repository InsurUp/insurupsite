import Link from "next/link";

function Benefits() {
    return (
        <section className="position-relative">
            <section className="benefits" id="benefits">
                <div className="container">
                    <div className="row spacing-48">
                        <div className="col-lg-12">
                            <div className="section-badge">
                                <i className="icon-star"></i>
                                <span>Dijitalleşin</span>
                            </div>
                            <h2>Sigorta Operasyonlarınızı Baştan Sona Dijitalleştirin</h2>
                            <p>
                                Tekliften poliçeye, müşteri yönetiminden satış süreçlerine kadar sigorta acentenizin tüm operasyonlarını uygun maliyetle dijitalleştirin. Farklı çözümlerimizle iş akışlarınızı hızlandırın ve daha verimli hale getirin.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="/urunler/crm" className="benefit-card benefit-card-hover">
                                <div className="benefit-header">
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="img-box-crm">
                                        <img src="/InsurUp/main/Union.png" alt="InsurUp CRM" />
                                    </div>
                                </div>
                                <div className="benefit-body">
                                    <h3>InsurupCRM</h3>
                                    <p>
                                        Teklif oluşturma, müşteri yönetimi ve satış operasyonlarını üç kat verimli hale getirir.
                                        <br />
                                        <span className="blue-txt text-decoration-underline d-block mt-2">Detaylı İncele</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="/urunler/web-satis-platformu" className="benefit-card benefit-card-hover" id="benefit1">
                                <div className="benefit-header">
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="img-box-crm">
                                        <img src="/InsurUp/main/web-satis.png" alt="Web Satış Platformu" />
                                    </div>
                                </div>
                                <div className="benefit-body">
                                    <h3>Sigorta Web Satış Platformu</h3>
                                    <p>
                                        Online Sigorta teklifleri sunun ve poliçeleştirme süreçlerini hızlandırın.
                                        <br />
                                        <span className="blue-txt text-decoration-underline d-block mt-2">Detaylı İncele</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="benefit-card" id="benefit3">
                                <div className="benefit-header">
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="pulse-ring"></div>
                                    <div className="img-box-crm">
                                        <img src="/InsurUp/main/cuzdan.png" alt="Sigorta Cüzdanı" />
                                    </div>
                                </div>
                                <div className="benefit-body">
                                    <h3>Sigorta Cüzdanı</h3>
                                    <p>
                                        Sigorta takibini dijitalleştirin, tek cüzdanda yönetin.
                                        <br />
                                        <span className="blue-txt">YAKINDA</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Benefits;
