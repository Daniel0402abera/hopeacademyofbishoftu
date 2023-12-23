'use client'
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Card from "../components/card";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>HopeAcademy - Hopeful Hearts, Brighter Futures.</title>
        <meta
          name="description"
          content="Hope academy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Hero />
      <SectionTitle
        pretitle="Our Academy"
        title=" Why should you choose Hope Academy?">
        Sound Foundation for Life, Scientifically Design Curriculum For Perfect Holistic Development.<br/> We are committed to shaping the future through our children.
      </SectionTitle>
      <Card data={benefitOne} />
      <Card imgPos="right" data={benefitTwo} />
      {/* <Card imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Watch a video"
        title="Overview of the school">
        This section is to highlight a promo or demo video of your school.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="OUR LATEST NEWS ">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Here is frequently asked questions by our students, family and our school community
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;