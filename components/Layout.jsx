import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hire a TukTuk || Tuk Tuk Tours</title>
      </Head>

      <div className="flex flex-col">
        <div className="navbarContainer">
          <Navbar />
        </div>

        <div className="mainContainer bg-neutral h-full">{children}</div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
