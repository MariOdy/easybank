"use client";
import React from "react";
import Logo from "@/components/Logo";
import LogoDark from "@/public/logo.svg";
import DropDownMenu from "./DropDownMenu";
import { headerLinks } from "./headerLinks";
import NavLinks from "@/components/NavLinks";
import { FiMenu, FiX } from "react-icons/fi";
import * as Dialog from "@radix-ui/react-dialog";
import RequestInvite from "@/components/Buttons/RequestInvite";

import styles from "./styles.module.scss";

const Header: React.FC = () => (
  <header className={styles.header_wrapper}>
    <div className="container">
      <Logo img={LogoDark} />
      <div className={styles.nav_wrapper}>
        <NavLinks dataLinks={headerLinks} />
        <RequestInvite />
      </div>
      <Dialog.Root>
        <Dialog.Trigger className={styles.trigger_btn}>
          <FiX />
          <FiMenu />
        </Dialog.Trigger>
        <DropDownMenu />
      </Dialog.Root>
    </div>
  </header>
);

export default Header;
