"use client";

import Image from "next/image";
import localisation from "@/app/assets/images/Localisation des interventions 1 1.svg";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function WhoUs() {
  const { t } = useTranslation();

  return (
    <>
      <div className="custom-container min-h-[300px] flex flex-col justify-center items-center">
        <h2 className="text-[#BA0218] text-3xl font-bold text-center">
          {t.whoUs.title}
        </h2>
        <p className="font-light text-center text-xl py-8">
          {t.whoUs.description}
        </p>
      </div>
      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-[#BA0218] text-3xl font-bold text-center pb-2">
          {t.whoUs.coverageTitle}
        </h2>
        <Image
          src={localisation}
          width={300}
          height={300}
          alt={t.whoUs.imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
}
