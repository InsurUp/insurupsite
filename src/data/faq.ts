export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FAQCategory {
    id: string;
    tabId: string;
    name: string;
    accordionId: string;
    items: FAQItem[];
}

// Web Satış Platformu FAQ Verileri
export const webSatisFaqData: FAQCategory[] = [
    {
        id: "getting-started",
        tabId: "getting-started-tab",
        name: "Başlarken",
        accordionId: "accordionGettingStarted",
        items: [
            {
                id: "gettingStartedQ1",
                question: "B2C platformumu nasıl kurarım?",
                answer: "B2C platformunuzu kurmak hızlı ve kolaydır. Bir şablon seçin, logo ve renk gibi ayarları özelleştirin, domaininizi girin ve yayına alın. Tüm süreç 5 dakikadan az sürer."
            },
            {
                id: "gettingStartedQ2",
                question: "Web sitemin görünümünü özelleştirebilir miyim?",
                answer: "Evet, markanıza uyacak şekilde birden fazla şablon arasından seçim yapabilir ve ana ile ikincil renkleri özelleştirebilirsiniz. İleride daha fazla özelleştirme seçeneği ve şablon sunulacaktır."
            },
            {
                id: "gettingStartedQ3",
                question: "Platform üzerinden hangi sigorta ürünlerini satabilirim?",
                answer: "Kasko, Trafik, Dask, Konut, TSS ve IMM olmak üzere altı farklı branşta poliçe satabilirsiniz. 30+ önde gelen sigorta şirketinin 300+ ürününe erişim sağlar."
            }
        ]
    },
    {
        id: "features",
        tabId: "features-tab",
        name: "Fonksiyonlar",
        accordionId: "accordionFeatures",
        items: [
            {
                id: "featuresQ1",
                question: "Müşteriler online olarak nasıl teklif alır?",
                answer: "Müşteriler bilgilerini girerek geniş bir sigorta ürünleri yelpazesinden anında teklif alabilirler. Belirli hizmetler için online teklif mevcut değilse, platform offline takip için talep toplar."
            },
            {
                id: "featuresQ2",
                question: "Müşteriler portal üzerinden poliçelerini yönetebilir mi?",
                answer: "Evet, müşteriler kişiselleştirilmiş portal üzerinden poliçelerini görebilir, bilgilerini güncelleyebilir ve sigorta geçmişlerine her zaman erişebilirler."
            }
        ]
    },
    {
        id: "security-support",
        tabId: "security-support-tab",
        name: "Güvenlik ve Destek",
        accordionId: "accordionSecuritySupport",
        items: [
            {
                id: "securityQ1",
                question: "Ödeme süreci ne kadar güvenli?",
                answer: "Platform, online ödemeler için 3D Secure teknolojisini kullanarak tüm işlemlerin güvenli ve dolandırıcılığa karşı korunmasını sağlar."
            }
        ]
    }
];

