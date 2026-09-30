import Link from "next/link";
import Image from "next/image";
export default function Whatsapp() {
  return (
    <div className="relative z-150">
      <Link
        href="https://wa.me/919876847676?text=Hello%20Kochhar%E2%80%99s,%0AWe%20are%20interested%20in%20planning%20visibility%20for%20our%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="w-10  h-10  fixed bottom-6 right-6  bg-[#67c15e] hover:bg-green-700  p-4 outline-1 outline-green-500 rounded-full shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all duration-300 "
      >
        <Image src={`/imgs/whatsapp.png`} alt="whatsappImg" fill sizes="10vw" />
      </Link>
    </div>
  );
}
