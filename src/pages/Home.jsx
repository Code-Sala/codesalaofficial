import AboutBanner from "../components/About/AboutBanner";
import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import TeamSection from "../components/Home/TeamSection";

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AboutBanner />
      <TeamSection />
    </div>
  );
}

export default Home;
