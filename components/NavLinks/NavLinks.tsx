"use client";
import React from "react";
import Link from "next/link";
import type { ILink } from "../Header/headerLinks";

interface NavLinksProps {
  dataLinks: ILink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ dataLinks }) => {
  if (!dataLinks) return null;
  return (
    <nav>
      {dataLinks?.map(({ id, path, ariaLabel, label }) => {
        return (
          <Link key={id} href={path} aria-label={ariaLabel}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
