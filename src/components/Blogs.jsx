const Blogs = () => {
  return (
    <section id="blogs" className=" bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">
            List of community events and hackathons
          </h2>
          <p className=" sm:text-xl text-gray-400">
            Here at Kredi, we aim at informing the students on various community events and hackathons happening all over India.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg object-cover"
                src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/6e1fdb1f76ff4aa28f3fe89d79d9f618/assets/favicon/898.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                  Hack4Bengal
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">
                Hack4Bengal believes in building for the future, empowering people irrespective of their fields, to showcase their skills and creativity for solving real-life problems.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
               src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/6e1fdb1f76ff4aa28f3fe89d79d9f618/assets/favicon/898.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Hack4Bengal
                </h5>
              </a>
              <p className="mb-3 font-normal  text-gray-400">
                Hack4Bengal believes in building for the future, empowering people irrespective of their fields, to showcase their skills and creativity for solving real-life problems.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm  rounded-lg shadow bg-gray-800 border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/6e1fdb1f76ff4aa28f3fe89d79d9f618/assets/favicon/898.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Hack4Bengal
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">
                Hack4Bengal believes in building for the future, empowering people irrespective of their fields, to showcase their skills and creativity for solving real-life problems.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};
export default Blogs;
