import { ChangeEvent, useState } from "react";
import cn from "classnames";
import s from "./CartItem.module.css";
import { Trash, Plus, Minus } from "@components/icons";

const CartItem = ({
  item,
  currencyCode,
  ...rest
}: {
  item: {};
  currencyCode: string;
}) => {
  const [removing, setRemoving] = useState(false);

  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleBlur = () => {};
  const increaseQuantity = (n = 1) => {};
  const handleRemove = async () => {
    setRemoving(true);
  };
  // TODO: Add a type for this
  const options = (item as any).options;

  return (
    <li
      className={cn("flex flex-row space-x-8 py-8", {
        "opacity-75 pointer-events-none": removing,
      })}
      {...rest}
    >
      <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer"></div>
      <div className="flex-1 flex flex-col text-base">
        <div className="flex items-center mt-3">
          <button type="button" onClick={() => increaseQuantity(-1)}>
            <Minus width={18} height={18} />
          </button>
          <label>
            <input
              type="number"
              max={99}
              min={0}
              className={s.quantity}
              value={1}
              onChange={handleQuantity}
              onBlur={handleBlur}
            />
          </label>
          <button type="button" onClick={() => increaseQuantity(1)}>
            <Plus width={18} height={18} />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-2 text-base">
        <button
          className="flex justify-end outline-none"
          onClick={handleRemove}
        >
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
