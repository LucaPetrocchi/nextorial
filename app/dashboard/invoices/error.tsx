'use client'; // <- need this to use states + effects + events

import { useEffect } from 'react';

// when an error occurs in any component rendered in this route,
// (whether naturally or with throw new Error())
// next falls back to the nearest error.tsx (this)

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      > {/* reset() rerenders route */}
        Retry
      </button>
    </main>
  );
}
