import Hero from "./sections/web-satis/Hero"
import '@/style/websatis.css'
import HowItsWork from "./sections/web-satis/HowItsWork"
import PackageTable from "./sections/web-satis/PackageTable"
import PackageForm from "@/components/common/PackageForm"
import Faqs from "./sections/web-satis/Faqs"

function WebSalesPlatform() {
    return (
        <main>
            <Hero />
            <HowItsWork />
            <PackageTable />
            <PackageForm />
            <Faqs />
        </main>
    )
}

export default WebSalesPlatform