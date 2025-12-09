"use client";

import Accordion from "@/components/common/Accordion";
import { webSatisFaqData } from "@/data/faq";

function Faqs() {
    return (
        <Accordion
            data={webSatisFaqData}
            title="Merak ettikleriniz"
            description="InsurUp web satış platformu hakkında merak edilen en popüler soruları cevapları ile beraber sizin için derledik."
        />
    );
}

export default Faqs;
