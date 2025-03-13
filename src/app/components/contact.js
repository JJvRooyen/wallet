import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-16 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 justify-center items-center min-h-screen gap-8">
        <div className="text-center lg:text-left mb-36 flex flex-col justify-center">
          <h1 className="text-4xl leading-22 md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold pt-25 max-w-80">Questions? lets talk!</h1>
          <p className="mt-8 mb-6 text-white leading-7">Contact us through our 24/7 live chat. we're always happy to help!</p>
          <button className="bg-[#F8D57E] w-[175] h-14 rounded-[15] text-lg font-normal text-grey-200 mt-24">
            <Link href={"/"} className="h-auto font-normal">Get Started</Link>
          </button>
        </div>
        <div className="flex justify-center items-end mt-2 lg:-mt-25 w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={"/flipingcard.gif"}
              height={0}
              width={0}
              alt="graph image gif"
              className="object-contain w-full h-full py-0"
            />
          </div>
        </div>
      </div>
    </>
  )
}


