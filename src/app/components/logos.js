import Image from "next/image";
export default function Logos(){
    return(
        <>
            <div className="h-[170px] max-w-6xl mx-auto flex justify-center items-center relative">
                {/* Border container with opacity */}
                <div className="absolute inset-0 border-y border-white opacity-20"></div>

                {/* Image with full opacity */}
                <Image
                    src={"/logos@2x.png"}
                    height={35}
                    width={931}
                    alt="logos"
                />
            </div>
        </>
    )
}
