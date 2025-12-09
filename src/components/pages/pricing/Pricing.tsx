import Package from "./sections/Package";
import CTA from "./sections/CTA";
import "@/style/pricing.css";
import PricingForm from "./sections/PricingForm";
import Form from "./sections/Form";
function Pricing() {
  return (
    <main>
      <Package />
      <CTA />
      <PricingForm />
      <Form />
    </main>
  )
}

export default Pricing  