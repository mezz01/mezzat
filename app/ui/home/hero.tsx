"use client"

import Image from "next/image"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero(){
    useGSAP(()=>{
        gsap.to(".starimg",{
            rotation: 360,
            repeat: -1,
            duration: 10,
            ease: "none",
            yoyo: true
        })

        gsap.from(".hero",{
            y: -1000,
            ease: "elastic.out(1,0.5)",
            duration: 2.5
        })

        gsap.from(".adds", {
            y: 1000,
            ease : "power8.out",
            duration: 2.5,
        })

        gsap.to(".txtcr", {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 2.5
        })
    })

    return(
        <div className="flex flex-col sticky h-svh" >
            <div className="hero relative">
                <h1 className="herotxt text-[130px] italic p-36 pl-2 pr-2 pb-10 font-semibold tracking-wide text-center leading-tight">
                An Ambitious<br/>Web Developer ,<br/>With an eye on Design
                </h1>
                <Image 
                    src="/star.svg" 
                    alt="Star image failed to load"
                    className="starimg absolute top-1/3 right-48"
                    width={100}
                    height={100}>
                </Image>
            </div>
            <div className="adds flex justify-between">
                <p className="font-sans font-thin text-3xl pl-32">* 2024 Portfolio and Biography</p>
                <h2 className="text-3xl font-sans font-thin pr-32" >You can call me a <br/><span className="txtcr italic font-serif">creative developer</span></h2>
            </div>
        </div>
    )
}
