import Image from "next/image";

export default function Features(){
    return(
        <>
            <div className=" min-h-80 w-screen flex justify-center items-center">
                <div className=" flex flex-col lg:grid lg:grid-cols-3 min-w-6xl min-h-20 w-6xl gap-16">

                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <Image
                            src={"/Cards-icon.png"}
                            height={70}
                            width={70}
                            alt="cards icon"
                            />
                        </div>
                        <h3 className="pt-7 font-bold text-lg text-white">Customizable Card</h3>
                        <p className="text-white opacity-40 text-lg text-center max-w-60">Custom your own card for your exact incomes and expenses needs.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <Image
                            src={"/Coin-icon.png"}
                            height={70}
                            width={70}
                            alt="cards icon"
                            />
                        </div>
                        <h3 className="pt-7 font-bold text-lg text-white">No payment fee</h3>
                        <p className="text-white opacity-40 text-lg text-center max-w-60">Transfer your payment all over the world with no payment fee.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <Image
                            src={"/Purse-icon.png"}
                            height={70}
                            width={70}
                            alt="cards icon"
                            />
                        </div>
                        <h3 className="pt-7 font-bold text-lg text-white">All in one place</h3>
                        <p className="text-white opacity-40 text-lg text-center max-w-70 pt-4">The right place to keep your credit and debit cards, boarding passes & more.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
