interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button onClick={onClick} className="cursor-pointer hover:text-primary">
      {children}
    </button>
  );
}
