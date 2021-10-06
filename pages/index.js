import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import heroImage from "../public/heroImage.png";
import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GDG Jaén</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="w-full">
          <Image src={heroImage} />
        </div>
        <AboutUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
