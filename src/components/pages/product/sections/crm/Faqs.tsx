"use client";

import Accordion from "@/components/common/Accordion";
import { mainPageFaqData } from "@/data/faq";

function Faqs() {
    return (
        <Accordion
            data={mainPageFaqData}
            title="Merak ettikleriniz"
            description="InsurUp CRM hakkında merak edilen en popüler soruları cevapları ile beraber sizin için derledik."
        />
    );
}

export default Faqs;


