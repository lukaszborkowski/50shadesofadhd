//@ts-nocheck
"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/AnimatedModal";
import { cn } from "@/lib/utils";
import { blackColor, primaryButtonClassName, primaryColor } from "./Hero";
import Image from "next/image";
import { m } from "framer-motion";

export const QuizButton = ({ className, style = {} }: any) => {
  return (
    <>
      <Image
        src={"https://files.youform.io/background-images/OHCGoaLUjkSKa2ijoci0hvpt2bcjxq2KSS4h2FiP.png"}
        alt={"Woman"}
        width={250}
        height={340}
        className="absolute hidden mb-8 h-[200px] object-contain"
      />
       <Image
        src={"https://files.youform.io/form-files/vXY0zt3hGwzdS5vUzrtatLMzmJDKYkegq5yIx0AU.png"}
        alt={"Man"}
        width={250}
        height={340}
        className="absolute hidden mb-8 h-[200px] object-contain"
      />
      <Modal>
        <ModalTrigger
          className={cn(primaryButtonClassName, "tracking-widest", className)}
          style={style}
        >
          TAKE THE TEST
        </ModalTrigger>
        <ModalBody
          style={{
            background: primaryColor,
            color: blackColor,
          }}
        >
          <ModalContent>
            <h3 className="text-center text-4xl font-bold mb-8">TAKE THE TEST</h3>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {[
                {
                  title: "Woman",
                  image: "https://files.youform.io/background-images/OHCGoaLUjkSKa2ijoci0hvpt2bcjxq2KSS4h2FiP.png",
                  href: "https://form.50shadesofadhd.com/adhd-man",
                },
                {
                  title: "Man",
                  image: "https://files.youform.io/form-files/vXY0zt3hGwzdS5vUzrtatLMzmJDKYkegq5yIx0AU.png",
                  href: "https://form.50shadesofadhd.com/adhd-man",
                },
              ].map((item, index) => {
                return (
                  <a href={item.href} key={index}>
                    <div
                      className="flex-1 flex flex-col items-center justify-center rounded-2xl p-4 cursor-pointer"
                      style={{
                        border: "2px solid",
                        borderColor: blackColor,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={250}
                        height={340}
                        className="mb-8 h-[200px] object-contain"
                      />
                      <p className="text-center text-xl font-bold">
                        {item.title}{" "}
                        <m.div animate={{ scale: 1.5 }} transition={{ duration: 0.5 }} />
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};
