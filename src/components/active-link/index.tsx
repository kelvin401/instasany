"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <>
      <Link
        href={href}
        className={`px-3 py-1 text-white ${
          isActive
            ? "text-opacity-100 rounded-full bg-green-actived"
            : "text-opacity-40 hover:text-opacity-100 transition-all"
        }`}
      >
        {children}
      </Link>
    </>
  );
};
