import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostCardProps } from "@/types/post";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

export default function PostCard({
  title,
  description,
  imageUrl,
  date,
  commentCount,
  authorName,
  authorAvatar,
  likeCount,
}: PostCardProps) {
  return (
    <div className="col-span-1 w-full hover:translate-y-[-10px] transition-all duration-200">
      <Card className="!rounded-none !p-0 !gap-0">
        <CardHeader className="w-full h-32 mb-2 relative overflow-hidden">
          <Image src={imageUrl} alt="trending" fill className="object-cover" />
        </CardHeader>
        <CardContent className="w-full h-40 mb-2 flex flex-col px-4">
          <CardTitle className="mb-4 line-clamp-1 h-6">{title}</CardTitle>
          <CardDescription className="mb-14 line-clamp-3 h-20">
            {description}
          </CardDescription>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div>{date}</div>
            <div>|</div>
            <div>{commentCount}개의 댓글</div>
          </div>
        </CardContent>
        <CardFooter className="w-full h-16 border-t border-gray-200 !py-0 !px-4">
          <div className="flex items-center gap-4 justify-between w-full">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={authorAvatar} />
                <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-sm text-gray-500 line-clamp-1 h-6">
                by {authorName}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon className="size-3" />
              <div className="text-xs text-gray-500">{likeCount}</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
