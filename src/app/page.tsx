import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <video autoPlay muted loop className="w-full object-cover h-[800px]">
        <source src={'/videos/aftermovie.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
