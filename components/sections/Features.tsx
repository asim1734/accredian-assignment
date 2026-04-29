import Image from "next/image";

import edgeDesktop from "@/assests/Accredian_files/accredian-edge-usp-v3.svg";
import edgeMobile from "@/assests/Accredian_files/accredian-edge-usp-mobile.svg";

export default function Features() {
  return (
    <section className="bg-white" id="edge">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            The <span className="text-[#1A73E8]">Accredian Edge</span>
          </h2>
          <p className="mt-2 text-base font-medium text-slate-700">
            Key Aspects of <span className="text-[#1A73E8]">Our Strategic Training</span>
          </p>
        </div>
        <div className="mt-12">
          <Image
            src={edgeDesktop}
            alt="The Accredian Edge"
            className="hidden h-auto w-full object-contain md:block"
          />
          <Image
            src={edgeMobile}
            alt="The Accredian Edge"
            className="h-auto w-full object-contain md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
