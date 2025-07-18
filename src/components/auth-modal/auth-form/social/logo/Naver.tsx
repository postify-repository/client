import Image from "next/image";

export default function Naver() {
  return (
    <Image
      src="/logo/naver.png"
      alt="naver"
      width={50}
      height={50}
      className="cursor-pointer rounded-full"
    />
  );
}
