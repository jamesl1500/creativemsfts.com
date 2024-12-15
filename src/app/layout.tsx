import type { Metadata } from "next";

// Templates
import Header from "../templates/header";
import Footer from "../templates/footer";

// Styles
import "../styles/style.scss";

export const metadata: Metadata = {
  title: "Creative MSFTS",
  description: "A Creative Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise"></div>
        <div className="header-hold">
          <div className="header-background"></div>
          <Header />
        </div>
        <div className="content-hold">
          {children}
        </div>
        <div className="footer-hold">
          <Footer />
        </div>
      </body>
    </html>
  );
}
