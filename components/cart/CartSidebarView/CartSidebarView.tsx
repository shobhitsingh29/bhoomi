import { FC } from "react";
import cn from "classnames";
import s from "./CartSidebarView.module.css";
import { UserNav } from "@components/common";
import { Bag, Cross, Check } from "@components/icons";

const CartSidebarView: FC = () => {
  const error = null;
  const success = null;

  return (
    <div>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="h-7 flex items-center">
            <button
              onClick={() => {}}
              aria-label="Close panel"
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-1">
            <UserNav />
          </div>
        </div>
      </header>
    </div>
  );
};

export default CartSidebarView;
