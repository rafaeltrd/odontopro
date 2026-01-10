import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Ghost, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-zinc-900 text-3xl font-bold" href="/">
          Odonto
          <span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex items-center">
          <a href="#">Profissionais</a>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-black hover:text-white hover:cursor-pointer"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-240px sm:w-300px z-9999">
            <SheetTitle>Menu</SheetTitle>

            <SheetHeader></SheetHeader>

            <SheetDescription>Veja nossos links</SheetDescription>

            <nav>
              <a href="#">Profissionais</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
