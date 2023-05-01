import React from "react";
import Image from "next/image";
import RequestInvite from "../Buttons/RequestInvite";

import BgIntro from "@/public/bg-intro-desktop.svg";
import Mockups from "@/public/image-mockups.svg";

import styles from "./styles.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero_wrapper}>
      <div className="container">
        <div className={styles.hero_info}>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestInvite />
        </div>
        <div className={styles.background}>
          <Image
            src={BgIntro}
            alt="Background colors"
            className={styles.bg_intro}
          />
          <Image src={Mockups} alt="mockups" className={styles.image_mockups} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
