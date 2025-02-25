import { Link } from "react-router-dom";
import HeroAbout from "../components/About/HeroAbout";
import AboutBanner from "../components/About/AboutBanner";
import AboutNewsletter from "../components/About/AboutNewsletter";
import AboutFeedback from "../components/About/AboutFeedback";

function About() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero bg-gray-200 h-70">
          <h2 className="pl-40 pt-30 text-3xl font-[Nova Flat]">About Us</h2>
          <div className="paragraph flex pl-38 pt-10">
            <ul>
              <li className="pr-20 cursor-pointer">
                <Link to="/"> Home</Link>
              </li>
            </ul>
            <div className="dash pr-20">-</div>
            <p>About Us</p>
          </div>
        </div>
      </div>

      <HeroAbout />
      <AboutBanner />
      <AboutNewsletter />
      <AboutFeedback />
    </>
  );
}

export default About;
