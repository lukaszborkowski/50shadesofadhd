import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Profesor } from "@/components/sections/Profesor";
import { Testimonials } from "@/components/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-[#322625]">
      <Hero />
      <Testimonials/>
      <Profesor/>
      <Features/>
    </main>
  );
}
