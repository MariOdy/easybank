import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

interface FeatureProps {
  logo: any;
  label: string;
  info: string;
}

const Feature: React.FC<FeatureProps> = ({ logo, label, info }) => {
  return (
    <div className={styles.feature}>
      <Image src={logo} alt={label} />
      <div>{label}</div>
      <p>{info}</p>
    </div>
  );
};

export default Feature;
