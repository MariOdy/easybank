import React from "react";
import OnlineBanking from "@/public/icon-online.svg";
import SimpleBudgeting from "@/public/icon-budgeting.svg";
import Onboarding from "@/public/icon-onboarding.svg";
import Api from "@/public/icon-api.svg";

import styles from "./styles.module.scss";
import Feature from "./Feature";

const allArguments = [
  {
    id: 1,
    logo: OnlineBanking,
    label: "Online Banking",
    info: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    logo: SimpleBudgeting,
    label: "Simple Budgeting",
    info: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    id: 3,
    logo: Onboarding,
    label: "Fast Onboarding",
    info: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    logo: Api,
    label: "Open API",
    info: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Arguments: React.FC = () => {
  return (
    <div className={styles.arguments_wrapper}>
      <div className="container">
        <div className="flex flex-col gap-2">
          <h3>Why choose Easybank?</h3>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className={styles.features_wrapper}>
          {allArguments.map(({ id, label, logo, info }) => {
            return <Feature key={id} logo={logo} label={label} info={info} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Arguments;
