import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <Button asChild className="text-white bg-transparent hover:bg-white hover:text-black">
                    <Link href="/login">
                      <User />
                      <span className="">Login</span>
                     </Link>
                  </Button>
                  <Button asChild className="text-white hover:bg-white hover:text-black">
                   <Link href="/cart">
                       <ShoppingCart />
                       <span className="ml-2">Cart</span>
                     </Link>
                  </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                       <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                      <SheetTitle>Menu</SheetTitle>
                      <Link href="/">
                        <h3 className="ml-3 text-black hover:text-white text-bold">Home</h3>
                        </Link>
                        <Link href="/">
                        <h3 className="ml-3 text-black hover:text-white text-bold">Contact</h3>
                        </Link>
                        <Link href="/">
                        <h3 className="ml-3 text-black hover:text-white text-bold">About</h3>
                        </Link>
                        <Link href="/">
                        <h3 className="ml-3 text-black hover:text-white text-bold">Blog </h3>
                        </Link>

                        <Button asChild className="text-black hover:text-white text-bold bg-transparent">
                         <Link href="/login">
                          <User />
                           <span className="">Login</span>
                         </Link>
                       </Button>
                       <Button asChild className="text-black hover:text-white text-bold bg-transparent">
                          <Link href="/cart">
                           <ShoppingCart />
                           <span className="ml-2">Cart</span>
                           </Link>
                        </Button>
                       <SheetDescription></SheetDescription>

                    </SheetContent>
                 </Sheet>
            </nav>
        </div>
     );
}

export default Menu;
