import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-black via-45% to-purple-950 text-white mt-0 py-10 px-12">
      <div className="container mx-auto px-6">
        {/* Main Section - Flex container for large screens, stack vertically on small screens */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-16">
          
          {/* Left Section - Sawtify logo */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <h1 className="text-3xl font-semibold font-space-grotesk">Sawtify</h1>
            {/* Social Media Icons with Images */}
            <div className="flex space-x-3 mt-4">
  <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-400 p-4 rounded-full transform transition-transform duration-200 hover:scale-110">
    <img
      src="https://www.pngkey.com/png/full/20-200938_discord-png.png"
      alt="Discord"
      className="w-4 h-4"
    />
  </div>
  <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-300 p-4 rounded-full transform transition-transform duration-200 hover:scale-110">
    <img
      src="https://th.bing.com/th/id/R.bb87f7ec25835f0da5ffaa86cd42ad29?rik=O9urZGQB6SLRLg&pid=ImgRaw&r=0"
      alt="Telegram"
      className="w-4 h-4"
    />
  </div>
  <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-300 p-4 rounded-full transform transition-transform duration-200 hover:scale-110">
    <img
      src="https://freepnglogo.com/images/all_img/1691832708new-twitter-x-logo-white.png"
      alt="Twitter"
      className="w-4 h-4"
    />
  </div>
  <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-300 p-4 rounded-full transform transition-transform duration-200 hover:scale-110">
    <img
      src="https://th.bing.com/th/id/R.f7a8463eeb8134ebdcbba438ff42d69e?rik=itarQbg%2fdhn5hQ&pid=ImgRaw&r=0"
      alt="YouTube"
      className="w-4 h-4"
    />
  </div>
</div>

          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-col lg:flex-row font-space-grotesk space-x-0 lg:space-x-10 mb-6 lg:mb-0">
            <div>
              <h3 className=" py-3">Customer Support</h3>
              <ul className="space-y-1">
                <li>Terms of service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className=" py-3">Corporate Info</h3>
              <ul className="space-y-1 font-normal">
                <li>About us</li>
                <li>Brands</li>
                <li>Investors</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div>
              <h3 className=" py-3">Promotion</h3>
              <ul className="space-y-1">
                <li>Redeem Vouchers</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Help button */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-space-grotesk font-semibold">Need Any help?</h3>
            <button className="mt-2 font-semibold font-sans shadow-sm shadow-gray-400/50 bg-gradient-to-tr from-purple-700 via-pink-500 to-pink-600 text-white py-2 px-4 rounded-full transform transition-transform duration-200 hover:scale-105">
  Contact Sawtify
</button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t py-1 border-gray-400 w-full mt-8"></div>

        {/* Copyright */}
        <div className="mt-6 text-center font-space-grotesk text-sm">
          Copyright © 2024 Swatify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
