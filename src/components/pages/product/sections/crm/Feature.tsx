import Image from 'next/image';

function Feature() {
    return (
        <>
            <section className="properties" id="properties">
                <div className="container">
                    <div className="row spacing-48">
                        <div className="col-lg-12" data-aos="fade-up"
                            data-aos-duration="1500">
                            <div className="section-badge">
                                <i className="icon-property"></i>
                                <span>Özellikler</span>
                            </div>
                            <h2>İşinizi büyütecek<br />
                                CRM özellikleri</h2>
                            <p>
                                Özelliklerin listesini, açıklamalarını, özelliğin aktiflik durumunu ve yeni özelliklerin yol haritasını hemen öğrenin.
                            </p>
                            <a href="javascript:;" className="btn-default" data-bs-toggle="modal" data-bs-target="#exampleModal">Tüm özellikleri gör</a>

                        </div>
                    </div>

                </div>
                <div className="properties-bg" data-aos="fade-up"
                    data-aos-duration="1500">
                    <Image src="/InsurUp/ozellik.png" alt="Özellikler Görseli" style={{ width: '100%', height: 'auto' }} width={500} height={300} quality={100} />
                </div>
            </section>


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className="prop-modal">
                                <div className="prop-modal-head">
                                    <span className="prop-title">Tüm Özellikler</span>
                                    <button data-bs-dismiss="modal" aria-label="Close">
                                        <Image src="/InsurUp/x.svg" alt="Close" width={24} height={24} quality={100} />
                                    </button>

                                </div>
                                <div className="prop-modal-body">
                                    <div className="prop-flex">
                                        <div className="prop-img">
                                            <Image src="/InsurUp/police-yonetimi.svg" alt="Sigorta Şirketi Ürünü Entegrasyonu" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Sigorta Şirketi Ürünü Entegrasyonu</span>
                                            <p>
                                                Acenteliğinizi yürüttüğünüz sigorta şirketlerinin ürünlerini kolayca entegre edebilir ve tek bir platformdan yönetebilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">  <Image src="/InsurUp/musteriler.svg" alt="Müşteri 360" width={48} height={48} quality={100} /></div>
                                        <div className="prop-text">
                                            <span className="prop-title">Müşteri 360</span>
                                            <p>
                                                Müşterilerinizin iletişim bilgilerinden poliçe geçmişine kadar tüm verilerine tek bir yerden ulaşabilir ve 360 derecelik bir bakış açısıyla hizmet sunabilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">
                                            <Image src="/InsurUp/raporlar.svg" alt="Online Karşılaştırmalı Teklif" width={48} height={48} quality={100} />

                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Online Karşılaştırmalı Teklif</span>
                                            <p>
                                                30+ sigorta şirketinden 300+ ürün için saniyeler içinde karşılaştırmalı teklifler alabilirsiniz. Kasko, trafik, konut, DASK ve TSS branşlarında hızlı ve detaylı teklif sunabilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">
                                            <Image src="/InsurUp/karsilastirma-raporu.svg" alt="Karşılaştırma Raporu" width={48} height={48} quality={100} />

                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Karşılaştırma Raporu</span>
                                            <p>
                                                Farklı sigorta tekliflerini teminat bazında karşılaştırabilir ve bu raporları müşterilerinize anında SMS veya e-posta ile iletebilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/sigorta-urun-paketleme.svg" alt="Teminat Paketleme" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Teminat Paketleme</span>
                                            <p>
                                                Kasko, konut gibi branşlarda sık kullandığınız teminatları önceden paketleyebilir ve her teklif talebinde zamandan tasarruf edebilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/online-police.svg" alt="Online Poliçeleştirme" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Online Poliçeleştirme</span>
                                            <p>
                                                Sigorta tekliflerinden herhangi birini online olarak 3D güvenli ödeme veya açık hesap gibi seçeneklerle anında poliçeleştirebilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/insurup-ai.svg" alt="Sigorta Teklifi Revizesi" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Sigorta Teklifi Revizesi</span>
                                            <p>
                                                Mevcut tekliflerdeki teminatları kolayca güncelleyebilir ve müşterilerinize en uygun teklifi sunabilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/email-sms-gonderimi.svg" alt="E-mail/SMS Gönderimi" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">E-mail/SMS Gönderimi</span>
                                            <p>
                                                Teklif belgesi, ön bilgilendirme formu veya poliçe belgesini müşterilerinize doğrudan e-posta veya SMS ile gönderebilirsiniz. İletişim sürecinizi otomatikleştirerek zaman kazanabilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/teklif-yonetimi.svg" alt="Kullanıcı ve Rol Yönetimi" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Kullanıcı ve Rol Yönetimi</span>
                                            <p>
                                                İhtiyacınıza göre sınırsız sayıda kullanıcı ekleyebilir ve her kullanıcının hangi rollere erişebileceğini dinamik olarak belirleyebilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/gorevlerim.svg" alt="Liste Sayfaları Raporları" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Liste Sayfaları Raporları</span>
                                            <p>
                                                Poliçeler, teklifler ve müşteriler gibi liste sayfalarını özelleştirebilir ve istediğiniz verileri Excel formatında raporlayabilirsiniz. Böylece iş analizlerinizi kolaylaştırabilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/uretim-mutabakati.svg" alt="Üretim Mutabakatı" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Üretim Mutabakatı <span className="ceyrek">(4. Çeyrek)</span></span>
                                            <p>
                                                Sigorta şirketi ekranlarından oluşturulan poliçeler de dahil tüm poliçelerinizi tek bir sistemde toplayabileceksiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/on-muhasebe.svg" alt="Ön Muhasebe" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Ön Muhasebe <span className="ceyrek">(4. Çeyrek)</span></span>
                                            <p>
                                                Oluşturulan her poliçenin muhasebesini ön muhasebe özellikleri sayesinde kolayca takip edebileceksiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/firsatlar.svg" alt="Lead ve Fırsat" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Lead ve Fırsat <span className="ceyrek">(4. Çeyrek)</span></span>
                                            <p>
                                                Lead ve fırsat yapısıyla potansiyel müşterilerinizi yönetebilecek, satış fırsatlarını takip edebilecek ve daha fazla teklif kapatabileceksiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/dashboard.svg" alt="Dinamik Dashboard" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Dinamik Dashboard <span className="ceyrek">(4. Çeyrek)</span></span>
                                            <p>
                                                Dinamik dashboardlar sayesinde genel üretimlerinizi, size atanmış işleri ve daha fazlasını tek bir ekranda görebileceksiniz. Performansınızı takip etmek ve iş akışınızı optimize etmek çok daha kolay olacak.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/kampanyalar.svg" alt="Şube Hiyerarşisi" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Şube Hiyerarşisi <span className="ceyrek">(4. Çeyrek)</span></span>
                                            <p>
                                                Çeşitli şubeler oluşturabilecek, şubeler arasında yetkilendirmeler yapabilecek ve şube-departman hiyerarşilerini kolayca yönetebileceksiniz.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="prop-hr"> </span>
                                    <div className="prop-flex">
                                        <div className="prop-img">            <Image src="/InsurUp/red-arrow.svg" alt="Dijital Sigortacılık Entegrasyonu" width={48} height={48} quality={100} />
                                        </div>
                                        <div className="prop-text">
                                            <span className="prop-title">Dijital Sigortacılık Entegrasyonu <span className="ceyrek">(4. Çeyrek)</span></span>
                                            <p>
                                                Web sitenizden satış yapmak için InsurUp CRM ile web entegrasyonu oluşturabileceksiniz. Sistemler arası entegrasyon sayesinde kendi web sitenizden online sigorta satışı yapabilecek ve dijital dünyada büyüyeceksiniz.
                                            </p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Feature


