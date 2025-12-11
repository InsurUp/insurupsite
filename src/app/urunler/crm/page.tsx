import CRMPlatform from "@/components/pages/product/CRMPlatform";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/urunler/crm");

function CRMPage() {
    return <CRMPlatform />;
}

export default CRMPage;

