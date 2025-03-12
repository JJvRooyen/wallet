
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-[#2B2B2B] flex items-center justify-between h-[100px]">
            <div>
                <h1 className="font-bold text-2xl lg:text-3xl text-white pl-[55px] py-[38px]">Wallet</h1>
            </div>
            <div className="flex gap-4 items-center pr-[55px]">
                <button className="lg:hidden block">
                    <Menu
                    height={45}
                    color="white"
                    />
                </button>
                <Link href={"/SignUp"} className="text-white text-lg font-medium hidden lg:block">
                Sign Up
                </Link>
                <button className="bg-[#BFAFF2] w-[175] h-15 rounded-[15] text-lg font-medium text-grey-200 hidden lg:block">
                    <Link href={"/Login"}>Login</Link>
                </button>
            </div>
        </nav>
    );
}
