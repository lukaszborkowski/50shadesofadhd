import React from "react";
import { blackColor, primaryButtonClassName, primaryColor } from "./Hero";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { QuizButton } from "./QuizButton";

export const Profesor = () => {
  return (
    <section className="bg-black px-4 py-8 md:py-32 md:pt-64" style={{ background: primaryColor }}>
      <div
        className={cn("relative mx-auto max-w-7xl rounded-[50px] p-8 md:p-16 shadow-2xl")}
        style={{
          background: blackColor,
          color: primaryColor,
        }}
      >
        <div className="max-w-[550px]">
          <h4 className="text-2xl md:text-5xl font-bold mb-8 text-white">Do you have ADHD?</h4>
          <p className="mb-8 text-xl">
            Our test is based on the guidelines of the World Health Organization for ADHD screening
            and has been developed by top specialists from around the world.
          </p>

          <QuizButton
            className=""
            style={{
              background: primaryColor,
              color: blackColor,
            }}
          />
        </div>
        <Image
          src="/profesor.png"
          alt="Profesor"
          width={400}
          height={540}
          className="mt-8 lg:mt-0 relative mx-auto lg:absolute bottom-0 right-0 rounded-[50px]"
        />
      </div>
    </section>
  );
};
