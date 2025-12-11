"use client";

import Accordion from "@/components/common/Accordion";
import { insurChatFaqData } from "@/data/faq";

function Faqs() {
    return (
        <Accordion
            data={insurChatFaqData}
            title="Merak ettikleriniz"
            description="InsurChat yapay zeka destekli chatbot hakkında merak edilen en popüler soruları cevapları ile beraber sizin için derledik."
        />
    );
}

export default Faqs;

