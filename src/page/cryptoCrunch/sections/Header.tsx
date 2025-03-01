import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-black">
      <a href="/">
        <img src="/crypto/logo.svg" alt="Crypto-logo" className="h-8" />
      </a>
      <div className="text-white hidden md:block">
        <ul className="flex justify-between gap-4">
          {navItems.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
      <Button className="rounded-sm cursor-pointer">
        <span className="hidden md:block">Get in Touch</span>
        <span className="block md:hidden">
          <Menu />
        </span>
      </Button>
    </div>
  );
};

export default Header;

const navItems = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Our Services" },
  { id: 3, name: "Work with us" },
  { if: 4, name: "Blog" },
];
