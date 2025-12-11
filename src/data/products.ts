export interface ProductFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ProductStep {
    image: string;
    title: string;
    description: string;
}

export interface ProductInfo {
    badge: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
}

export interface ProductConfig {
    id: string;
    slug: string;
    name: string;
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroDescription: string;
    heroImage: string;
    howItWorksTitle: string;
    howItWorksDescription: string;
    steps: ProductStep[];
    infoSections: ProductInfo[];
    platformImage: string;
}

// Web Satış Platformu Konfigürasyonu
export const webSalesConfig: ProductConfig = {
    id: "web-satis",
    slug: "web-satis-platformu",
    name: "Web Satış Platformu",
    badge: "Online Sigorta Satış Sistemi",
    heroTitle: "Sigorta Web Satış",
    heroHighlight: "Platformu",
    heroDescription: "InsurUp ile sigorta acenteleri, müşterilerine hızlı ve güvenli online poliçe satış deneyimi sunar.",
    heroImage: "/banner-laptop-yeni.png",
    howItWorksTitle: "Dakikalar İçinde Online Satışa Başlayın",
    howItWorksDescription: "Sigorta satışınızı online dünyaya taşıyın. Kullanıcı dostu arayüzümüz ile hızlıca sitenizi oluşturun, özelleştirin ve yayına alın.",
    steps: [
        {
            image: "/tasarim-sec-yeni.png",
            title: "Tasarım Seç",
            description: "Web sitenizin şablonunu seçin."
        },
        {
            image: "/ozellikler-yeni.png",
            title: "Özelleştir",
            description: "Logo, renk ve ürünleri ayarlayın."
        },
        {
            image: "/InsurUp/stream-yeni-image.png",
            title: "Yayına Al",
            description: "Domain gir ve başlatın."
        }
    ],
    infoSections: [
        {
            badge: "Karşılaştırmalı Teklif",
            title: "Anında Teklif",
            description: "Müşterilerinize 6 branşta 30+ şirketin 300+ sigorta ürünü için anında online teklif sunun. Ek olarak offline olarak sorunsuz talep toplama imkanı sağlayın.",
            features: [
                "Online saniyeler içinde teklif",
                "300+ ürün, 30+ şirket",
                "Offline talep toplama"
            ],
            image: "/video/aninda-teklif.gif",
            imageAlt: "Anında Teklif Görseli",
            reverse: false
        },
        {
            badge: "Sigortalı Giriş",
            title: "Müşteri Portalı",
            description: "Müşterilerinize poliçelerine erişebilecekleri, bilgilerini yönetebilecekleri ve sigorta geçmişlerini 7/24 her cihazdan görebilecekleri kişiselleştirilmiş bir portal sunun.",
            features: [
                "7/24 poliçe erişimi",
                "Kişisel bilgi yönetimi",
                "Sigorta geçmişi görüntüleme"
            ],
            image: "/video/musteri-portali.gif",
            imageAlt: "Müşteri Portalı Görseli",
            reverse: true
        },
        {
            badge: "Poliçeleştirme",
            title: "Güvenli Ödeme",
            description: "Müşterilerinizin sigorta poliçeleri için 3D Secure teknolojisiyle güvenli online ödeme yapmalarını sağlayın, işlem güvenliğini ve sektör standartlarına uyumluluğu garantileyin.",
            features: [
                "3D Secure teknolojisi",
                "Güvenli online işlemler",
                "Sektör uyumlu ödemeler"
            ],
            image: "/video/odeme.gif",
            imageAlt: "Güvenli Ödeme Görseli",
            reverse: false
        }
    ],
    platformImage: "/platform-yeni.png"
};

// InsurChat Konfigürasyonu
export const insurChatConfig: ProductConfig = {
    id: "insurchat",
    slug: "insurchat",
    name: "InsurChat",
    badge: "Yapay Zeka Destekli Chatbot",
    heroTitle: "Sigorta Satışında",
    heroHighlight: "AI Asistan",
    heroDescription: "InsurChat ile müşterilerinize 7/24 yapay zeka destekli chatbot aracılığıyla anında destek ve teklif sunun.",
    heroImage: "/banner-laptop-yeni.png",
    howItWorksTitle: "Dakikalar İçinde AI Asistanınızı Kurun",
    howItWorksDescription: "Yapay zeka destekli chatbot'unuzu hızlıca kurun ve müşterilerinize 7/24 kesintisiz destek sunmaya başlayın.",
    steps: [
        {
            image: "/tasarim-sec-yeni.png",
            title: "Chatbot'u Yapılandır",
            description: "AI asistanınızı kişiselleştirin."
        },
        {
            image: "/ozellikler-yeni.png",
            title: "Web Sitenize Entegre Edin",
            description: "Tek satır kod ile entegrasyon."
        },
        {
            image: "/InsurUp/stream-yeni-image.png",
            title: "Yayına Alın",
            description: "7/24 müşteri desteği başlasın."
        }
    ],
    infoSections: [
        {
            badge: "Yapay Zeka",
            title: "Akıllı Müşteri Desteği",
            description: "Yapay zeka destekli chatbot'umuz müşterilerinizin sorularını anında yanıtlar, sigorta ürünleri hakkında bilgi verir ve teklif sürecini başlatır.",
            features: [
                "7/24 kesintisiz destek",
                "Doğal dil işleme",
                "Anlık yanıt süresi"
            ],
            image: "/video/aninda-teklif.gif",
            imageAlt: "AI Chatbot Görseli",
            reverse: false
        },
        {
            badge: "Otomasyon",
            title: "Otomatik Teklif Toplama",
            description: "Chatbot üzerinden müşteri bilgilerini otomatik toplayın ve CRM'inize aktarın. Manuel veri girişine son verin.",
            features: [
                "Otomatik form doldurma",
                "CRM entegrasyonu",
                "Lead yönetimi"
            ],
            image: "/video/musteri-portali.gif",
            imageAlt: "Otomasyon Görseli",
            reverse: true
        },
        {
            badge: "Analitik",
            title: "Detaylı Raporlama",
            description: "Chatbot performansını, müşteri etkileşimlerini ve dönüşüm oranlarını detaylı raporlarla takip edin.",
            features: [
                "Gerçek zamanlı analitik",
                "Dönüşüm takibi",
                "Performans metrikleri"
            ],
            image: "/video/odeme.gif",
            imageAlt: "Analitik Görseli",
            reverse: false
        }
    ],
    platformImage: "/platform-yeni.png"
};

// Tüm ürünlerin listesi
export const allProducts: ProductConfig[] = [
    webSalesConfig,
    insurChatConfig
];

// Slug'a göre ürün getir
export const getProductBySlug = (slug: string): ProductConfig | undefined => {
    return allProducts.find(p => p.slug === slug);
};

