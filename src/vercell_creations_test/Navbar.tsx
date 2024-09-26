/*import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
              <span className="ml-2 text-lg font-semibold text-foreground">
                YourBrand
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Button variant="outline" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/login">Log In</Link>
            </Button>
          </div>
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  <Link
                    href="/"
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/
