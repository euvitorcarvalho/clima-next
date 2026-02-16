"use client";

import { Cloud, X, Menu } from "lucide-react";
import { Container } from "../Container";
import { links } from "../../constants/index.js";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="md:py-15 py-5">
      <Container className="flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-1 text-foreground hover:text-muted transition-all ease duration-200 font-semibold"
        >
          <Cloud size={44} />
          <span className="text-[40px]">Clima</span>
        </a>

        <ul
          className={`flex flex-col md:flex-row md:static md:gap-13 gap-3 absolute ${
            isMenuOpen
              ? "right-5 bg-surface p-6 rounded-3xl border border-[rgba(255,255,255,0.28)]"
              : "-right-full"
          } top-20 transition-all duration-300`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="text-foreground hover:text-muted transition-all ease duration-200"
            >
              <a href="#" target="_blank">
                <span
                  className={`md:text-2xl text-xl ${
                    link.isLightWeight && "font-light"
                  }`}
                >
                  {link.name}
                </span>
              </a>
            </li>
          ))}

          <Button className="md:hidden">Sign In</Button>
        </ul>

        <Button className="md:flex hidden">Sign In</Button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X
              size={35}
              className="text-foreground hover:text-muted transition-all ease duration-200"
            />
          ) : (
            <Menu
              size={35}
              className="text-foreground hover:text-muted transition-all ease duration-200"
            />
          )}
        </button>
      </Container>
    </header>
  );
}
