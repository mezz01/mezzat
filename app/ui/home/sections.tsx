"use client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from 'react-scroll-parallax';

import Image from "next/image";
import Link from "next/link";
import Expcard from "@/app/ui/home/components/experties"

gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
    
    useGSAP(()=>{
        gsap.from(".word", {
            duration: 2.5,
            scale: 0.1,
            scrollTrigger: ".word",
            opacity: 0,
            stagger: 0.1,
            x: 100,
            ease : "power2.out"
        })

        gsap.from(".abt",{
            scrollTrigger: ".abt",
            borderRadius: "20% 20%",
            duration: 2.5,
            y: 250
        })
    })

    return (
        <div className="abt rounded-[60px] bg-stone-200 text-stone-950 relative min-h-screen w-full">
            <section className="flex flex-col rounded-lg pb-20 overflow-x-clip">
                <h1 className="companim text-9xl italic font-medium pb-0 pl-44 pt-11">
                    About me.
                </h1>
                <div className="flex">
                <Parallax speed={5}>
                    <p className="text-4xl p-24 font-sans font-thin tracking-widest leading-normal">
                        <span className="word">With </span>
                        <span className="word">a </span>
                        <span className="word">passion </span>
                        <span className="word">for </span>
                        <span className="word">programming </span>
                        <span className="word">that </span>
                        <span className="word">spans </span>
                        <span className="word">over </span>
                        <span className="word">4 </span>
                        <span className="word">years, </span><br />
                        <span className="word">I've </span>
                        <span className="word">delved </span>
                        <span className="word">deep </span>
                        <span className="word">into </span>
                        <span className="word">the </span>
                        <span className="word">realms </span>
                        <span className="word">of </span>
                        <span className="word">web </span>
                        <span className="word">development </span><br />
                        <span className="word">and </span>
                        <span className="word">explored </span>
                        <span className="word">various </span>
                        <span className="word">other </span>
                        <span className="word">sectors </span>
                        <span className="word">of </span>
                        <span className="word">the </span>
                        <span className="word">tech </span>
                        <span className="word">landscape. </span><br />
                        <span className="word">My </span>
                        <span className="word">journey </span>
                        <span className="word">has </span>
                        <span className="word">been </span>
                        <span className="word">a </span>
                        <span className="word">blend </span>
                        <span className="word">of </span>
                        <span className="word">learning, </span><br />
                        <span className="word">experimenting, </span>
                        <span className="word">and </span>
                        <span className="word">pushing </span>
                        <span className="word">boundaries </span>
                        <span className="word">to </span>
                        <span className="word">master </span>
                        <span className="word">the </span>
                        <span className="word">craft. </span>
                    </p>
                    </Parallax>
                    <Parallax speed={30}>
                        <Image src="/me.svg" 
                            alt="Avatar"
                            className="meimg right-1/4 p-10"
                            width={300}
                            height={300}
                        ></Image>
                    </Parallax>
                </div>
                <div>
                    <Link href="/about" className="text-4xl italic font-medium p-24 pt-0 hover:line-through">
                        See more ...
                    </Link>
                </div>
            </section>
            <section className="flex flex-col rounded-lg pb-20 pt-44 overflow-x-clip h-svh" >
                <h1 className="text-9xl italic font-medium pb-0 pl-44 pt-11">
                    Areas of expertise.
                </h1>
                <Expcard />
            </section>
        </div>
    )
}