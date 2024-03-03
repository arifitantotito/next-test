import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center flex flex-col gap-4">
        <div className="font-bold text-3xl">
          Welcome to My Next.JS Mini Project!
        </div>
        <div>This is my Home Page, let&apos;s see another routes!</div>
      </div>
    </>
  );
}
