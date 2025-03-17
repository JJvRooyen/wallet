
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-[#2B2B2B] flex items-center justify-between h-[100px]">
            <div>
                <h1 className="font-semibold text-2xl lg:text-2xl text-white pl-[55px] py-[38px]">Wallet</h1>
            </div>
            <div className="flex gap-5 items-center pr-[55px]">
                <button className="lg:hidden block">
                    <Menu
                    height={45}
                    color="white"
                    />
                </button>
                <Link href={"/pages/signup-page"} className="text-white text-lg font-medium hidden lg:block">
                Sign Up
                </Link>
                <button className="bg-[#BFAFF2] w-[175] h-14 rounded-[15] text-lg font-normal text-grey-200 hidden lg:block">
                    <Link href={"/pages/login-page/"} className="h-auto font-normal">Log in</Link>
                </button>
            </div>
        </nav>
    );
}
