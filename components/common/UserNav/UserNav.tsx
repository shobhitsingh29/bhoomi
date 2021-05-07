import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { Heart, Bag } from "@components/icons";
import { useUI } from "@components/ui/context";
import s from "./UserNav.module.css";

interface Props {
  className?: string;
}

const UserNav: FC<Props> = ({ className }) => {
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI();

  return (
    <nav className={cn(s.root, className)}>
      <div className={s.mainContainer}>
        <ul className={s.list}>
          <li className={s.item} onClick={toggleSidebar}>
            <Bag />
          </li>
          {process.env.COMMERCE_WISHLIST_ENABLED && (
            <li className={s.item}>
              <Link href="/wishlist">
                <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                  <Heart />
                </a>
              </Link>
            </li>
          )}
          <li className={s.item}></li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
