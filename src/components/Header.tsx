import { Button } from "@/components/ui/button";
import { Bell, Moon, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="py-3 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold italic">Postify</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <Moon className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <Search className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <Bell className="w-6 h-6" />
        </Button>
        <Button className="h-8 rounded-2xl bg-[#212529] text-white text-sm px-4 font-bold">
          로그인
        </Button>
      </div>
    </header>
  );
}
