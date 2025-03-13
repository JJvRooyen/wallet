import Image from "next/image";

export default function Product(){
    return(
        <>
            <div className="min-h-screen w-screen flex justify-center items-center">
                <div className="h-133 rounded-[20] max-w-6xl bg-[#FDF5DF]">
                    <Image
                    src={"/dashboard.png"}
                    height={500}
                    width={1080}
                    alt="dashboard"
                    />
                </div>
            </div>
        </>
    )
}
