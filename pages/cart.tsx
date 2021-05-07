import type { GetStaticPropsContext } from "next";
import { Layout } from "@components/common";
import { Button, Text } from "@components/ui";
import { Bag, Cross, Check, MapPin, CreditCard } from "@components/icons";
import { CartItem } from "@components/cart";

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export default function Cart() {
  const error = null;
  const success = null;

  return (
    <div className="grid lg:grid-cols-12 w-full max-w-7xl mx-auto">
      <div className="lg:col-span-8" />
    </div>
  );
}

Cart.Layout = Layout;
