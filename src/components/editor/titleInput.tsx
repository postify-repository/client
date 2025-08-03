interface titleInputProps {
  title: string;
  setTitle: (title: string) => void;
}

export default function TitleInput({ title, setTitle }: titleInputProps) {
  return (
    <input
      placeholder="제목을 입력하세요"
      className="w-full h-20 text-4xl font-bold focus:outline-none"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
