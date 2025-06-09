"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Image from "next/image";
import bg from "@/assets/1744802503388.jpg"
import cogImage from "@/assets/cog.png"
import Cilindro from "@/assets/cylinder.png"
import nodleImage from "@/assets/noodle.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams"
import { useRef } from "react";
import Pointer from "@/components/pointer";
export const Hero = () => {

  return (
    <section className="py-24 lg:py-28 overflow-x-clip">
      
       <BackgroundBeams />
      <div className="container relative">
        
       <div className="absolute right-80 -top-4">
        <Pointer name="champier"/>
        </div>
          <div className="absolute left-56 top-86">
              <Pointer name="champier" color="red"/>
        </div>     
        <h1 className="relative z-10 text-6xl md:text-7xl lg:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400  text-center font-sans font-bold">
          We are an award winning company
        </h1>
        <p className="mt-8 text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400  text-center font-sans font-bold">
          Provando que sempre rebentamos as barreiras
        </p>
        </div>
        
    </section>
  )
};
