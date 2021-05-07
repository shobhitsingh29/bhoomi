import React, { FC, useState } from "react";
import cn from "classnames";
import { useUI } from "@components/ui";
import { Heart } from "@components/icons";

const WishlistButton: FC<any> = ({
  productId,
  variant,
  className,
  ...props
}: any) => {
  const { openModal, setModalView } = useUI();
  const [loading, setLoading] = useState(false);

  // @ts-ignore Wishlist is not always enabled
  const itemInWishlist = data?.items?.find(
    // @ts-ignore Wishlist is not always enabled
    (item) =>
      item.product_id === Number(productId) &&
      (item.variant_id as any) === Number(variant.id)
  );

  const handleWishlistChange = async (e: any) => {
    e.preventDefault();

    if (loading) return;

    // A login is required before adding an item to the wishlist

    setLoading(true);
  };

  return (
    <button
      aria-label="Add to wishlist"
      className={cn({ "opacity-50": loading }, className)}
      onClick={handleWishlistChange}
      {...props}
    >
      <Heart fill={itemInWishlist ? "var(--pink)" : "none"} />
    </button>
  );
};

export default WishlistButton;
