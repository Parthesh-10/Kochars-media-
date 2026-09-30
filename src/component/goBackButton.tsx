"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GoBackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="hidden lg:block">
      <div className="fixed left-0 top-0 h-screen w-20 z-200  group pointer-events-none flex items-center justify-center">
        <button
          onClick={handleBack}
          className="pointer-events-auto w-80 h-12 bg-red-700 rounded-md relative transition-all duration-300  opacity-50
                     -translate-x-16 rotate-12 group-hover:-translate-x-1 group-hover:rotate-0 group-hover:opacity-100 shadow-xl"
        >
          <div className="relative w-6 h-6 m-auto">
            <Image
              src="/imgs/arrowleft.svg"
              fill
              className="object-contain"
              alt="back"
            />
          </div>
        </button>
      </div>


      <div className="fixed right-0 top-0 h-screen w-20 z-200   group pointer-events-none flex items-center justify-center">
        <button
          onClick={() => router.forward()}
          className="pointer-events-auto w-80 h-12 bg-red-700 rounded-md relative transition-all duration-300 opacity-50
                     translate-x-16 -rotate-12 group-hover:translate-x-1 group-hover:rotate-0 shadow-xl group-hover:opacity-100"
        >
          <div className="relative w-6 h-6 m-auto">
            <Image
              src="/imgs/arrowright.svg"
              fill
              className="object-contain"
              alt="forward"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
