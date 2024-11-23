const Footer = () => {
  return (
    <footer className="bg-neutral-50">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-1/3 px-6 py-3 rounded-full text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="py-10 px-6 md:px-12 lg:px-32 grid grid-cols-1 md:grid-cols-5 gap-6 text-neutral-700">
        {/* About Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">BAZAAR</h3>
          <p className="text-sm">
            We bring you the latest trends and timeless essentials, all in one
            place. Discover quality, style, and unbeatable deals for every
            occasion!
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t py-6 px-6 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>BAZAAR © 2024. All Rights Reserved</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg"
            alt="PayPal"
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
