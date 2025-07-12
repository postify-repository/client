interface LoginButtonProps {
  onClick: () => void;
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-gray-900 px-4 py-1 font-bold text-white hover:bg-gray-700"
    >
      로그인
    </button>
  );
}
