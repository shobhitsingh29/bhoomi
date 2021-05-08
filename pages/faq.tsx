import type { GetStaticPropsContext } from "next";
import { Layout } from "@components/common";
import { Accordion } from "@components/ui";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
  };
}
export default function Faq() {
  const faq = [
    {
      headline: "What is a Soil Health Card?",
      description:
        "SHC is a printed report that a farmer will be handed over for each of his holdings. It will contain the status of his soil with respect to 12 parameters, namely N,P,K (Macro-nutrients) ; S (Secondary- nutrient) ; Zn, Fe, Cu, Mn, Bo (Micro - nutrients) ; and pH, EC, OC (Physical parameters). Based on this, the SHC will also indicate fertilizer recommendations and soil amendment required for the farm.",
    },
    {
      headline: "How can a farmer use a SHC?",
      description:
        "The card will contain an advisory based on the soil nutrient status of a farmer’s holding. It will show recommendations on dosage of different nutrients needed. Further, it will advise the farmer on the fertilizers and their quantities he should apply, and also the soil amendments that he should undertake, so as to realize optimal yields.",
    },
    {
      headline: "Will the farmer get a card every year and for every crop?",
      description:
        "It will be made available once in a cycle of 2 years, which will indicate the status of soil health of a farmer’s holding for that particular period. The SHC given in the next cycle of 2 years will be able to record the changes in the soil health for that subsequent period.",
    },
    {
      headline: "What are the norms of sampling?",
      description:
        "Soil samples will be drawn in a grid of 2.5 ha in irrigated area and 10 ha in rain- fed area with the help of GPS tools and revenue maps.",
    },
  ];
  return (
    <>
      {faq.map(({ description, headline }, index) => (
        <div key={index}>
          <Accordion description={description} headline={headline}></Accordion>
        </div>
      ))}
    </>
  );
}

Faq.Layout = Layout;
