"use client"
import { useState } from 'react';
import { focusSection } from "@/utils/helper";

const selectProduct = (key: string) => {
    const selectBox = document.querySelector('select[name="package"]') as HTMLSelectElement | null;
    if (selectBox) {
        selectBox.value = key;
        selectBox.dispatchEvent(new Event("change")); // Değişiklik tetiklenirse event dinleyicileri de çalışır
    }
};
function PackageTable() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSeeMore = () => {
        setIsExpanded(true);
    };

    return (
        <section className="table-section  benefits">
            <div className="container ">
                <div className="row spacing-48">
                    <div className="col-lg-12">
                        <div className="section-badge">
                            <i className="icon-star"></i>
                            <span>Paketler</span>
                        </div>
                        <h2>İhtiyacınıza Uygun Paketi Seçin</h2>
                        <p>
                            Sigorta satışınızı büyütmek için esnek paketlerimizle yanınızdayız. İhtiyacınıza en uygun çözümü seçin ve hemen kullanmaya başlayın.
                        </p>
                    </div>
                </div>
                <div className="table-responsive" style={isExpanded ? { height: 'auto' } : undefined}>
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>Paketler</th>
                                <th>
                                    <p>
                                        Giriş Paketi
                                    </p>
                                    <span>Sigorta satışına başlamak isteyenler için temel özellikler.</span>
                                    <a href="javascript:;" onClick={(e) => { focusSection('iletisim', e); selectProduct('Giriş Paket'); }} className="btn btn-table">Teklif Al</a>
                                </th>
                                <th>
                                    <p>
                                        Profesyonel Paketi
                                    </p>
                                    <span>Gelişmiş özelliklerle işinizi büyütün ve daha fazla müşteri kazanın.</span>
                                    <a href="javascript:;" onClick={(e) => { focusSection('iletisim', e); selectProduct('Profesyonel Paket'); }} className="btn btn-table">Teklif Al</a>
                                </th>
                                <th>
                                    <p className="text-primary">
                                        Dijital Profesyonel Paketi
                                    </p>
                                    <span>Entegre dijital çözümlerle online satışlarınızı hızlandırın.</span>
                                    <a href="javascript:;" onClick={(e) => { focusSection('iletisim', e); selectProduct('Dijital Profesyonel Paket'); }} className="btn-menu w-max">Teklif Al</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>30+ Şirket 300+ Üründen Hızlı Teklif</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Trafik, Kasko, Dask, Konut, TSS ve IMM Branşları</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Kasko ve Konut Ürünlerinde Teminat Paketleme</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>3D, Kredi Kartı ve Açık Hesap ile Poliçeleştirme</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Self Servis Ürün Entegrasyonu/Kaldırılması</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Self Servis Kullanıcı Ekleme</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Self Servis Rol ve Yetki Tanımlama</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Dosya Yoluyla Poliçe Transferi</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>PDF'lerin SMS / E-mail ile Müşteriye Gönderimi</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Destek İletişim Sistemi ile Hata ve Taleplerde Destek</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Potansiyel (Lead) Modülü</td>
                                <td>-</td>
                                <td>Yakında</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Fırsatlar (Çapraz Satış, Yenileme, Yeni Satış) Modülü</td>
                                <td>-</td>
                                <td>Yakında</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Otomatik Yenileme Fırsatı Modülü</td>
                                <td>-</td>
                                <td>Yakında</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Şube ve Departman Modülü</td>
                                <td>-</td>
                                <td>Yakında</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Web Servis ile Otomatik Poliçe Transferi</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Yapay Zeka ile Sohbet Modülü</td>
                                <td>-</td>
                                <td>Yakında</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Haftaiçi 5 Gün 9:00-18:00 Arası Destek / Dönüş</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Ayda x Saat CRM ve Dijitalleşme Eğitimi</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>InsurUp CRM ile Tam Entegre Şablon Web Sitesi</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>AloTech Call-center Entegrasyonu</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Webhook Yönetimi ile CRM'deki Verilerin Dışa Aktarımı</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Yenileme Tekliflerini Müşteriye Otomatik SMS/E-mail ile Gönderimi</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>SLA Standartlarında Destek</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Giriş ve Profesyonel Paketindeki Her Şey</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>InsurUp CRM ile Tam Entegre Şablon Web Sitesi</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>AloTech Call-center Entegrasyonu</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Yakında</td>
                            </tr>
                            <tr>
                                <td>Webhook Yönetimi ile CRM'deki Verilerin Dışa Aktarımı</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Yenileme Tekliflerini Müşteriye Otomatik SMS/E-mail ile Gönderimi</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>SLA Standartlarında Destek</td>
                                <td>-</td>
                                <td>-</td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {!isExpanded && (
                    <a href="javascript:;" id="see-more" onClick={handleSeeMore}>Daha Fazla Görüntüle </a>
                )}
                <div className="responsive-table">
                    <div className="navandtab">
                        <ul className="nav nav-tabs aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration="1500">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="pricing-tab" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false" tabIndex={-1}>Giriş Paketi</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="usage-tab" data-bs-toggle="tab" data-bs-target="#usage" type="button" role="tab" aria-controls="usage" aria-selected="false" tabIndex={-1}>Profesyonel Paketi</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="technical-infrastructure-tab" data-bs-toggle="tab" data-bs-target="#technical-infrastructure" type="button" role="tab" aria-controls="technical-infrastructure" aria-selected="true">Dijital Profesyonel Paketi</button>
                            </li>
                        </ul>

                        <div className="tab-content aos-init" id="myTabContent" data-aos="fade-up" data-aos-duration="1500">
                            {/* Ücretlendirme Tab */}
                            <div className="tab-pane fade " id="pricing" role="tabpanel" aria-labelledby="pricing-tab">
                                <table className="table align-middle">

                                    <tbody>
                                        <tr>
                                            <td>30+ Şirket 300+ Üründen Hızlı Teklif</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Trafik, Kasko, Dask, Konut, TSS ve IMM Branşları</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Kasko ve Konut Ürünlerinde Teminat Paketleme</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>3D, Kredi Kartı ve Açık Hesap ile Poliçeleştirme</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Self Servis Ürün Entegrasyonu/Kaldırılması</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Self Servis Kullanıcı Ekleme</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Self Servis Rol ve Yetki Tanımlama</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Dosya Yoluyla Poliçe Transferi</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>PDF'lerin SMS / E-mail ile Müşteriye Gönderimi</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Destek İletişim Sistemi ile Hata ve Taleplerde Destek</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="javascript:;" onClick={(e) => { focusSection('iletisim', e); selectProduct('Giriş Paket'); }} className="btn-menu w-max">Teklif Al</a>
                            </div>

                            {/* Kullanım Tab */}
                            <div className="tab-pane fade" id="usage" role="tabpanel" aria-labelledby="usage-tab">
                                <table className="table align-middle">

                                    <tbody>
                                        <tr>
                                            <td>Giriş Paketindeki Her Şey</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Potansiyel (Lead) Modülü</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Fırsatlar (Çapraz Satış, Yenileme, Yeni Satış) Modülü</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Otomatik Yenileme Fırsatı Modülü</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Şube ve Departman Modülü</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Web Servis ile Otomatik Poliçe Transferi</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Yapay Zeka ile Sohbet Modülü</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Haftaiçi 5 Gün 9:00-18:00 Arası Destek / Dönüş</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Ayda x Saat CRM ve Dijitalleşme Eğitimi</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="javascript:;" onClick={(e) => { focusSection('iletisim', e); selectProduct('Profesyonel Paket'); }} className="btn-menu w-max">Teklif Al</a>
                            </div>

                            {/* Teknik Altyapı Tab */}
                            <div className="tab-pane fade show active" id="technical-infrastructure" role="tabpanel" aria-labelledby="technical-infrastructure-tab">
                                <table className="table align-middle">

                                    <tbody>

                                        <tr>
                                            <td>Giriş ve Profesyonel Paketindeki Her Şey</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>InsurUp CRM ile Tam Entegre Şablon Web Sitesi</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>AloTech Call-center Entegrasyonu</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Webhook Yönetimi ile CRM'deki Verilerin Dışa Aktarımı</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Yenileme Tekliflerini Müşteriye Otomatik SMS/E-mail ile Gönderimi</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>SLA Standartlarında Destek</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Giriş ve Profesyonel Paketindeki Her Şey</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>InsurUp CRM ile Tam Entegre Şablon Web Sitesi</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>AloTech Call-center Entegrasyonu</td>
                                            <td>Yakında</td>
                                        </tr>
                                        <tr>
                                            <td>Webhook Yönetimi ile CRM'deki Verilerin Dışa Aktarımı</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Yenileme Tekliflerini Müşteriye Otomatik SMS/E-mail ile Gönderimi</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>SLA Standartlarında Destek</td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="javascript:;" onClick={(e) => { focusSection('iletisim', e); selectProduct('Dijital Profesyonel Paket'); }} className="btn-menu w-max">Teklif Al</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageTable
