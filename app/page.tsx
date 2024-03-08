"use client"

import { useEffect } from "react";
import Image from "next/image";
import Hero from "@/app/ui/home/hero"
import Aboutme from "@/app/ui/home/sections"
import Services from "@/app/ui/home/footer"
import { Parallax } from 'react-scroll-parallax';
import Footer from "./ui/home/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Parallax speed={-30} ><Hero></Hero></Parallax>
      <Parallax speed={40} easing={"easeIn"}><Aboutme></Aboutme></Parallax>
      <Parallax speed={8} easing={"easeIn"}><Footer></Footer></Parallax>
     </main>
  );
}
