import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="flex items-center font-mono text-2xl font-semibold"
      >
        Postify
      </Link>
    </div>
  );
}

export default Logo;
