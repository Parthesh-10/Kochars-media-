"use client";
import Image from "next/image";

export default function Card() {
  return (
    <div className=" relative px-20 pt-20 z-0  -mb-50 flex ">
      <div
        className={`footerCard -rotate-10 
          -hover:translate-x-30 hover:-translate-y-45 hover:rotate-6 hover:z-20
      `}
      >
        <Image
          src={`/imgs/adsfsf42j3hkhh.png`}
          fill
          alt="cardonfooterimg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-7xl mb-10">01</h3>
          <h3 className="text-3xl mb-2">High-Impact Media</h3>
          <p>
            Cinema, airports, OOH, print, digital, and PR. We combine powerful
            touchpoints to create maximum recall, not just impressions.
          </p>
        </div>
      </div>
      <div
        className={`footerCard rotate-10   
          -hover:translate-x-10 hover:-translate-y-45 hover:rotate-6 hover:z-20
      `}
      >
        <Image
          src={`/imgs/jjfksdjfsdfhklsjfjsfhsfjsfhlskfhsa.png`}
          fill
          alt="cardonfooterimg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-7xl mb-10">02</h3>
          <h3 className="text-3xl mb-2">Pan-India Reach</h3>
          <p>
            From metros to emerging markets, our on-ground presence ensures
            consistent visibility with local relevance across India.
          </p>
        </div>
      </div>
      <div
        className={`footerCard -rotate-10
          -hover:translate-x-10 hover:-translate-y-45 hover:rotate-6 hover:z-20
      `}
      >
        <Image
          src={`/imgs/hfhjsdflasfjas.png`}
          fill
          alt="cardonfooterimg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-7xl mb-10">03</h3>
          <h3 className="text-3xl mb-2">Data-Led Execution</h3>
          <p>
            Clear targeting, smart placements, and performance tracking ensure
            every campaign delivers measurable value.
          </p>
        </div>
      </div>
      <div
        className={`footerCard rotate-10  
          -hover:translate-x-10 hover:-translate-y-45 hover:rotate-6 hover:z-20
      `}
      >
        <Image
          src={`/imgs/uoewryuiorfsd.png`}
          fill
          alt="cardonfooterimg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-7xl mb-10">04</h3>
          <h3 className="text-3xl mb-2">Strategic First</h3>
          <p>
            Every campaign starts with insight, not inventory. We plan with
            intent so your brand appears where attention already exists.
          </p>
        </div>
      </div>
      <div
        className={`footerCard -rotate-10  
          -hover:translate-x-10 hover:-translate-y-45 hover:rotate-6 hover:z-20
      `}
      >
        <Image
          src={`/imgs/fsjdhfgsldfhjsdlf.png`}
          fill
          alt="cardonfooterimg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-7xl mb-10">05</h3>
          <h3 className="text-3xl mb-2">Trusted Partnerships</h3>
          <p>
            Strong relationships with theatres, airports, media houses, and
            platforms help us secure premium placements and smoother execution.
          </p>
        </div>
      </div>
    </div>
  );
}
