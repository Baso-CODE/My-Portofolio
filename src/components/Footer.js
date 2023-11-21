import React from "react";

// import social data
import { social } from "../data";

// import Logo
import Logo from "../assets/img/logo.svg";

// import logo
const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* social item */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div>
            <h1 className="text-bold">Baso Muhammad Afriza</h1>
          </div>
          {/* copyright */}
          <p>&copy; 2023 Baso M Afriza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
