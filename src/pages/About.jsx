import { Link } from "react-router-dom";
import HeroAbout from "../components/About/HeroAbout";

function About() {
  return (
    <>
    
    <div className="hero-wrapper">
      <div className="hero bg-gray-200 h-70">
        <h2 className="pl-40 pt-30 text-3xl">About Us</h2>
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
    <HeroAbout/>
    </>
  );
}


export default About;
