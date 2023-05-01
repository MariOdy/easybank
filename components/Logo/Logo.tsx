import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface LogoProps {
  img: any;
}

const Logo: React.FC<LogoProps> = ({ img }) => {
  return (
    <Link href="#" aria-label="Home page" className={styles.logo_wrapper}>
      <Image src={img} alt="logo" width={139} height={20} />
    </Link>
  );
};

export default Logo;
