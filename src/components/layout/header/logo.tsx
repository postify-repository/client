import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="flex items-center font-mono text-2xl font-semibold text-gray-900"
      >
        Postify
      </Link>
    </div>
  );
}

export default Logo;
