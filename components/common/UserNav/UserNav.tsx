import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { Heart, Bag } from "@components/icons";
import { useUI } from "@components/ui/context";
import s from "./UserNav.module.css";
import { Avatar } from "@components/common";

interface Props {
  className?: string;
}

const UserNav: FC<any> = ({ className }) => {
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI();

  return (
    <nav className={cn(s.root, className)}>
      <div className={s.mainContainer}>
        <ul className={s.list}>
          <li className={s.item} onClick={toggleSidebar}>
            <Bag />
          </li>
          <li className={s.item}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
          <li className={s.item}>
            <button
              className={s.avatarButton}
              aria-label="Menu"
              onClick={() => openModal()}
            >
              <Avatar />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
