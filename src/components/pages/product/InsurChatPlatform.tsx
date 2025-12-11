import Hero from "./sections/insurchat/Hero"
import '@/style/websatis.css'
import HowItsWork from "./sections/insurchat/HowItsWork"
import PackageTable from "./sections/web-satis/PackageTable"
import PackageForm from "@/components/common/PackageForm"
import Faqs from "./sections/insurchat/Faqs"

function InsurChatPlatform() {
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

export default InsurChatPlatform

