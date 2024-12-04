"use client";

import Button from "@/components/UI/Button/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col justify-center gap-6 mt-6">
      <h2 className="text-center text-xl">Something went wrong!</h2>

      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
