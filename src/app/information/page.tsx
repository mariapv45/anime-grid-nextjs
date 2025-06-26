import { Suspense } from "react";
import AnimeGrid from "@/ui/components/AnimeGrid";
import LoadingSkeleton from "@/ui/components/LoadingSkeleton";

export default function Page() {
  return (
     <Suspense fallback={<LoadingSkeleton />}>
       <AnimeGrid />
     </Suspense>
  );
}