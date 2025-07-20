import { XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostTagProps {
  tag: string;
  index: number;
  tagItems: string[];
  setTagItems: (tagItems: string[]) => void;
}

export default function PostTag({
  tag,
  index,
  tagItems,
  setTagItems,
}: PostTagProps) {
  return (
    <div
      key={index}
      className="flex items-center gap-0.5 bg-gray-100/30 rounded-2xl px-3 py-2 justify-center w-fit h-fit wrap-normal"
    >
      <Badge className="bg-transparent text-green font-bold !p-0">{tag}</Badge>
      <XIcon
        className="size-4 cursor-pointer hover:text-red-500"
        onClick={() => setTagItems(tagItems.filter((_, i) => i !== index))}
      />
    </div>
  );
}
