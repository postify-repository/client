import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";

function SkeletonImage() {
  return <div className="h-[160px] bg-gray-200 rounded mb-2 animate-pulse" />;
}

function SkeletonContent() {
  return (
    <CardContent className="px-3 py-1">
      <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
      <div className="space-y-2 mb-10">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
      </div>
      <div className="flex items-center gap-1 text-xs text-[#868e96] mb-2">
        <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
        <span> </span>
        <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
      </div>
    </CardContent>
  );
}

function SkeletonAvatar() {
  return (
    <div className="flex items-center">
      <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full animate-pulse"></div>
      <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
    </div>
  );
}

function SkeletonLike() {
  return (
    <div className="flex items-center">
      <div className="w-3 h-3 mr-1 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-3 bg-gray-200 rounded w-4 animate-pulse"></div>
    </div>
  );
}

export default function SkeletonPostCard() {
  return (
    <Card className="w-full shadow-[0px_4px_16px_#0000000a] overflow-hidden transition-transform duration-300 p-0 gap-0">
      <SkeletonImage />
      <SkeletonContent />
      <CardFooter className="border-t border-[#f1f3f5] !px-0">
        <div className="flex justify-between items-center w-full px-4 py-2">
          <SkeletonAvatar />
          <SkeletonLike />
        </div>
      </CardFooter>
    </Card>
  );
}
