import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
}

const topMenuItems: MenuItem[] = [
  { name: "Investor Relations", href: "/investors" },
  { name: "Careers", href: "/careers" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const mainMenuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "News & Media", href: "/news-and-media" },
  { name: "Blog", href: "/blog" },
];

 const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <motion.nav
      className="fixed w-full z-50"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-accent-blue bg-opacity-80 text-neutral-white">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-center py-2 text-sm">
            {topMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mx-4 hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary text-neutral-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/logo1.png"
                alt="Mumias Sugar Logo"
                width={50}
                height={50}
                className="mr-2"
              />
            </Link>

            <div className="hidden md:flex space-x-6">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden bg-primary bg-opacity-90"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {[...topMenuItems, ...mainMenuItems].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar