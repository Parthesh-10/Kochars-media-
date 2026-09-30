"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" relative p-5 py-10 -mt-10  sm:px-20  bg-black  text-white rounded-t-4xl border-t z-100">
      <div className="flex  justify-between items-center py-20  border-b-2 border-white">
        <h1 className="text-4xl lg:text-8xl">Let's Connect</h1>
        <Link href="/contact" className="">
          <button className="w-40 h-10 rounded-2xl font-bold"> Contact</button>
        </Link>
      </div>
      <div className="lg:flex justify-between py-10 border-b-2 border-white">
        <div className="h-25 lg:h-40 my-2 md:mb-10 relative">
          <p>Everything here is build with strategy and snacks</p>
          <div className="w-full   flex   absolute bottom-0 left-0 z-30 ">
            <Link
              href={`https://www.instagram.com/kochhars_media_planners/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 mx-1 relative  rounded-lg"
            >
              <Image
                src={`/imgs/instagram.png`}
                alt="whatsappImg"
                fill
                sizes="10vw"
                className="w-10 h-10"
              />
            </Link>
            <Link
              href={`https://www.youtube.com/channel/UCXnkOF1hLsQ2fxHtjukREYw?app=desktop&fbclid=PAb21jcAQQ2LBleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaewQXW01YXL-zwMnIhUUMNt9aQQrmjt-Y0iqIEraazDsEBC-zv0Tb5ostkNWg_aem_Tc5M1CeVgzpjh7wXDuX9ew`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 mx-1 relative  rounded-lg"
            >
              <Image
                src={`/imgs/youtube.png`}
                alt="whatsappImg"
                fill
                sizes="10vw"
                className=" object-cover "
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-[70%] flex flex-wrap justify-between ml-2">
          <div>
            <ul>
              <li className="text-bold text-red-500 text-2xl my-2 ">
                Navigation
              </li>
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/category" className="">
                  Category
                </Link>
              </li>

              <li>
                <Link href="/contact" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[75%]">
            <ul className=" md:mx-5 text-[12px] leading-0.5">
              <li className="text-bold text-red-500 text-2xl my-2 ">Contact</li>
              <li>+91 9876847676</li>
              <li>info@kochharmediaplanner.com</li>
              <li>
                Uptown Insignia Airport Road, 2nd floor, Unit No. 5, Zirakpur,
                Punjab, India 140603
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <p className="w-20 text-[8px] ">
          Copyright© 2023 kochharmediaplanner. All Rights Reserved.
        </p>
        <Link href="/privacypolicy">
          <p className="text-[8px]">User Terms & Conditions</p>
        </Link>
      </div>
    </div>
  );
}
