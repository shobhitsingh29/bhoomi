import { Layout } from "@components/common";
import { Grid, Marquee, Hero } from "@components/ui";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
    revalidate: 14400,
  };
}

export default function Home({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <>
      <Hero
        headline="Release Details: The Yeezy BOOST 350 V2 ‘Natural'"
        description="
        The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
        ‘Carbon’ iteration, and now release details have been locked in for
        this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
        shoe was originally called ‘Abez’, which translated to ‘Tin’ in
        Hebrew. It’s now undergone a name change, and will be referred to as
        ‘Natural’."
      />
    </>
  );
}

Home.Layout = Layout;
