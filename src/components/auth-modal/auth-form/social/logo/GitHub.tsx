import Image from "next/image";

export default function GitHub() {
  return (
    <Image
      src="/logo/github.svg"
      alt="github"
      width={22}
      height={22}
      className="cursor-pointer bg-github rounded-full p-3.5 box-content"
    />
  );
}
