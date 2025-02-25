import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container-lg mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img className="h-10" src="img/logo.png" alt="Desart" />
          </Link>

          {/* Navbar Toggler (Mobile) */}
          <button
            className="lg:hidden text-gray-700"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-2xl">&#9776;</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <Link className="text-gray-700 hover:text-black" to="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-black" to="/about">
              About
            </Link>
            <Link className="text-gray-700 hover:text-black" to="/services">
              Services
            </Link>
            {/* Dropdown for Services */}

            {/* Dropdown for Portfolio */}
            <div className="relative">
              <button className="text-gray-700 hover:text-black">
                Portfolio
              </button>
              <div className="dropdown-menu absolute hidden bg-white text-gray-700 shadow-lg rounded mt-2 w-48">
                <Link className="block px-4 py-2" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="block px-4 py-2" to="/portfolio-details">
                  Portfolio Details
                </Link>
              </div>
            </div>

            {/* Dropdown for Blog */}
            <div className="relative">
              <button className="text-gray-700 hover:text-black">Blog</button>
              <div className="dropdown-menu absolute hidden bg-white text-gray-700 shadow-lg rounded mt-2 w-48">
                <Link className="block px-4 py-2" to="/blog-single">
                  Blog Single
                </Link>
              </div>
            </div>

            <Link className="text-gray-700 hover:text-black" to="/contact">
              Contacts
            </Link>
          </div>

          {/* Search Bar */}
          <div className="lg:flex items-center hidden">
            <input
              className="form-input px-4 py-2 rounded-lg border-2 border-gray-300 mr-4"
              type="search"
              placeholder="Search"
            />
            <button className="btn bg-blue-500 text-white px-4 py-2 rounded-lg">
              <i className="zmdi zmdi-search"></i> Search
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
