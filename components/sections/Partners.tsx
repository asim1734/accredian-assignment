import Image from "next/image";

import adpLogo from "@/assests/Accredian_files/adp.svg";
import bayerLogo from "@/assests/Accredian_files/bayer.svg";
import crifLogo from "@/assests/Accredian_files/crif.png";
import hclLogo from "@/assests/Accredian_files/hcl.png";
import ibmLogo from "@/assests/Accredian_files/ibm.png";
import relianceLogo from "@/assests/Accredian_files/rel.png";

const partnerLogos = [
  { name: "Reliance", src: relianceLogo },
  { name: "HCL", src: hclLogo },
  { name: "IBM", src: ibmLogo },
  { name: "CRIF", src: crifLogo },
  { name: "ADP", src: adpLogo },
  { name: "Bayer", src: bayerLogo },
];

export default function Partners() {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white" id="clients">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Proven <span className="text-[#1A73E8]">Partnerships</span>
          </h2>
          <p className="mt-2 text-base font-medium text-slate-700">
            Successful collaborations with the <span className="text-[#1A73E8]">industry&apos;s best</span>
          </p>
        </div>
        <div className="relative mt-12 overflow-hidden lg:hidden">
          <div className="marquee gap-6">
            {logos.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex w-[110px] items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 hidden grid-cols-6 items-center gap-8 lg:grid">
          {partnerLogos.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
