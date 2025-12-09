// Fiyatlandırma verileri ve tipleri

export type PackageKey = 'starter' | 'pro' | 'digital';

export interface PricingMetric {
    label: string;
    value: string;
}

export interface PricingPackage {
    key: PackageKey;
    name: string;
    description: string;
    priceText: string;
    pricePeriod?: string;
    metrics: PricingMetric[];
    ctaProductName: string;
}

export interface PricingFeature {
    label: string;
    values: Record<PackageKey, boolean | string>;
}

export interface PricingCategory {
    title: string;
    features: PricingFeature[];
}

export const pricingPackages: PricingPackage[] = [
    {
        key: 'starter',
        name: 'Tanışalım Paketi',
        description: 'Sigorta satışına başlamak isteyenler için temel özellikler.',
        priceText: 'Ücretsiz',
        metrics: [
            { label: 'Kullanıcı Başı', value: 'Sınırsız' },
            { label: 'Sigorta Şirketi Başı', value: 'Sınırsız' },
        ],
        ctaProductName: 'Tanışalım Paket',
    },
    {
        key: 'pro',
        name: 'Profesyonel Paketi',
        description: 'Gelişmiş özelliklerle işinizi büyütün ve daha fazla müşteri kazanın.',
        priceText: '5.000TL',
        pricePeriod: '/ay',
        metrics: [
            { label: 'Kullanıcı Başı', value: '150TL' },
            { label: 'Sigorta Şirketi Başı', value: '500TL' },
        ],
        ctaProductName: 'Profesyonel Paket',
    },
    {
        key: 'digital',
        name: 'Dijital Profesyonel Paketi',
        description: 'Entegre dijital çözümlerle online satışlarınızı hızlandırın.',
        priceText: '25.000TL',
        pricePeriod: '/ay',
        metrics: [
            { label: 'Kullanıcı Başı', value: '150TL' },
            { label: 'Sigorta Şirketi Başı', value: '500TL' },
        ],
        ctaProductName: 'Dijital Profesyonel Paket',
    },
];

