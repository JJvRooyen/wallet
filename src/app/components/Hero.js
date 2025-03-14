import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="px-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 justify-center items-center min-h-screen gap-8">
      {/* Text Section */}
      <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start mb-10 lg:mb-36">
        <h1 className="text-6xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold leading-tight">
          Everything, in one place, safe
        </h1>
        <p className="mt-6 text-white text-lg leading-relaxed max-w-xl">
          Wallet keeps everything safe - cards, money, photos. If it fits, it's safe. Wallet, the tool to keep your valuables safe.
        </p>
        <Link href="/" className="mt-6">
          <button className="bg-[#F8D57E] w-[175px] h-14 rounded-[15px] text-lg font-normal text-gray-800 px-6 py-2">
            Get Started
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center pb-25 items-center lg:items-end lg:-mt-25">
        <Image
          src="/left-hero.gif"
          width={500}
          height={500}
          alt="graph image gif"
          className="object-contain w-full max-w-md h-auto"
        />
      </div>
    </div>
  );
}




