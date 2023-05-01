import localFont from "next/font/local";

import "@/styles/globals.css";
import "@/styles/container.css";
import Header from "@/components/Header";

export const metadata = {
  title: "easybank",
  description: "EasyBank landing page example",
};
const NTSomic = localFont({
  src: "../public/font/NTSomic-VF.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={NTSomic.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
