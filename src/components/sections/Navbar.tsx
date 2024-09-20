"use client";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/AnimatedModal";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { primaryButtonClassName, primaryColor } from "./Hero";
import { QuizButton } from "./QuizButton";

const menuItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Muzyka",
    href: "#music",
  },
  {
    title: "Zespół",
    href: "#zespol",
  },
  {
    title: "Kontakt",
    href: "#kontakt",
  },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className="fixed top-0 z-50  py-2 w-full "
      style={{
        background: primaryColor,
      }}
    >
      <div className="flex w-full h-[50px]  max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between w-full">
          <Logo />

          <QuizButton className="text-md hidden md:block" />

          {/* <div className="block xl:hidden">
            <MobileNav />
          </div> */}
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-black  h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="mb-8">
              <Logo />
            </div>
            <div className="mb-4">
              <ul className="text-neutral-500 text-md hover:bg-neutral-200">
                {menuItems.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
