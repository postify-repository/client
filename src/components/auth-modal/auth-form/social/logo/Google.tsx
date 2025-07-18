import Image from "next/image";

export default function Google() {
  return (
    <Image
      src="/logo/google.svg"
      alt="google"
      width={22}
      height={22}
      className="cursor-pointer rounded-full p-3.5 box-content border"
    />
  );
}
