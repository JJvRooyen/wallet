import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-[200px] max-w-6xl mx-auto flex flex-col justify-center items-center relative">
            <div className="absolute inset-0 border-y border-white opacity-20"></div>

            <div className="w-full bg-[#2B2B2B] flex items-center justify-between h-[100px]">
                <h1 className="font-semibold text-2xl lg:text-2xl text-white pl-[55px] py-[38px]">Wallet</h1>
            </div>

            <div>
                <ul className="flex space-x-6 mt-4">
                    <li className="text-white underline">
                        <Link href={"/legal"} className="hover:text-gray-100 cursor-pointer">Privacy Policy</Link>
                    </li>
                    <li className="text-white underline cursor-pointer">
                        <Link href="/legal" className="hover:text-gray-100">Legal</Link>
                    </li>
                    <li className="text-white underline cursor-pointer">
                        <Link href="/legal" className="hover:text-gray-100">Terms of Service</Link>
                    </li>
                </ul>
            </div>

            {/* Copyright Section */}
            <div className="text-white text-sm mt-4">
                © {new Date().getFullYear()} Wallet. All rights reserved.
                <Link href="/legal/copyright" className="underline hover:text-gray-100 ml-2">Copyright</Link>
            </div>
        </div>
    );
}
