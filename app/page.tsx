import Image from "next/image";
import Hero from "@/app/ui/home/hero"
import Aboutme from "@/app/ui/home/aboutme"

export default function Home() {
  let str : string = "amine mezzat"
  return (
    <main className="flex flex-col">
      <Hero></Hero>
      <Aboutme></Aboutme>
      <h1>amiine</h1>
     </main>
  );
}
