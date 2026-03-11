"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/layout/Projects";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100 h-fit min-h-dvh border">
      <Header />
      <div className="flex-1">
        <Projects />
      </div>
      <Footer />
      <div className="fixed bottom-0 bg-linear-to-tl from-white/20 to-transparent z-1000 left-0 h-10 w-full backdrop-blur-sm max-md:hidden"></div>
    </div>
  );
};

export default Home;
