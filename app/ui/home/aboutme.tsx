"use client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
    
    useGSAP(()=>{
        gsap.from(".abt",{
            scrollTrigger: ".abt",
            borderRadius: "40% 40%",
            duration: 2.5,
            y: 250
        })
    })

    return (
        <div className="abt rounded-[60px] bg-stone-200 text-stone-950 flex flex-col min-h-screen w-full">
            <h1 className="text-9xl italic p-24 pl-44">
                About me.
            </h1>
            <section className="flex justify-around rounded-lg pb-20 overflow-x-clip">
                <p className="absolute text-4xl right-8 bottom-0 font-sans font-medium">With a passion for programming<br />that spans over 4 years,<br />
                    I've delved deep into the realms<br />  of web development and explored<br />
                    various other sectors of the tech <br /> landscape. My journey has been a <br />
                    blend of learning, experimenting, <br /> and pushing boundaries to master the craft.
                </p>
                <Image src="/me.svg" 
                    alt="Avatar"
                    className="meimg pb-24 right-0 shadow-xl rounded-full"
                    width={500}
                    height={500}
                ></Image>
            </section>
        </div>
    )
}