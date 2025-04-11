"use client";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import Image from "next/image";
import localisation from "@/app/assets/images/Localisation des interventions 1 1.svg";

export default function WhoUs() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = useMemo(() => ({ lat: 6.6111, lng: 20.9394 }), []);

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: true,
  };

  return (
    <>
      <div className="custom-container min-h-[300px] flex flex-col justify-center items-center">
        <h2 className="text-[#BA0218] text-3xl font-bold text-center">
          Qu'est-ce que MSA Afrika ?
        </h2>
        <p className="font-light text-center text-xl py-8">
          MsaAda AfriKa est une plateforme en ligne qui offre une assistance
          routière rapide et fiable aux conducteurs en difficulté en Afrique.
          Nous utilisons la technologie pour connecter les conducteurs avec des
          professionnels de l'assistance en temps réel. Notre objectif est de
          rendre les routes plus sûres et de garantir la tranquillité d'esprit
          des conducteurs.
        </p>
      </div>
      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        {/* {!isLoaded ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p>Chargement de la carte...</p>
            </div>
          ) : (
            <GoogleMap
              options={mapOptions}
              zoom={4}
              center={center}
              mapContainerClassName="w-full h-full"
            >
              <Marker position={center} />
            </GoogleMap>
          )} */}
        <h2 className="text-[#BA0218] text-3xl font-bold text-center pb-2">
          Localisation des couverage
        </h2>
        <Image
          src={localisation}
          width={300}
          height={300}
          alt="localisation"
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
}
