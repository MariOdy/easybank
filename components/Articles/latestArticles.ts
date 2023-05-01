import Plane from "@/public/image-plane.jpg";
import Confetti from "@/public/image-confetti.jpg";
import Currency from "@/public/image-currency.jpg";
import Restaurant from "@/public/image-restaurant.jpg";

type LatestArtile = {
  id: number;
  img: any;
  label: string;
  author: string;
  info: string;
};

export const latestArticles: LatestArtile[] = [
  {
    id: 1,
    img: Currency,
    label: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    info: "The world is getting smaller and we're becoming more mobile.So why should you be forced to only receive money.",
  },
  {
    id: 2,
    img: Restaurant,
    label: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    info: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.",
  },
  {
    id: 3,
    img: Plane,
    label: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    info: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad.",
  },
  {
    id: 4,
    img: Confetti,
    label: "Take your Easybank card wherever you go",
    author: "Claire Robinson",
    info: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site .",
  },
];
