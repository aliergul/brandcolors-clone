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
      color: "#1da1f2",
    },
    {
      name: "facebook",
      icon: <FaFacebookF />,
      color: "#3b5998",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      color: "#0077b5",
    },
    {
      name: "pinterest",
      icon: <FaPinterest />,
      color: "#bd081c",
    },
  ];
  return items.map((item, i) => (
    <a
      key={i}
      href="true"
      style={{ color: "white", backgroundColor: item.color }}
    >
      {item.icon}
    </a>
  ));
};

export default SocialMedia;
