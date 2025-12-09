import WebSalesPlatform from "@/components/pages/product/WebSalesPlatform";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/urunler/web-satis-platformu");

function WebSatisPlatformuPage() {
    return <WebSalesPlatform />;
}

export default WebSatisPlatformuPage;
