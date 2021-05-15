import { Layout } from "@components/common";
import { Hero } from "@components/ui";

export default function Home() {
    return (
    <>
      <Hero
        headline="Know Your Soil"
        description="Knowing the Soil is where it all starts – the nutrient content and chemical composition of the soil defines how fertile the soil is and what level of plant life it can support and sustain on a consistent basis.
We help our farmers get the soil test done at our testing labs or bring in their existing soil health cards. Soil composition data points provide foundations for selecting the right kind of Agri Input (seed/fertilizer) and to generate advanced analytics e.g. yield predictions and Personalized Advisory."
      />
    </>
  );
}

Home.Layout = Layout;
