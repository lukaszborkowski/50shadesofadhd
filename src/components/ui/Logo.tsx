import React from "react";
import LogoIcon from "@/assets/logo2.png";
import Image from "next/image";

export const Logo = () => {
  return <Image src={"/logo.svg"} alt="Logo" width={240} height={80} />;
};
