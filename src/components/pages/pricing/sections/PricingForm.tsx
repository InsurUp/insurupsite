'use client'
import React, { useMemo, useState } from "react";
import { focusSection } from "@/utils/helper";

type PlanKey = "starter" | "professional" | "digital";
type YesNo = "yes" | "no";
type Support = "basic" | "premium";

const PACKAGES: Record<PlanKey, { name: string; price: number }> = {
    starter: { name: "Tanışalım Paket", price: 0 },
    professional: { name: "Profesyonel Paket", price: 5000 },
    digital: { name: "Dijital Profesyonel Paket", price: 25000 },
};

const USER_PRICE = 150;
const PRODUCT_PRICE = 500;
// İleride kullanılabilir; şu an maliyete eklenmiyor
const PREMIUM_SUPPORT = 5000;

function PricingForm() {
    const [plan, setPlan] = useState<PlanKey>("starter");
    const [portal, setPortal] = useState<YesNo>("no");
    const [api, setApi] = useState<YesNo>("no");
    const [support, setSupport] = useState<Support>("basic");
    const [users, setUsers] = useState<number>(0);
    const [products, setProducts] = useState<number>(0);

    const isDigital = plan === "digital";

    const { totalText, breakdown, messageTitle, messageBody, extraChecks } = useMemo(() => {
        const selectedPlan = PACKAGES[plan];
        const base = selectedPlan.price;
        const usersCost = plan !== "starter" ? users * USER_PRICE : 0;
        const productsCost = plan !== "starter" ? products * PRODUCT_PRICE : 0;
        const supportCost = 0; // premium destek maliyeti eklenmiyor (gerektiğinde PREMIUM_SUPPORT eklenebilir)
        const total = base + usersCost + productsCost + supportCost;

        const totalText = total === 0 ? "Ücretsiz" : `${total.toLocaleString("tr-TR")} TL/ay`;

        const breakdown =
            plan === "starter"
                ? [{ text: "Tüm temel özellikler ücretsiz." }]
                : [
                    { text: `• ${base.toLocaleString("tr-TR")} TL Paket Ücreti` },
                    { text: `• ${users} Kullanıcı: ${usersCost.toLocaleString("tr-TR")} TL` },
                    { text: `• ${products} Ürün: ${productsCost.toLocaleString("tr-TR")} TL` },
                ];

        const messageTitle =
            plan === "starter"
                ? "Harika Bir Başlangıç Noktası!"
                : `${selectedPlan.name} ile Büyümeye Hazır Olun!`;
        const messageBody =
            plan === "starter"
                ? "Tanışalım Paketi ile InsurUp'ı ücretsiz deneyimleyin."
                : "Seçiminizle verimliliği artıracak güçlü bir yatırım yapıyorsunuz.";
        const extraChecks =
            plan === "starter"
                ? [
                    "250 Teklif / ay",
                    "50 Poliçe / ay",
                ]
                : [
                    "Gelişmiş Müşteri Yönetimi (CRM)",
                    "Sınırsız Teklif ve Poliçeleştirme",
                    ...(plan === "digital" ? ["Tüm Entegrasyonlar ve Raporlama"] : []),
                ];

        return { totalText, breakdown, messageTitle, messageBody, extraChecks };
    }, [plan, users, products]);

    // Etkileşimler
    const handlePlanClick = (nextPlan: PlanKey) => {
        setPlan(nextPlan);
        if (nextPlan === "starter") {
            setPortal("no");
            setApi("no");
            setSupport("basic");
        }
        if (nextPlan === "professional") {
            setPortal("no");
            setApi("no");
            setSupport("premium");
        }
        if (nextPlan === "digital") {
            setPortal("yes");
            setApi("yes");
            setSupport("premium");
        }
    };

    const handlePortalClick = (value: YesNo) => {
        setPortal(value);
        if (value === "yes") {
            setApi("yes");
            setSupport("premium");
            setPlan("digital");
        }
    };

    const handleApiClick = (value: YesNo) => {
        setApi(value);
        if (value === "yes") {
            setPortal("yes");
            setSupport("premium");
            setPlan("digital");
        }
    };

    const handleSupportClick = (value: Support) => {
        setSupport(value);
        if (value === "premium") {
            setPlan("professional");
        }
    };

    const handleUsersChange = (value: number) => {
        if (Number.isNaN(value) || value < 0) value = 0;
        if (value > 100) value = 100;
        setUsers(value);
    };

    const handleProductsChange = (value: number) => {
        if (Number.isNaN(value) || value < 0) value = 0;
        if (value > 100) value = 100;
        setProducts(value);
    };

    const handleStartWithPackage = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = document.querySelector<HTMLFormElement>("#contactForm");
        if (!form) {
            // Form yoksa sadece contact formuna odaklan
            focusSection(
                "contact-form",
                e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>
            );
            return;
        }

        const userField = form.querySelector<HTMLInputElement>('[name="member_number"]');
        if (userField) userField.value = String(users);

        const productField = form.querySelector<HTMLInputElement>('[name="insurance_company_count"]');
        if (productField) productField.value = String(products);

        const planField = form.querySelector<HTMLSelectElement>('[name="package"]');
        if (planField) {
            if (plan === "starter") planField.value = "Tanışalım Paket";
            if (plan === "professional") planField.value = "Profesyonel Paket";
            if (plan === "digital") planField.value = "Dijital Profesyonel Paket";
        }

        // Formik kontrollü form ile senkron için özel bir event yayınla
        try {
            const planLabel =
                plan === "starter" ? "Tanışalım Paket" :
                    plan === "professional" ? "Profesyonel Paket" :
                        "Dijital Profesyonel Paket";
            window.dispatchEvent(new CustomEvent("insurup:prefill-contact", {
                detail: {
                    member_number: String(users),
                    insurance_company_count: String(products),
                    package: planLabel
                }
            }));
        } catch { /* noop */ }

        focusSection(
            "contact-form",
            e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        );
    };

    return (
        <section className="py-5 bg-blue-50">
            <div className="container">
                <div id="pricing-calculator" className="card shadow-lg border-0 rounded-4 p-4">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <h3 className="fw-bold fs-4 mb-4 text-slate-900 text-center">Size Özel Fiyatınızı Oluşturun</h3>
                            <p className="text-center text-muted mb-4">Acentenizin ihtiyaçlarına göre aylık yatırımınızı saniyeler içinde hesaplayın.</p>

                            {/* Paket */}
                            <label className="fw-semibold">1. Paket Seçin</label>
                            <div className="d-flex gap-2 mb-3 tabs-bar">
                                <button
                                    className={`btn-toggle w-100${plan === "starter" ? " active" : ""}`}
                                    data-plan="starter"
                                    onClick={() => handlePlanClick("starter")}
                                >
                                    Tanışalım Paketi
                                </button>
                                <button
                                    className={`btn-toggle w-100${plan === "professional" ? " active" : ""}`}
                                    data-plan="professional"
                                    onClick={() => handlePlanClick("professional")}
                                >
                                    Profesyonel Paket
                                </button>
                                <button
                                    className={`btn-toggle w-100${plan === "digital" ? " active" : ""}`}
                                    data-plan="digital"
                                    onClick={() => handlePlanClick("digital")}
                                >
                                    Dijital Profesyonel Paket
                                </button>
                            </div>
                            <div id="plan-warning" className="text-primary small mb-3 d-none">Müşteri Portalı veya API Talebi için Dijital Profesyonel Paket gereklidir.</div>

                            {/* Kullanıcı */}
                            <label className="fw-semibold">2. Kullanıcı Sayısı</label>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <input
                                    type="number"
                                    id="users"
                                    className="form-control w-25"
                                    value={users}
                                    min={0}
                                    onChange={(ev) => handleUsersChange(parseInt(ev.target.value))}
                                    autoComplete="off"
                                />
                                <input
                                    type="range"
                                    id="users-range"
                                    min={0}
                                    max={100}
                                    value={users}
                                    onChange={(ev) => handleUsersChange(parseInt(ev.target.value))}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Ürün */}
                            <label className="fw-semibold">3. Sigorta Şirketi Sayısı</label>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <input
                                    type="number"
                                    id="products"
                                    className="form-control w-25"
                                    value={products}
                                    min={0}
                                    onChange={(ev) => handleProductsChange(parseInt(ev.target.value))}
                                    autoComplete="off"
                                />
                                <input
                                    type="range"
                                    id="products-range"
                                    min={0}
                                    max={100}
                                    value={products}
                                    onChange={(ev) => handleProductsChange(parseInt(ev.target.value))}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Portal */}
                            <label className="fw-semibold">4. Müşteri Portalı / Web Sitesi</label>
                            <div className="d-flex gap-2 mb-3">
                                <button
                                    className={`btn-toggle w-100${portal === "no" ? " active" : ""}${isDigital ? " disabled" : ""}`}
                                    data-portal="no"
                                    onClick={() => handlePortalClick("no")}
                                    disabled={isDigital}
                                >
                                    Hayır, istemiyorum
                                </button>
                                <button
                                    className={`btn-toggle w-100${portal === "yes" ? " active" : ""}`}
                                    data-portal="yes"
                                    onClick={() => handlePortalClick("yes")}
                                >
                                    Evet, istiyorum
                                </button>
                            </div>

                            {/* API */}
                            <label className="fw-semibold">5. API Talebi</label>
                            <div className="d-flex gap-2 mb-3">
                                <button
                                    className={`btn-toggle w-100${api === "no" ? " active" : ""}${isDigital ? " disabled" : ""}`}
                                    data-api="no"
                                    onClick={() => handleApiClick("no")}
                                    disabled={isDigital}
                                >
                                    Hayır, istemiyorum
                                </button>
                                <button
                                    className={`btn-toggle w-100${api === "yes" ? " active" : ""}`}
                                    data-api="yes"
                                    onClick={() => handleApiClick("yes")}
                                >
                                    Evet, istiyorum
                                </button>
                            </div>

                            {/* Destek */}
                            <label className="fw-semibold">6. Öncelikli Destek Talebi</label>
                            <div className="d-flex gap-2 mb-3">
                                <button
                                    className={`btn-toggle w-100${support === "basic" ? " active" : ""}${isDigital ? " disabled" : ""}`}
                                    data-support="basic"
                                    onClick={() => handleSupportClick("basic")}
                                    disabled={isDigital}
                                >
                                    Hayır, sıraya alınabilir
                                </button>
                                <button
                                    className={`btn-toggle w-100${support === "premium" ? " active" : ""}`}
                                    data-support="premium"
                                    onClick={() => handleSupportClick("premium")}
                                >
                                    Evet, istiyorum
                                </button>
                            </div>
                        </div>

                        {/* Sonuç */}
                        <div className="col-lg-6">
                            <div className="p-4 bg-slate-50 rounded-3 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <p className="text-muted fw-semibold mb-1">Tahmini Aylık Tutar</p>
                                    <h2 id="calc-total" className="fw-bold fs-1 text-slate-900">{totalText}</h2>
                                    <div id="calc-breakdown" className="small text-muted mt-2 border-top pt-2">
                                        {breakdown.map((b, idx) => (
                                            <p key={`br-${idx}`}>{b.text}</p>
                                        ))}
                                    </div>
                                    <div id="calc-message" className="mt-3">
                                        <h5 className="fw-bold text-slate-800">{messageTitle}</h5>
                                        <p className="text-muted small">{messageBody}</p>
                                        <ul className="mt-2 small">
                                            {extraChecks.map((c, i) => (
                                                <li key={`chk-${i}`}>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <button className="btn btn-blue w-100 mt-4" id="btn-package" onClick={handleStartWithPackage}>
                                    Bu Paketle Başla
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingForm