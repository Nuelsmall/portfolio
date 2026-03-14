"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Intro from "@/components/layout/intro";
import Projects from "@/components/layout/Projects";
import Reviews from "@/components/layout/Reviews";

const Home = () => {
  return (
    <div className="flex relative flex-col bg-gray-100 h-fit min-h-dvh border">
      <Header />
      <div className="flex-1">
        <Hero/>
        <Intro/>
        <Projects/>
        <Reviews/>
      </div>
      <Footer />
      <div className="fixed border bottom-0 bg-linear-to-tl from-white/20 to-transparent z-1000 left-0 h-10 backdrop-blur-sm max-md:hidden"></div>
    </div>
  );
};

export default Home;
