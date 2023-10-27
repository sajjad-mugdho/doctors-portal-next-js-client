import React from "react";
import Navbar from "../../ui/Navbar/Navbar";

const PaitentHeader = () => {
  const items = [
    {
      key: "1",
      lable: "Home",
      href: "/",
    },
    {
      key: "2",
      lable: "About",
      href: "/about-us",
    },
    {
      key: "3",
      lable: "Contact",
      href: "/contact-us",
    },
    {
      key: "4",
      lable: "Blog",
      href: "/blog",
    },
  ];
  return <Navbar items={items} />;
};

export default PaitentHeader;
