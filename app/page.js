import Image from "next/image";

export default function Home() {
  return (
    <h1 className="text-6xl font-regular lowercase">
      <Image
        src="/images/black_pearl/aerostealth.jpg"
        width={1500}
        height={500}
        alt="Fisker Ocean"
      />
    </h1>
  );
}
