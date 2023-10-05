import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Head>
        <title>They Odyssey Of Cosmos</title>
        <meta
          name="description"
          content="They Odyssey Of Cosmos Website"
        />
        <link rel="icon" href="/cosmos.png" />
      </Head>
      <Navbar />
      <div id="mainContainer">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
    