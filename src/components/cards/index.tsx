"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mockup from "public/mockup-main.png";
import Card01 from "public/image-01.png";
import Card02 from "public/image-02.png";
import Card03 from "public/image-03.png";
import Card04 from "public/image-04.png";
import Card05 from "public/image-05.png";
import Card06 from "public/image-06.png";

gsap.registerPlugin(ScrollTrigger);

export function Cards() {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const section = sectionRef.current;

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "center center",
          scrub: true,
        },
      }
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: "center center",
        },
      }
    );

    const img01 = card01Ref.current;
    const img02 = card02Ref.current;
    const img03 = card03Ref.current;
    const img04 = card04Ref.current;
    const img05 = card05Ref.current;
    const img06 = card06Ref.current;

    const leftImages = [img01, img02, img03];
    const rigthImages = [img04, img05, img06];

    animateCards(leftImages, 50);
    animateCards(rigthImages, -50);
  }, []);

  return (
    <section className="w-full pb-20" ref={sectionRef}>
      <Image
        src={Mockup}
        alt="mockup main"
        className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 opacity-0"
        ref={mockupRef}
      />
      <h2
        className="text-center text-7xl font-semibold text-black mb-56 opacity-0"
        ref={titleRef}
      >
        Faça <span className="text-green-title-cards">você</span> mesmo de casa
      </h2>
      <div className="relative w-full max-w-area-cards mx-auto h-area-cards">
        <Image
          src={Card01}
          alt="image-01"
          ref={card01Ref}
          className="absolute top-8 left-44 opacity-0"
        />
        <Image
          src={Card02}
          alt="image-02"
          ref={card02Ref}
          className="absolute bottom-32 left-0 opacity-0"
        />
        <Image
          src={Card03}
          alt="image-03"
          ref={card03Ref}
          className="absolute bottom-0 left-80 opacity-0"
        />
        <Image
          src={Card04}
          alt="image-04"
          ref={card04Ref}
          className="absolute top-0 right-32 opacity-0"
        />
        <Image
          src={Card05}
          alt="image-05"
          ref={card05Ref}
          className="absolute right-0 bottom-28 opacity-0"
        />
        <Image
          src={Card06}
          alt="image-06"
          ref={card06Ref}
          className="absolute bottom-0 right-80 opacity-0"
        />
      </div>
      <p></p>
    </section>
  );
}
