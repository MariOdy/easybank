export type ILink = {
  id: number;
  path: string;
  ariaLabel: string;
  label: string;
};
export const headerLinks:ILink[] = [
  {
    id: 1,
    path: "#",
    ariaLabel: "Home page",
    label: "Home",
  },
  {
    id: 2,
    path: "#",
    ariaLabel: "About page",
    label: "About",
  },
  {
    id: 3,
    path: "#",
    ariaLabel: "Contact page",
    label: "Contact",
  },
  {
    id: 4,
    path: "#",
    ariaLabel: "Blog page",
    label: "Blog",
  },
  {
    id: 5,
    path: "#",
    ariaLabel: "Careers page",
    label: "Careers",
  },
];
