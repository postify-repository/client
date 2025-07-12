import Link from "next/link";

export default function WriteButton() {
  return (
    <Link
      href="/write"
      className="rounded-2xl border border-gray-900 bg-inherit px-4 py-1 font-bold text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
    >
      새 글 작성
    </Link>
  );
}