// Ana Sayfa FAQ Verileri
export const mainPageFaqData: FAQCategory[] = [
    {
        id: "pricing",
        tabId: "pricing-tab",
        name: "Ücretlendirme",
        accordionId: "accordionPricing",
        items: [
            {
                id: "pricingQ1",
                question: "InsurUp CRM için sunulan farklı paketler nelerdir?",
                answer: "InsurUp CRM, sigorta dağıtım kanallarının ihtiyaçlarına göre özelleştirilmiş üç farklı paket sunmaktadır: Standart Paket (temel sigorta teklif ve poliçeleştirme işlemleri), Dijital Paket (gelişmiş CRM özellikleri ve müşterilere 360 derece odak), Dijital Profesyonel Paket (tam entegre Sigorta Web Satış Platformu ve premium destek)."
            },
            {
                id: "pricingQ2",
                question: "Ücretlerinizi nasıl öğrenebilirim?",
                answer: "Her bir paketimizin aylık ücretlerini öğrenmek için lütfen doğrudan bizimle iletişime geçin. Ekibimiz, işletmenizin özel gereksinimlerini değerlendirdikten sonra size en uygun paketi ve fiyatlandırmayı sunacaktır."
            },
            {
                id: "pricingQ3",
                question: "InsurUp CRM'i kullanmaya başlarken kurulum ücreti var mı?",
                answer: "InsurUp CRM'i kullanmaya başlarken herhangi bir kurulum ücreti alınmamaktadır. Fiyatlandırma, seçtiğiniz paketin aylık kullanım ücretine dayanmaktadır ve bu ücret, paketin standart özelliklerini kapsar."
            }
        ]
    },
    {
        id: "usage",
        tabId: "usage-tab",
        name: "Kullanım",
        accordionId: "accordionUsage",
        items: [
            {
                id: "usageQ1",
                question: "InsurUp CRM kullanırken ne kadar bağımlıyız?",
                answer: "Hiç! InsurUp CRM, kendi kendine kullanılabilen bir sistemdir. Kendi kurulumunuzu yapabilir, kullanıcı ekleyebilir ve şirket ürünlerini aktifleştirebilirsiniz."
            },
            {
                id: "usageQ2",
                question: "InsurUp CRM ne kadar sürede kurulur?",
                answer: "Kurulum süreci genellikle dakikalar içinde tamamlanır ve tamamen online olarak gerçekleştirilebilir."
            },
            {
                id: "usageQ3",
                question: "InsurUp CRM'i indirmem mi gerek?",
                answer: "Hayır, InsurUp CRM web tabanlı bir sistemdir. Bilgisayar, tablet, telefon hatta televizyon gibi bir cihazdan internet tarayıcınız aracılığıyla erişebilirsiniz."
            }
        ]
    },
    {
        id: "technical-infrastructure",
        tabId: "technical-infrastructure-tab",
        name: "Teknik Altyapı",
        accordionId: "accordionInfrastructure",
        items: [
            {
                id: "infrastructureQ1",
                question: "Verilerim güvende mi?",
                answer: "Evet, verilerinizin güvenliği bizim önceliğimizdir. Verileriniz şifrelenir ve güvenli sunucularda saklanır. Düzenli yedeklemeler ve güvenlik önlemleri alınır."
            },
            {
                id: "infrastructureQ2",
                question: "Bulut tabanlı sistemden kastınız ne?",
                answer: "Bulut tabanlı sistem, verilerin internet üzerinden erişilebilen uzak sunucularda saklandığı ve işlendiği bir yapıdır. Bu, her yerden erişim ve yüksek güvenlik sağlar. InsurUp CRM bulut tabanlı bir sistemdir."
            },
            {
                id: "infrastructureQ3",
                question: "InsurUp CRM'e entegrasyon yapabilecek miyim?",
                answer: "Şu an dış sistem entegrasyonları mevcut değil, ancak 2025 yılı içerisinde SMS servisi, muhasebe sistemi gibi entegrasyonlar için planlamalar yapılıyor."
            }
        ]
    },
    {
        id: "insurance-products",
        tabId: "insurance-products-tab",
        name: "Sigorta Ürünleri",
        accordionId: "accordionInsurance",
        items: [
            {
                id: "insuranceQ1",
                question: "Kaç adet sigorta şirketine ve ürüne entegresiniz?",
                answer: "Şu anda 30+ sigorta şirketinin 300+ ürününe entegre durumdayız ve sektörün önde gelen şirketleriyle çalışıyoruz."
            },
            {
                id: "insuranceQ2",
                question: "Hangi branşlarda üretim yapabiliyorum?",
                answer: "Kasko, Trafik, DASK, Konut ve Tamamlayıcı Sağlık branşlarında üretim yapabilirsiniz. 2025'in ilk çeyreğinde +5 branş daha eklenmesi planlanıyor."
            },
            {
                id: "insuranceQ3",
                question: "Olmayan bir şirket ve ürün olduğunda ne olacak?",
                answer: "Tüm acentelerimizden gelen istekler doğrultusunda ürünler yazılım planına alınır ve kısa sürede entegre edilir. Herkese açık bir yol haritası yayınlanır."
            }
        ]
    }
];

