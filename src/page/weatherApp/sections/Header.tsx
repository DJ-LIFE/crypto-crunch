import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center px-2 py-1 backdrop-blur-3xl fixed top-0 w-full">

        <div className="text-white font-semibold">Weather</div>

        <div className="pl-4 relative text-white">
          <Input className="bg-black my-2 w-40 rounded-sm pl-8 focus-visible:border-white" />
          <Search className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white w-5 h-5" />
        </div>

      </div>
    </nav>
  );
};
