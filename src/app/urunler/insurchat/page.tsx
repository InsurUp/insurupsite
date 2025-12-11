import InsurChatPlatform from "@/components/pages/product/InsurChatPlatform";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/urunler/insurchat");

function InsurChatPage() {
    return <InsurChatPlatform />;
}

export default InsurChatPage;

