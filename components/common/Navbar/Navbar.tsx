import { FC } from "react";
import Link from "next/link";
import { Logo, Container } from "@components/ui";
import { Searchbar, UserNav } from "@components/common";
import NavbarRoot from "./NavbarRoot";
import s from "./Navbar.module.css";
import cn from 'classnames'

const Navbar: FC = () => (
  <NavbarRoot>
    <Container>
      <div className=" relative flex flex-row justify-between py-4 align-center md:py-6 flex-wrap">
        <div className="flex items-centerflex items-center ">
          <Link href="/">
            <a aria-label="Logo" className={cn(
                s.logo
            )}>
              <Logo />
            </a>
          </Link>
            <nav className="hidden ml-6 space-x-4 lg:block">
                <Link href="/">
                    <a className={s.link}>Home</a>
                </Link>
                <Link href="/labs">
                    <a className={s.link}>Labs</a>
                </Link>
                <Link href="/blog">
                    <a className={s.link}>Blog</a>
                </Link>
                <Link href="/faq">
                    <a className={s.link}>FAQ</a>
                </Link>
            </nav>

            <nav   className={cn(
                "lg:hidden flex fixed",
                s.mobilebarContainer,
            )}>
                <Link href="/">
                    <a className={s.mobilebarTabItem}>Home</a>
                </Link>
                <Link href="/labs">
                    <a className={s.mobilebarTabItem}>Labs</a>
                </Link>
                <Link href="/blog">
                    <a className={s.mobilebarTabItem}>Blog</a>
                </Link>
                <Link href="/faq">
                    <a className={s.mobilebarTabItem}>FAQ</a>
                </Link>
            </nav>
        </div>

        <div
            className={cn(
                "justify-center flex-1 hidden lg:flex lg:ml-6"
            )}>
          <Searchbar />
        </div>

        <div className="flex justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>



      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
