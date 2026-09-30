import Link from "next/link";

import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/lib/gsapConfig";
import { ScrollTrigger } from "@/lib/gsapConfig";
interface sectionItem {
  id: string;
  label: string;
}

interface ServiceDialProp {
  activeId: string;
  sections: sectionItem[];
}

export default function ServiceDial({ activeId, sections }: ServiceDialProp) {
  const handleScroll = (activeId: string) => {
    const st = ScrollTrigger.getAll().find((st) => st.trigger?.id === activeId);

    if (st) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: st.start, autoKill: false },
        ease: "power3.inOut",
      });
    } else {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: `#${activeId}`, autoKill: false },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div>
      <div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            handleScroll("thestory");
          }}
          href={`#thestory`}
          className="flex items-center my-1"
        >
          {" "}
          <div
            className={` rounded-2xl mx-2 transition-all duration-300
                ${activeId == "thestory" ? "w-10 h-1 bg-red-600" : "w-5 h-0.5 bg-gray-600"}
                `}
          ></div>
          <p
            className={`transition-all duration-300 ${activeId == "thestory" ? "text-white" : "text-white/60"}`}
          >
            The Story
          </p>
        </Link>
      </div>
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <div key={section.id}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleScroll(section.id);
              }}
              href={`#${section.id}`}
              className="flex items-center my-1"
            >
              {" "}
              <div
                className={` rounded-2xl mx-2 transition-all duration-300
                ${isActive ? "w-10 h-1 bg-red-600" : "w-5 h-0.5 bg-gray-600"}
                `}
              ></div>
              <p
                className={`text-sm transition-all duration-300 ${isActive ? "text-white" : "text-white/60"}`}
              >
                {section.label}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
