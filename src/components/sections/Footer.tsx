import React from "react";
import { blackColor, primaryColor } from "./Hero";
import { Logo } from "../ui/Logo";

export const Footer = () => {
  return (
    <footer
      className="p-16"
      style={{
        background: primaryColor,
        color: blackColor,
      }}
    >
      <div className="mb-8 flex justify-center">
        <Logo />
      </div>
      <ul className="flex flex-col items-center justify-center gap-6 text-sm  md:items-center md:flex-row mb-8">
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li className="hidden md:block">•</li>
        <li>
          <a href="/legal-cookies">Legal and Cookies policy</a>
        </li>
        <li className="hidden md:block">•</li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <p className="text-sm text-center ">© Copyright 2024.️ All rights reserved</p>
    </footer>
  );
};
