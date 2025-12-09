import Pricing from "@/components/pages/pricing/Pricing";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/fiyatlandirma");

function Fiyatlandirma() {
    return <Pricing />;
}

export default Fiyatlandirma;
