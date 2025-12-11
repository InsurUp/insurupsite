import Hero from "./sections/Hero"
import Benefits from "./sections/Benefits"
import Feature from "./sections/Feature"
import Price from "./sections/Price"
import Faqs from "./sections/Faqs"
import '@/style/mainpage.css'

function MainPage() { 
  return (
    <main>
      <Hero />
      <Benefits />
      <Feature />
      <Price />
      <Faqs />
    </main>
  )
}
export default MainPage
