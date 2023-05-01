import React from "react";
import Logo from "../Logo";
import Socials from "./Socials";
import NavLinks from "../NavLinks";
import { footerLinks } from "./footerLinks";
import LogoLight from "@/public/logo-light.svg";
import RequestInvite from "../Buttons/RequestInvite";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.block}>
          <Logo img={LogoLight} />
          <Socials />
        </div>
        <NavLinks dataLinks={footerLinks} />
        <div className={`${styles.block} ${styles.right}`}>
          <RequestInvite />
          <span>© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
