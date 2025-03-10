"use client";
import "@styles/global.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NavigationPage() {
  const links = [
    { href: "/standings", label: "Go to Standings" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : links.length - 1));
          break;
        case "ArrowDown":
        case "s":
          setSelectedIndex((prev) => (prev < links.length - 1 ? prev + 1 : 0));
          break;
        case "Enter":
          linkRefs.current[selectedIndex]?.click();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    linkRefs.current[selectedIndex]?.focus();
  }, [selectedIndex]);

  return (
    <div className="portfolio-container">
      <h1>Welcome, Adventurer</h1>
      <p>You have entered my portfolio dungeon. Use the arrow keys or WASD to navigate.</p>
      <div className="links-container">
        {links.map((link, index) => (
          <div key={link.href} className={selectedIndex === index ? "highlighted" : ""}>
            <Link href={link.href} ref={(el) => { linkRefs.current[index] = el; }}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
