"use client"

import { useEffect } from "react";
import Image from "next/image";
import Hero from "@/app/ui/home/hero"
import Aboutme from "@/app/ui/home/aboutme"
import Services from "@/app/ui/home/services"
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Parallax speed={-20} easing={"easeIn"} ><Hero></Hero></Parallax>
      <Parallax speed={20} ><Aboutme></Aboutme></Parallax>
      <Services></Services>
     </main>
  );
}
