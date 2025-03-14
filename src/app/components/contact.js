import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <>
      <div className="px-10 md:px-6 lg:px-16 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 justify-center items-center min-h-screen gap-8 text-center lg:text-left">
        <div className="mb-16 flex flex-col justify-center items-center lg:items-start max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold pt-10">Questions? Let's talk!</h1>
          <p className="mt-6 mb-6 text-white leading-7">Contact us through our 24/7 live chat. We're always happy to help!</p>
          <button className="bg-[#F8D57E] w-[175px] h-14 rounded-[15px] text-lg font-normal text-gray-900 mt-6">
            <Link href={"/"} className="h-auto font-normal">Get Started</Link>
          </button>
        </div>

        <div className="flex justify-center items-center w-full pb-15">
          <Image
            src={"/flipingcard.gif"}
            height={0}
            width={0}
            alt="graph image gif"
            className="object-contain w-full h-auto max-w-[500px]"
          />
        </div>
      </div>
    </>
  )
}



