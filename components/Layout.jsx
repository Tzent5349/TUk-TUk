import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hire a TukTuk || Tuk Tuk Tours</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
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
