import logo from "../assets/logo1.svg";

const Navbar = () => {
    
      return (
  
        <header className="sticky top-0">
          <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="#" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9 invert" alt="KREDI Logo" height="500"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Hey Geeks</span>
              </a>
              <div className="flex items-center lg:order-2">
                <a href="#" className=" text-white focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Log in</a>
                <a href="#" className="text-white focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800">Get started</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 " aria-current="page">Home</a>
                  </li>                    
                  <li>
                    <a href="/about" className="block py-2 pr-4 pl-3  lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">About Us</a>
                  </li>
                  <li>
                    <a href="/trade" className="block py-2 pr-4 pl-3  lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">Trade</a>
                  </li>
                  <li>
                    <a href="/blogs" className="block py-2 pr-4 pl-3  lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">Blogs</a>
                  </li>
                  <li>
                    <a href="/contact" className="block py-2 pr-4 pl-3  lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }

export default Navbar;