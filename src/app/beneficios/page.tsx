"use client";
import { GridContainer } from "@/components/header/grid";
import { useEffect, useRef } from "react";
import Image from "next/image";

import FileIcon from "public/icon-file.svg";
import HandIcon from "public/icon-hand.svg";
import HandIcon02 from "public/icon-hand-02.svg";
import MockupIcon from "public/mockup.svg";
import gsap from "gsap";

export default function Bene() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);
  const iconHandLeftRef = useRef(null);
  const iconHandRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRigth = mockupRightRef.current;
    const iconHandLeft = iconHandLeftRef.current;
    const iconHandRight = iconHandRightRef.current;

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

    gsap.fromTo(
      mLeft,
      {
        opacity: 0,
        rotate: 0,
      },
      {
        opacity: 1,
        rotate: -10,
        duration: 1,
      }
    );

    gsap.fromTo(
      mRigth,
      {
        opacity: 0,
        rotate: 0,
      },
      {
        opacity: 1,
        rotate: 10,
        duration: 1,
      }
    );

    gsap.fromTo(iconHandLeft, { opacity: 0 }, { opacity: 1 });
    gsap.fromTo(iconHandRight, { opacity: 0 }, { opacity: 1 });
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
