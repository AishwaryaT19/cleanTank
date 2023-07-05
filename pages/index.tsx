import Head from "next/head";
import HomeBanner from "../modules/home/home-banner/home-banner";
import { companyName } from "../components/Info";
import { abContent } from "modules/home/about-intro/info";
import About from "modules/home/about-intro/about";
import Testimonials from "modules/home/testimonial/testimonials";

export default function Home() {
  return (
    <section id="Home">
      <Head>
        <title>{`${companyName} | Home`}</title>
        <meta name="description" content={companyName + " | " + abContent} />
      </Head>
      <HomeBanner />
      <About />
      <Testimonials />
    </section>
  );
}