export const pricingCategories: PricingCategory[] = [
    {
        title: 'Teklif & Poliçe Yönetimi',
        features: [
            {
                label: '30+ Şirket & 150+ Sigorta Ürününe Erişim',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Karşılaştırmalı Hızlı Teklif',
                values: {
                    starter: 'Aylık 250 Karşılaştırmalı Teklif',
                    pro: 'Sınırsız Karşılaştırmalı Teklif',
                    digital: 'Sınırsız Karşılaştırmalı Teklif',
                },
            },
            {
                label: '7 Farklı Branştan Online Teklif, 30+ Branştan Offline Teklif',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Prim ve Teklif Revizesi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Teminat Gruplama',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Teklif PDF’ine Erişim ve Müşteriye SMS/E-mail Gönderimi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: "Poliçe PDF'ine Erişim ve Müşteriye SMS/E-mail Gönderimi",
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: '3D, Kredi Kartı ve Açık Hesap ile Poliçeleştirme',
                values: {
                    starter: 'Aylık 50 Poliçeleşme',
                    pro: 'Sınırsız Poliçeleştirme',
                    digital: 'Sınırsız Poliçeleştirme',
                },
            },
            {
                label: 'Dosya Yoluyla (XML vb.) Poliçe Transferi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Web Servis ile Otomatik Poliçe Transferi',
                values: { starter: true, pro: true, digital: true },
            },
        ],
    },
    {
        title: 'Müşteri Yönetimi',
        features: [
            {
                label: 'Bireysel ve Kurumsal Müşteri Kartları',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Müşterinin Teklif ve Poliçe Geçmişi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Müşterinin İletişim Geçmişi',
                values: { starter: true, pro: true, digital: true },
            },
        ],
    },
    {
        title: 'Acente Yönetimi',
        features: [
            {
                label: 'Self Servis Yeni Kullanıcı Ekleme/Silinmesi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: '75+ Rol & Yetki Tanımlamaları',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Self Servis Sigorta Ürünü Entegrasyonu/Kaldırılması',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Şube & Departman Modülü',
                values: { starter: '⏳', pro: '⏳', digital: '⏳' },
            },
        ],
    },
    {
        title: 'Talep Yönetimi',
        features: [
            {
                label: 'Potansiyel Müşteri Talepleri',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Her Branşta Yeni Satış Talepleri ve Takibi/Yönetimi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Otomatik Yenileme Fırsatı Oluşturulması ve Takibi/Yönetimi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Otomatik Çapraz Satış Talepleri ve Takibi/Yönetimi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'İptal/Zeyil Talep Takibi/Yönetimi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Taleplerde Not Alımı',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Taleplerde Temsilci Ataması',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Otomatik Talep Skorlama ve Önceliklendirme',
                values: { starter: true, pro: true, digital: true },
            },
        ],
    },
    {
        title: 'Raporlama & Analitik',
        features: [
            {
                label: 'Poliçe Brüt Prim, Net Prim, Komisyon Raporu',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Yenileme Listesi Raporu',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Personel Bazında Performans Raporları',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Gelişmiş Filtreleme ve Her Tabloda Rapor Alma İmkanı',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Detaylı Cari ve Ön Muhasebe Raporlaması',
                values: { starter: '⏳', pro: '⏳', digital: '⏳' },
            },
        ],
    },
    {
        title: 'Web Sitesi ve Online Poliçe Satışı',
        features: [
            {
                label: 'InsurUp CRM ile Tam Entegre Şablon Web Sitesi',
                values: { starter: false, pro: false, digital: true },
            },
            {
                label: 'TCKN/VKN ile Yeni Kayıt ve OTP Doğrulama',
                values: { starter: false, pro: false, digital: true },
            },
            {
                label: '7/24 Online Müşteri Portalı',
                values: { starter: false, pro: false, digital: true },
            },
            {
                label: '7/24 Müşterilerin Kendi Teklif/Poliçelerine Ulaşabilmesi',
                values: { starter: false, pro: false, digital: true },
            },
            {
                label: '7/24 Online Teklif Alınabilmesi ve 3D ile Güvenli Ödeme',
                values: { starter: false, pro: false, digital: true },
            },
            {
                label: 'Yenileme Tekliflerinin Müşteriye Otomatik SMS/E-mail Gönderimi',
                values: { starter: false, pro: false, digital: true },
            },
            {
                label: 'Özel Tasarımlı Projelerde API Desteği',
                values: { starter: false, pro: false, digital: true },
            },
        ],
    },
    {
        title: 'Özel Entegrasyonlar',
        features: [
            {
                label: 'SMS/E-mail Gönderimi (Verimor, Teknomart ile Özel Entegrasyon)',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Call-Center Süreçleri (AloTech ile Özel Entegrasyon)',
                values: { starter: false, pro: true, digital: true },
            },
            {
                label: '3D Secure Doğrulama (Papara ve Paratika ile Özel Entegrasyon)',
                values: { starter: false, pro: true, digital: true },
            },
            {
                label: "Webhook ile CRM Verilerini Otomatik Dış API'a Gönderim",
                values: { starter: false, pro: true, digital: true },
            },
            {
                label: "InsurUp API'ları ile Özel Proje ve Entegrasyon",
                values: { starter: false, pro: false, digital: true },
            },
        ],
    },
    {
        title: 'Güvenlik & Uygunluk',
        features: [
            {
                label: 'OTP ile Giriş (2FA)',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'KVKK Uyumluluğu',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Günlük Veri Yedekleme & Saklama',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Mevzuat Uyumluluğu ve Mevzuatsal Önlemler',
                values: { starter: true, pro: true, digital: true },
            },
        ],
    },
    {
        title: 'Destek & Eğitim',
        features: [
            {
                label: 'Destek Portalından Hata, Talep ve Soru İletimi',
                values: { starter: true, pro: true, digital: true },
            },
            {
                label: 'Sürekli Destek',
                values: {
                    starter: 'İstekler Sıraya Alınır',
                    pro: 'Haftaiçi 9-18 Özel Taahhütlü Destek',
                    digital: 'Haftaiçi 9-18 Özel Taahhütlü Destek',
                },
            },
            {
                label: 'CRM & Dijitalleşme Eğitimleri',
                values: { starter: false, pro: false, digital: true },
            },
        ],
    },
];


