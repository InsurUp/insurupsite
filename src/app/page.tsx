import MainPage from "@/components/pages/mainpage/MainPage";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/");

export default function Home() {
    return <MainPage />;
}
