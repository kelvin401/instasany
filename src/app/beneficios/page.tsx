"use client";
import { GridContainer } from "@/components/header/grid";
import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function Bene() {
  const textHeroRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <section className="relative w-full bg-green-primary h-hero border-t border-t-green-border pt-16 overflow-hidden bg-hero bg-no-repeat bg-top">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Aproveite os benefícios
          </h3>
          <h1 className="text-7xl/normal text-white font-semibold">
            Viva novas experiências
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Assinar clube agora
            </button>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
