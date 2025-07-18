import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function SkeletonCard() {
  return (
    <div className="col-span-1 w-full">
      <Card className="!rounded-none !p-0 !gap-0">
        <CardHeader className="w-full h-32 mb-2 !px-4 !py-2 !flex">
          <Skeleton className="w-full h-full" />
        </CardHeader>
        <CardContent className="w-full h-40 mb-2 flex flex-col px-4">
          <Skeleton className="h-6 w-3/4 mb-4" />
          <Skeleton className="h-20 w-full mb-14" />
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Skeleton className="h-3 w-20" />
            <div> </div>
            <Skeleton className="h-3 w-16" />
          </div>
        </CardContent>
        <CardFooter className="w-full h-16 border-t border-gray-200 !py-0 !px-4">
          <div className="flex items-center gap-4 justify-between w-full">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="h-3 w-3" />
              <Skeleton className="h-3 w-6" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
