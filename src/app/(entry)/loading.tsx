import { CircularProgress } from "@nextui-org/react";

export default async function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <CircularProgress size="lg" aria-label="Loading...." />
    </div>
  );
}
