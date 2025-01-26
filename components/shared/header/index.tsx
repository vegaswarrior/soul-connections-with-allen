import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";


const Header = () => {
    return (
        <header className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-700">
          <div className="wrapper flex-between">
            <div className="flex-start">
             <Link href="/">
                  <Image src="/images/logo.svg" alt={APP_NAME} width={50} height={50} />
             </Link>
             </div>
             <div className=" hidden md:flex wrapper flex-start">
                <Link href="/">
                <h3 className="ml-3 text-white text-bold text-2-xl hover:text-black">Home</h3>
                </Link>
                <Link href="/">
                <h3 className="ml-3 text-white text-bold text-2-xl hover:text-black">Contact</h3>
                </Link>
                <Link href="/">
                <h3 className="ml-3 text-white text-bold text-2-xl hover:text-black">About</h3>
                </Link>
                <Link href="/">
                <h3 className="ml-3 text-white text-bold text-2-xl hover:text-black">Blog </h3>
                </Link>
             </div>
             <Menu />
          </div>
        </header>
     );
}

export default Header