import Image from "next/image";

export default function Details() {
  return (
    <div className="mt-24 grid grid-cols-2 p-5 w-full h-screen gap-5">
      <div className="text-cetner ml-24 flex items-center text-2xl">
        Nama saya Arifitanto Oktarian Hafayer. Biasa dipanggil Tito, Otit, Idoy,
        Titot, Cintaku, Sayangku, Gantengku.
      </div>
      <div className="text-center mr-24">
        <div>
          <Image src="/tito.jpg" alt="tito" width="500" height="250" />
        </div>
      </div>
    </div>
  );
}
