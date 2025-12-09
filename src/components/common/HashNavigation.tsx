"use client";

import { useEffect } from "react";

export default function HashNavigation() {
    useEffect(() => {
        const hash = window.location.hash;

        if (hash === "#ozellikler") {
            // Bootstrap modal açma
            const modalElement = document.getElementById("exampleModal");
            if (modalElement && typeof window !== "undefined") {
                import("bootstrap").then((bootstrap) => {
                    const modal = new bootstrap.Modal(modalElement);
                    modal.show();
                });
            }
        } else if (hash === "#price") {
            const priceElement = document.getElementById("price");
            if (priceElement) {
                const scrollDiv = priceElement.offsetTop;
                window.scrollTo({
                    top: scrollDiv,
                    behavior: "smooth",
                });
            }
        } else if (hash === "#iletisim") {
            const contactElement = document.getElementById("iletisim");
            if (contactElement) {
                const scrollDiv = contactElement.offsetTop;
                window.scrollTo({
                    top: scrollDiv,
                    behavior: "smooth",
                });
            }
        } else if (hash) {
            // Genel hash scroll desteği
            const targetElement = document.getElementById(hash.slice(1));
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, []);

    return null;
}

