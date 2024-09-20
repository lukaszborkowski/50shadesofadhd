//@ts-nocheck
"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ShadowRectBackground } from "../ui/ShadowRectBackground";
import Image from "next/image";
import { Logo } from "../ui/Logo";
import { PlayIcon, PauseIcon } from "@heroicons/react/solid"; // Zakładam, że używasz HeroIcons
import { LampContainer } from "./Lamp";
import { AnimatedTooltip } from "./AnimatedTooltip";
import { QuizButton } from "./QuizButton";

export const blackColor = "#322625";
export const primaryColor = "#FFD140";

export const primaryButtonClassName =
  "bg-[#322625] text-white text-lg font-semibold py-2 px-8 rounded-lg  hover:bg-gray-800 transition duration-150 ease-in-out";

export const Hero = () => {
  return (
    <>
      <section className={cn("relative bg-[#FFD140] w-full overflow-hidden shadow-md")}>
        <div className="relative min-h-screen mx-auto max-w-7xl py-[100px] md:py-[180px] flex flex-col md:flex-row">
          <div className="flex-[4] flex justify-center md:justify-start pt-4 px-4 md:pl-8">
            <div className="">
              <div className="mb-4">
                <Image src="/who2.svg" alt="WHO" width={140} height={200} />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 max-w-[900px] ">
                <p className="mb-2">5 to 9% of the world‘s</p>
                <p className="mb-2">population suffers</p>
                <p className="mb-2">from ADHD...</p>
                <p className="mb-2">How about you?</p>
              </h1>

              <CurrentTestUsers />

              <div className="relative flex flex-wrap gap-2 mb-6 md:mb-8 max-w-[460px]">
                <QuizButton className="flex-1" />
              </div>
              <div className="flex flex-row items-center mb-4 md:mb-4 w-full">
                <AnimatedTooltip />
                <div class="ml-[30px] flex flex-col items-start gap-1">
                  <div class="flex gap-1">
                    {[1, 2, 3, 4, 5].map((item) => {
                      return (
                        <svg
                          key={item}
                          // width="24"
                          // height="24"
                          viewBox="0 0 96 96"
                          className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M96 0H0V96H96V0Z" fill={blackColor} />
                          <path
                            d="M47.9999 64.6999L62.5999 61L68.6999 79.8L47.9999 64.6999ZM81.5999 40.4H55.8999L47.9999 16.2L40.0999 40.4H14.3999L35.1999 55.4L27.2999 79.5999L48.0999 64.5999L60.8999 55.4L81.5999 40.4Z"
                            fill={primaryColor}
                          />
                        </svg>
                      );
                    })}
                  </div>
                  <div class="text-xs md:text-base text-base-content/80">
                    <span class="font-semibold text-base-content">4M+</span> people already know
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[3] flex justify-center">
            <div className="relative">
              <div className="  ">
                <Image
                  src="/hero1.png"
                  alt="Boy"
                  width={700}
                  height={700}
                  className="h-300px md:h-[700px] w-auto object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CurrentTestUsers = () => {
  function getFluctuatingNumber() {
    const min = 800;
    const max = 1200;

    // Pobierz aktualny czas
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Oblicz aktualną pozycję w przeciągu godziny (0 to początek godziny, 1 to koniec godziny)
    const positionInHour = (minutes * 60 + seconds) / 3600;

    // Użyj funkcji sinusoidalnej, aby uzyskać wartość wahającą się pomiędzy 0 a 1
    const fluctuation = (Math.sin(positionInHour * 2 * Math.PI) + 1) / 2;

    // Przekształć wartość w zakresie 0-1 na zakres 800-1200
    return Math.round(min + fluctuation * (max - min));
  }

  return (
    <div className="flex items-center py-1 mb-4 space-x-2  rounded-full w-fit">
      <div className="flex items-center justify-center w-5 h-5 p-1 border-2 border-[#322625] rounded-full animate-pulse shrink-0">
        <div className="w-2 h-2 bg-[#322625] rounded-full"></div>
      </div>

      <div className="flex space-x-1 text-xs sm:text-sm">
        <p className="font-medium">{getFluctuatingNumber()}</p>
        <p>people currently taking the test</p>
      </div>
    </div>
  );
};
