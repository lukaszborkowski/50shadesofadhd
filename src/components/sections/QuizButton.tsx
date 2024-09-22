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
        src={"https://form.50shadesofadhd.com/adhd-woman"}
        alt={"https://form.50shadesofadhd.com/adhd-woman"}
        width={250}
        height={340}
        className="absolute hidden mb-8 h-[200px] object-contain"
      />
       <Image
        src={"https://form.50shadesofadhd.com/adhd-man"}
        alt={"https://form.50shadesofadhd.com/adhd-man"}
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
                  image: "/woman.png",
                  href: "https://form.50shadesofadhd.com/adhd-woman",
                },
                {
                  title: "Man",
                  image: "/man.png",
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
