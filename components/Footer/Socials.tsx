import React from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

import styles from "./styles.module.scss";

const Socials: React.FC = () => {
  return (
    <div className={styles.socials_wrapper}>
      <Link href="#" aria-label="Go to facebook">
        <BsFacebook />
      </Link>
      <Link href="#" aria-label="Go to youtube">
        <BsYoutube />
      </Link>
      <Link href="#" aria-label="Go to twitter">
        <BsTwitter />
      </Link>
      <Link href="#" aria-label="Go to pinterest">
        <BsPinterest />
      </Link>
      <Link href="#" aria-label="Go to instagram">
        <BsInstagram />
      </Link>
    </div>
  );
};

export default Socials;
