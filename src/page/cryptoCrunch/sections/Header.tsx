import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <section className="flex justify-between items-center py-3 px-8 bg-transparent shadow-xl z-100 backdrop-blur-3xl rounded-lg">
      <a href="/">
        <img src="/crypto/logo.svg" alt="Crypto-logo" className="h-8" />
      </a>

      <div className="text-white hidden md:block">
        <ul className="flex justify-between gap-4">
          {navItems.map((item) => {
            return (
              <li key={item.id} className="cursor-pointer">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      <Button className="cursor-pointer bg-transparent shadow-none hover:bg-transparent hover:shadow-lg hover:transition-all hover:duration-300 rounded-full">
        <span className="hidden md:block">Get in Touch</span>
        <span className="block md:hidden">
          <Menu />
        </span>
      </Button>
    </section>
  );
};

export default Header;

const navItems = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Our Services" },
  { id: 3, name: "Work with us" },
  { if: 4, name: "Blog" },
];
