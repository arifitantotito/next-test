import Image from "next/image";

export default function Details2() {
  return (
    <div className="mt-24 grid grid-cols-2 p-5 w-full h-screen gap-5">
      <div className="text-center ml-24">
        <div>
          <Image src="/tito.jpg" alt="tito" width="500" height="250" />
        </div>
      </div>
      <div className="text-center mr-24 flex items-center text-2xl">
        Aku kemarin dibeliin kopi sama Mba Ummi, makasih Mba Ummi.
      </div>
    </div>
  );
}
