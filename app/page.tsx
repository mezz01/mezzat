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
      <Parallax speed={-30} ><Hero></Hero></Parallax>
      <Parallax speed={40} easing={"easeIn"}><Aboutme></Aboutme></Parallax>
      <Services></Services>
     </main>
  );
}
