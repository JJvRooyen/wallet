import Image from "next/image";

export default function Logos() {
  return (
    <div className="h-[170px] max-w-6xl px-10 mx-auto flex justify-center items-center relative">
      {/* Border container with opacity */}
      <div className="absolute inset-0 border-y border-white opacity-20"></div>

      {/* Image that switches based on screen size */}
      <Image
        src={"/logos@2x.png"}
        height={35}
        width={931}
        alt="logos"
        className="hidden md:block"
      />
      <Image
        src={"/logos-small.png"}
        height={35}
        width={500}
        alt="logos small"
        className="md:hidden"
      />
    </div>
  );
}

