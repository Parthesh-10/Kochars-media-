import Logoslider from "@/component/logoSlider";
import Image from "next/image";
import Link from "next/link";
import India from "@/component/indiaMap";

const cards = [
  {
    img: "abda62876499de52c5da129495a65261ee175708.png",
    heading: "Smart Spending",
    desc: "Know where money works",
  },
  {
    img: "fd9b55e6c3038e072f0f0b840eef1af74d1bc6fd.png",
    heading: "Smooth Execution",
    desc: "Campaigns run without stress",
  },
  {
    img: "870488dafe7a17f985198b6220292d608361e05e.png",
    heading: "Strong Recall",
    desc: "People remember your brand",
  },
  {
    img: "2cbd90a242838c6e11121474b60429984822ff9d.png",
    heading: "Market Presence",
    desc: "Seen consistently everywhere",
  },
];

const employees = [
  {
    img: "bd57bdcb2f78ae6fc5f444b1cc73ea2038db5c72.png",
    name: "Nitesh Kochhar",
    post: "Director",
    desc: "Some info about the person will come here, it can be anything that clinet guides us to write just to idk. ",
  },
  {
    img: "bd57bdcb2f78ae6fc5f444b1cc73ea2038db5c72.png",
    name: "Sonam Kochhar",
    post: "Managing Director",
    desc: "Some info about the person will come here, it can be anything that clinet guides us to write just to idk. ",
  },
  {
    img: "bd57bdcb2f78ae6fc5f444b1cc73ea2038db5c72.png",
    name: "Nilesh Kumar Singh",
    post: "Media head [PAN India]",
    desc: "Some info about the person will come here, it can be anything that clinet guides us to write just to idk. ",
  },
  ,
  {
    img: "bd57bdcb2f78ae6fc5f444b1cc73ea2038db5c72.png",
    name: "Aditi",
    post: "Media head [North India]",
    desc: "Some info about the person will come here, it can be anything that clinet guides us to write just to idk. ",
  },
  ,
  {
    img: "bd57bdcb2f78ae6fc5f444b1cc73ea2038db5c72.png",
    name: "Bhavya Ahuja",
    post: "Operational Head",
    desc: "Some info about the person will come here, it can be anything that clinet guides us to write just to idk. ",
  },
];

