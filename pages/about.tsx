import Head from "next/head";
import AboutBanner from "modules/about/banner/about-banner";
import Description from "modules/about/description/description";
import Clients from "modules/about/client/clients";
import { companyName } from "components/Info";
import { descContent } from "modules/about/description/info";

export default function About() {
  return (
    <section id="About">
      <Head>
        <title>{`${companyName} | About Us`}</title>
        <meta name="description" content={companyName + " | " + descContent} />
      </Head>
      <AboutBanner />
      <Description />
      <Clients />
    </section>
  );
}
