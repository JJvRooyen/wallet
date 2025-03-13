import { Star } from "lucide-react";
import Image from "next/image";

export default function Review() {
    return (
        <div className="min-h-screen w-screen flex justify-center items-center">
            <div className="h-133 rounded-[20px] max-w-6xl bg-[#BFAFF2] px-25 py-40 ">
                <h1 className="text-2xl font-semibold">
                    “Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I do not need to worry because
                    it is all in one place! Thanks!"
                </h1>

                <div className="flex items-center mt-4">
                    <Image
                        src="/review.png"
                        height={80}
                        width={80}
                        alt="review image"
                        className="rounded-full"
                    />

                    <div className="flex flex-col px-4 text-left">
                        <p className="font-medium">Mike Kox</p>

                        {/* Wrap stars in a flex container */}
                        <div className="flex">
                            <Star fill="yellow" stroke="yellow" />
                            <Star fill="yellow" stroke="yellow" />
                            <Star fill="yellow" stroke="yellow" />
                            <Star fill="yellow" stroke="yellow" />
                            <Star fill="yellow" stroke="yellow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

