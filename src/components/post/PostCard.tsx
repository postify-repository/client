import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";
import React, { useState } from "react";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    description: string;
    date: string;
    comments: number;
    author: string;
    likes: number;
    hasImage: boolean;
  };
}

function PostImage({ hasImage }: { hasImage: boolean }) {
  return (
    <div className="h-[160px] bg-[#dee2e6] opacity-[0.57] mb-2">
      {hasImage && (
        <div className="w-full h-full bg-[url(/image.png)] bg-cover bg-center" />
      )}
    </div>
  );
}

function PostMeta({
  title,
  description,
  date,
  comments,
}: {
  title: string;
  description: string;
  date: string;
  comments: number;
}) {
  return (
    <CardContent className="px-3 py-1">
      <h2 className="font-bold text-[#212529] text-lg leading-6 mb-2 overflow-ellipsis line-clamp-1">
        {title}
      </h2>
      <div className="text-xs text-[#495057] leading-[21px] h-[63px] overflow-ellipsis line-clamp-3 mb-10">
        {description}
      </div>
      <div className="flex items-center gap-1 text-xs text-[#868e96] mb-2">
        <span>{date}</span>
        <span>·</span>
        <span>{comments}개의 댓글</span>
      </div>
    </CardContent>
  );
}

function AvatarSection({ author }: { author: string }) {
  return (
    <div className="flex items-center">
      <Avatar className="w-6 h-6 mr-2">
        <AvatarImage src="/image-2.png" />
        <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <span className="text-xs text-[#868e96]">
        by <span className="font-bold text-sm text-[#212529]">{author}</span>
      </span>
    </div>
  );
}

export default function PostCard({ post }: PostCardProps) {
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <Card className="w-full shadow-[0px_4px_16px_#0000000a] overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-0 gap-0">
      <PostImage hasImage={post.hasImage} />
      <PostMeta
        title={post.title}
        description={post.description}
        date={post.date}
        comments={post.comments}
      />
      <CardFooter className="border-t border-[#f1f3f5] !px-0">
        <div className="flex justify-between items-center w-full px-4 py-2">
          <AvatarSection author={post.author} />
          <div
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLikeClick}
          >
            <Heart
              className={`w-3 h-3 mr-1 transition-colors ${
                isLiked ? "text-red-500 fill-red-500" : "text-red-500"
              }`}
            />
            <span className="text-xs text-[#212529] font-bold">
              {likeCount}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
