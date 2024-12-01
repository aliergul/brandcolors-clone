import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const SocialMedia = () => {
  const items = [
    {
      name: "twitter",
      icon: <FaTwitter />,
      color: "#0091f6",
    },
    {
      name: "facebook",
      icon: <FaFacebookF />,
      color: "#3e489a",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      color: "#006bb8",
    },
    {
      name: "pinterest",
      icon: <FaPinterest />,
      color: "#d40000",
    },
  ];
  return items.map((item, i) => (
    <a key={i} href style={{ color: "white", backgroundColor: item.color }}>
      {item.icon}
    </a>
  ));
};

export default SocialMedia;
