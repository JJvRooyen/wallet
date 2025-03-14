import Image from "next/image";

export default function Product(){
    return(
        <>
            <div className="lg:min-h-screen w-screen flex justify-center items-center">
                <div className="h-content m-10 md:h-content lg:h-133 rounded-[20] mx-20 md:mx-16 lg:max-w-6xl bg-[#FDF5DF] ">
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
