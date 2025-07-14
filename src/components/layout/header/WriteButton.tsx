import Link from "next/link";

export default function WriteButton() {
  return (
    <Link
      href="/write"
      className="rounded-2xl border border-primary bg-inherit px-4 py-1 font-bold transition-colors duration-300 hover:bg-primary hover:text-page"
    >
      새 글 작성
    </Link>
  );
}