const hoveringImg = [
  {
    imgName: "13.svg",
    imgPos: " -rotate-10 top-10 md:top-0 -left-5 sm:left-10 lg:left-50",
  },
  {
    imgName: "15.svg",
    imgPos: " rotate-10 bottom-10 md:bottom-0 -left-5 sm:left-10 lg:left-35",
  },
  {
    imgName: "18.svg",
    imgPos: " rotate-10 top-10 md:top-0 -right-5 sm:right-10 lg:right-50",
  },
  {
    imgName: "16.svg",
    imgPos:
      " -rotate-10 bottom-10 md:bottom-0 -right-5 sm:right-10  lg:right-35",
  },
];
export default function About() {
  return (
    <div>
      <div className="p-5 pt-20 sm:pt-10">
        <div className="h-90 md:h-130  lg:pt-10 flex justify-center relative">
          <div className="w-150 p-2 flex justify-center relative  ">
            <h2 className="flex justify-center items-center font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
              <span className="text-[150px] md:text-[250px] mr-2">
                <i>1</i>
              </span>
              <span className="w-70 md:w-full h-25 md:h-40 leading-0 border flex flex-wrap  items-center">
                <span className="w-fit text-6xl md:text-8xl leading-0">
                  <i>GROWTH</i>
                </span>
                <br />
                <span className="w-full text-6xl md:text-8xl leading-0">
                  <i>SYSTEM</i>
                </span>
              </span>
            </h2>
            <div className="hoverDiv bg-[#ffcaca] w-fit px-5  rounded-lg absolute top-15 left-10 lg:top-15 lg:-left-20 ">
              <p>Marketing</p>
              <div className="messageBoxTriangle absolute -bottom-1 right-1 rotate-90"></div>
            </div>
            <div className="hoverDiv bg-[#ffcaca] w-fit px-5  rounded-lg  absolute bottom-15 lg:bottom-15 left-5 sm:left-20 lg:left-40 ">
              <p>Design</p>
              <div className="messageBoxTriangle absolute -top-1 right-1 rotate-90"></div>
            </div>
            <div className="hoverDiv bg-[#ffcaca] w-fit px-5  rounded-lg  absolute bottom-22 lg:bottom-30 right-10 lg:-right-10 ">
              <p>Strategy</p>
              <div className="messageBoxTriangle absolute -top-1 left-1 rotate-90"></div>
            </div>
          </div>
        </div>
      </div>
      <Logoslider />

      <div className="p-5 sm:px-20">
        <h2 className="text-center text-2xl sm:text-4xl my-10 font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
          <i>
            11 YEARS OF UNDERSTANDING WHAT <br /> ACTUALLY GROWS BRANDS
          </i>
        </h2>
        <p className="text-center">
          For over a decade, we’ve worked inside{" "}
          <b>India’s offline media ecosystem. </b> <br />
          Understanding what makes brands visible, trusted, and remembered.
        </p>
        <div className="flex justify-center flex-wrap relative my-10">
          <div className="w-full">
            <p className="text-center text-4xl md:text-8xl font-bold leading-[0.9] bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
              <i>
                {" "}
                India <br />
                <span className="text-xl leading-none block">
                  IS NOT ONE MARKET.
                </span>
              </i>
            </p>
            <p className="text-center my-2">It’s 5 Behaviour Zones.</p>
          </div>

          <div className="mt-5">
            <India />
          </div>
        </div>
        <div className="text-center">
          <p className="mb-2">
            <b>Not every brand grow the same way </b>
          </p>
          <p className="">
            Different industries, audiences, and regions demand different
            strategies. <br /> Our system exists to remove guesswork and replace
            it with structured visibility.
          </p>
        </div>
      </div>
      <div className="p-5 sm:px-10 md:px-30">
        <h2 className="text-2xl md:text-6xl my-10 text-center font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
          <i>WHAT WE CONTROL</i>
        </h2>
        <div className="mb-20 sm:mb-0 flex justify-center ">
          <div className="w-full sm:w-80 h-110 pb-10 flex items-center flex-wrap  border-r-2 border-red-800 ">
            <div className="">
              <div className="w-full p-2 py-5 text-end border-t-2 border-red-800 border-dashed relative">
                <p className=" px-4 font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
                  <i>
                    {" "}
                    01 <br /> REGIONAL UNDERSTANDING
                  </i>
                </p>
                <p className="text-sm px-4">
                  We know how each city behaves and what actually works there.
                </p>{" "}
                <div className="w-10 h-10 bg-linear-to-r from-[#911111] to-[#410101] rounded-full absolute -top-5 -left-3 "></div>
                <div className="w-5 h-5 bg-linear-to-r from-[#911111] to-[#410101]  rounded-full absolute -top-2.5 -right-3 "></div>
              </div>
              <div className="w-full p-2 py-5 text-end border-t-2 border-red-800 border-dashed relative">
                <p className=" px-4 font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
                  <i>
                    {" "}
                    03
                    <br /> RIGHT MEDIA MIX
                  </i>
                </p>
                <p className="text-sm px-4">
                  Billboards, retail spaces, transit, media — planned together.
                </p>
                <div className="w-10 h-10 bg-linear-to-r from-[#911111] to-[#410101] rounded-full absolute -top-5 -left-3 "></div>
                <div className="w-5 h-5 bg-linear-to-r from-[#911111] to-[#410101]  rounded-full absolute -top-2.5 -right-3 "></div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-80 h-110 pt-20 flex items-center flex-wrap  border-l-2 border-red-800 ">
            <div>
              <div className="w-full p-2 py-5 text-start border-t-2 border-red-800 border-dashed relative">
                <p className=" px-4 font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
                  <i>
                    {" "}
                    02 <br /> SMART MEDIA BUYING
                  </i>
                </p>
                <p className="text-sm px-4">
                  Best rates across national and local markets.
                </p>
                <div className="w-10 h-10 bg-linear-to-r from-[#911111] to-[#410101] rounded-full absolute -top-5 -right-3 "></div>
                <div className="w-5 h-5 bg-linear-to-r from-[#911111] to-[#410101]  rounded-full absolute -top-2.5 -left-3 "></div>
              </div>
              <div className="w-full p-2 py-5 text-start border-t-2 border-red-800 border-dashed relative">
                <p className=" px-4 font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
                  <i>
                    {" "}
                    04
                    <br /> GROUND EXECUTION
                  </i>
                </p>
                <p className="text-sm px-4">
                  Local teams monitor and manage every placement.
                </p>
                <div className="w-10 h-10 bg-linear-to-r from-[#911111] to-[#410101] rounded-full absolute -top-5 -right-3 "></div>
                <div className="w-5 h-5 bg-linear-to-r from-[#911111] to-[#410101]  rounded-full absolute -top-2.5 -left-3 "></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5 flex justify-center">
          <Link href="/contact" className="">
            <button className="w-40 h-10 text-white rounded-2xl font-bold">
              {" "}
              Let's Plan
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="md:text-6xl my-10 text-center font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
          What Partner Actually Gains
        </h2>
        <div className="flex justify-center items-center flex-wrap">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="w-60 h-40 flex flex-wrap justify-center"
              >
                <Image
                  src={`/imgs/${card.img}`}
                  alt="cardImg"
                  width={80}
                  height={80}
                  className="w-20 h-20 mb-2"
                />
                <div className="w-full flex justify-center flex-wrap">
                  <p className="text-xl text-gray-500  font-bold text-center">
                    {card.heading}
                  </p>
                  <p className="w-40 text-[16px] text-gray-500 text-center ">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" p-10">
        <div className="h-100 my-20 flex items-center justify-center flex-wrap relative ">
          <div className="h-fit  p-5 flex-wrap bg-white/20 backdrop-blur-md rounded-2xl">
            <p className="text-center font-bold bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
              <span className="block text-2xl sm:text-4xl leading-[1.1]">
                & That's not it..
              </span>
              <span className="block text-xl text-gray-500 leading-tight">
                They get
              </span>
            </p>
            <h2 className="w-full h-fit py-5 text-5xl sm:text-6xl md:text-8xl font-bold text-center  bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
              Premium <br /> Positioning
            </h2>
            <div className="flex justify-center items-center ">
              {" "}
              <Link href="/contact" className="">
                <button className="w-35 sm:w-40  h-10  m-1  rounded-2xl font-bold text-white">
                  {" "}
                  Contact
                </button>
              </Link>
              <Link href="/category" className=" ">
                <div className="w-35 sm:w-40 h-10  m-1 bg-white   flex justify-around items-center rounded-2xl font-bold border-2 hover:scale-98">
                  {" "}
                  View Our Work
                </div>
              </Link>
            </div>
          </div>
          <div>
            {hoveringImg.map((photo, index) => {
              return (
                <div
                  key={index}
                  className={`hoverDiv w-20 md:w-30 h-30 md:h-40  rounded-xl -z-1 overflow-hidden absolute ${photo.imgPos} `}
                >
                  <Image
                    src={`/imgs/${photo.imgName}`}
                    alt="hoveringImg"
                    sizes="10vw"
                    fill
                    className={` object-cover`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-20 mb-4">
          {" "}
          <h2 className="w-full h-fit py-2 text-4xl md:text-6xl font-bold text-center  bg-linear-to-r from-[#911111] to-[#410101] bg-clip-text text-transparent">
            Faces Behind Execution
          </h2>
          <p className="text-center text-2xl">Meet the team</p>
        </div>
        <div className="flex justify-center flex-wrap">
          {employees.slice(0, 2).map((employee, index) => {
            return (
              <div
                key={index}
                className={`w-full h-60  sm:w-60 sm:h-70  m-2 sm:m-5 relative rounded-2xl  overflow-hidden group`}
              >
                <Image
                  // src={`/imgs/employee/${employee.img}`}
                  src={`/imgs/user.png`}
                  className="w-full h-50 z-20 absolute left-0 bottom-0 scale-120 "
                  width={100}
                  height={100}
                  sizes="50vw"
                  alt="employeeImg  "
                />
                <div className="text-white px-5 absolute bottom-5 z-60 ">
                  <div className=" transition-all group-hover:mb-2 ">
                    <p className="font-bold leading[1:1] "> {employee?.name}</p>
                    <p className="text-[12px] leading-tight">
                      {" "}
                      {employee?.post}
                    </p>
                  </div>
                  <div className="w-full h-0 scale-0 overflow-hidden transition-all  group-hover:scale-100 group-hover:h-full">
                    <p className="text-[10px] ">{employee?.desc}</p>
                    <Link href="/contact" className=" bg-white">
                      <div className="w-20 h-full py-1 my-2 text-[12px]  flex justify-around items-center rounded-2xl font-bold border-2 hover:scale-98">
                        {" "}
                        Contact
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-[50%] h-full  bg-red-500 flex justify-center items-center absolute left-0 top-0 z-0">
                  <p className=" text-[40px] -translate-x-3 origin-center rotate-90 text-transparent [-webkit-text-stroke:1px_white] ">
                    {" "}
                    KOCHHAR'S
                  </p>
                </div>
                <div className="w-[50%] h-full bg-white absolute right-0 top-0 z-0"></div>
                <div className="w-full h-30 absolute left-0 bottom-0 bg-linear-to-t from-red-500 to-red-500/0 z-20"></div>
                <div className="w-full h-full -translate-x-full  absolute left-0 top-0 backdrop-blur-md bg-white/20 z-50 transition-all duration-500 group-hover:translate-0"></div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center">
          {employees.slice(2).map((employee, index) => {
            return (
              <div
                key={index}
                className={`w-full h-60  sm:w-60 sm:h-70  m-2 sm:m-5 relative rounded-2xl  overflow-hidden group`}
              >
                <Image
                  // src={`/imgs/employee/${employee.img}`}
                  src={`/imgs/user.png`}
                  className="w-full h-50 z-20 absolute left-0 bottom-0 scale-120 "
                  width={100}
                  height={100}
                  sizes="50vw"
                  alt="employeeImg  "
                />
                <div className="text-white px-5 absolute bottom-5 z-60 ">
                  <div className=" transition-all group-hover:mb-2 ">
                    <p className="font-bold leading[1:1] "> {employee?.name}</p>
                    <p className="text-[12px] leading-tight">
                      {" "}
                      {employee?.post}
                    </p>
                  </div>
                  <div className="w-full h-0 scale-0 overflow-hidden transition-all  group-hover:scale-100 group-hover:h-full">
                    <p className="text-[10px] ">{employee?.desc}</p>
                    <Link href="/contact" className=" bg-white">
                      <div className="w-20 h-full py-1 my-2 text-[12px]  flex justify-around items-center rounded-2xl font-bold border-2 hover:scale-98">
                        {" "}
                        Contact
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-[50%] h-full  bg-red-500 flex justify-center items-center absolute left-0 top-0 z-0">
                  <p className=" text-[40px] -translate-x-3 origin-center rotate-90 text-transparent [-webkit-text-stroke:1px_white] ">
                    {" "}
                    KOCHHAR'S
                  </p>
                </div>
                <div className="w-[50%] h-full bg-white absolute right-0 top-0 z-0"></div>
                <div className="w-full h-30 absolute left-0 bottom-0 bg-linear-to-t from-red-500 to-red-500/0 z-20"></div>
                <div className="w-full h-full -translate-x-full  absolute left-0 top-0 backdrop-blur-md bg-white/20 z-50 transition-all duration-500 group-hover:translate-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
