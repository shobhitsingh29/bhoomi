import cn from "classnames";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { FC, useEffect, useState } from "react";
import s from "./ProductView.module.css";
import { Swatch, ProductSlider } from "@components/product";
import { Button, Container, Text, useUI } from "@components/ui";
import { getVariant, SelectedOptions } from "../helpers";
import WishlistButton from "@components/wishlist/WishlistButton";

interface Props {
  children?: any;
  product: any;
  className?: string;
}

const ProductView: FC<any> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [choices, setChoices] = useState<SelectedOptions>({});

  useEffect(() => {
    // Selects the default option
    product.variants[0].options?.forEach((v: any) => {
      setChoices((choices) => ({
        ...choices,
        [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase(),
      }));
    });
  }, []);

  const addToCart = async () => {
    setLoading(true);
  };

  return (
    <Container className="max-w-none w-full" clean>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: "website",
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <div className={cn(s.root, "fit")}>
        <div className={cn(s.productDisplay, "fit")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {` `}
              {product.price?.currencyCode}
            </div>
          </div>

          <div className={s.sliderContainer}>
            <ProductSlider key={product.id}></ProductSlider>
          </div>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options?.map((opt: any) => (
              <div className="pb-4" key={opt.displayName}>
                <h2 className="uppercase font-medium">{opt.displayName}</h2>
                <div className="flex flex-row py-4">
                  {opt.values.map((v: any, i: number) => {
                    const active = (choices as any)[
                      opt.displayName.toLowerCase()
                    ];

                    return (
                      <Swatch
                        key={`${opt.id}-${i}`}
                        active={v.label.toLowerCase() === active}
                        variant={opt.displayName}
                        color={v.hexColors ? v.hexColors[0] : ""}
                        label={v.label}
                        onClick={() => {
                          setChoices((choices) => {
                            return {
                              ...choices,
                              [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                            };
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="pb-14 break-words w-full max-w-xl">
              <Text html={product.descriptionHtml || product.description} />
            </div>
          </section>
          <div>
            <Button
              aria-label="Add to Cart"
              type="button"
              className={s.button}
              onClick={addToCart}
              loading={loading}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <WishlistButton
            className={s.wishlistButton}
            productId={product.id}
            variant={product.variants[0]! as any}
          />
        )}
      </div>
    </Container>
  );
};

export default ProductView;
