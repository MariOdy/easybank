import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./styles.module.scss";
import { headerLinks } from "./headerLinks";
import Link from "next/link";

const DropDownMenu: React.FC = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.dropdown_wrapper} />
      <Dialog.Content className={styles.dialog_wrapper}>
          {headerLinks.map(({ id, path, ariaLabel, label }) => {
            return (
              <Dialog.Close key={id} asChild>
                <Link href={path} aria-label={ariaLabel}>
                  {label}
                </Link>
              </Dialog.Close>
            );
          })}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default DropDownMenu;
