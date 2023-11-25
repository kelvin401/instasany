"use client";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "public/logo.svg";
import SearchIcon from "public/icon-search.svg";
import UserIcon from "public/icon-user.svg";
import { GridContainer } from "./grid";
import { ActiveLink } from "../active-link";

const arrayMenu = [
  { name: "Início", href: "/" },
  { name: "Benefícios", href: "/beneficios" },
  { name: "Pra quem é o curso?", href: "/pra-quem-e-o-curso" },
  { name: "Preços promocionais", href: "/precos-promocionais" },
  { name: "Sobre nós", href: "/sobre-nos" },
];

export function Header() {
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {arrayMenu.map((menu, index) => (
              <ActiveLink key={index} href={menu.href}>
                {menu.name}
              </ActiveLink>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="icon search" />
            </button>
            <button className="flex items-center gap-2">
              <Image src={UserIcon} alt="icon user" />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
