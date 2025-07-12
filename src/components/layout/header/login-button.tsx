interface LoginButtonProps {
  onClick: () => void;
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-primary px-4 py-1 font-bold text-white hover:bg-secondary"
    >
      로그인
    </button>
  );
}
