import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-lg mx-auto px-6 lg:px-12">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-12">
          {/* Logo Section */}
          <div className="w-full sm:w-2/12">
            <a href="/">
              <img className="logo" src="img/logo-footer.png" alt="Desart" />
            </a>
          </div>

          {/* Navigation Section */}
          <div className="w-full sm:w-10/12">
            <ul className="flex flex-wrap justify-end space-x-6">
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-white hover:text-gray-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 opacity-65 mb-8" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About</h3>
            <p className="text-gray-300 mb-4">
              We’ve received numerous awards for our work and create
              applications that have gained global popularity.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaLinkedin, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaInstagram, link: "#" },
              ].map(({ icon: Icon, link }, index) => (
                <a key={index} href={link} className="icon-box">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Brand Identity",
                "Marketing Strategy",
                "App Development",
                "eCommerce",
                "Landing Pages",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services-detail"
                    className="text-white hover:text-gray-400 transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {[
                {
                  icon: FaLocationDot,
                  text: "694-762 Dekalb Ave, Brooklyn, NY 11216 USA",
                },
                { icon: FaPhoneAlt, text: "+1 6548 96 21" },
                { icon: IoMdMail, text: "info@sitename.com" },
              ].map(({ icon: Icon, text }, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 space-x-3"
                >
                  <div className="icon-box">
                    <Icon />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center mt-12 text-gray-400 text-sm">
          <div>
            &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
