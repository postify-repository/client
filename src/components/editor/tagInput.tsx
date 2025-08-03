import PostTag from "@/components/post/PostTag";

interface tagInputProps {
  tagItems: string[];
  setTagItems: (tagItems: string[]) => void;
}

export default function TagInput({ tagItems, setTagItems }: tagInputProps) {
  return (
    <div className="flex gap-2 w-full">
      <div className="flex items-center gap-2 w-full">
        <div className="flex items-center gap-2 justify-start flex-wrap w-full">
          {tagItems.map((tag, index) => (
            <PostTag
              key={index}
              tag={tag}
              index={index}
              tagItems={tagItems}
              setTagItems={setTagItems}
            />
          ))}
          <input
            placeholder="태그를 입력하세요"
            className="flex-1 w-full py-1 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                e.preventDefault();
                const newTag = e.currentTarget.value.trim().toLowerCase();
                if (!tagItems.includes(newTag)) {
                  setTagItems([...tagItems, newTag]);
                }
                e.currentTarget.value = "";
              } else if (e.key === "Backspace" && tagItems.length > 0) {
                setTagItems(tagItems.slice(0, -1));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
