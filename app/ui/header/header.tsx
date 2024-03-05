"use client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";

export default function Footer(){

  useGSAP(()=>{
      gsap.from(".header", {
        y: -50,
        ease: "power8.out",
        duration: 3,
        delay: 0.5,
        opacity: 0
      })
  })
  return(
    <header className="header flex justify-between h-24 items-center">
      <h2>
        <Link 
          href="/" className="text-2xl p-10">© Mohamed Amine Mezzat</Link>
      </h2>
      <ul className="flex justify-around w-64 p-4">
        <li><Link href="/about" className="text-xl">About</Link></li>
        <li><Link href="/blog" className="text-xl">Blog</Link></li>
      </ul>
    </header>
)}
