'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Pagination({ page, pageCount }: { page: number; pageCount: number }) {
  const router = useRouter();
  const params = useSearchParams();

  const goTo = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount) {
      const newParams = new URLSearchParams(params.toString());
      newParams.set("page", newPage.toString());
      router.push(`/?${newParams.toString()}`);
    }
  };

  return (
    <div className="flex items-center justify-center mt-6 space-x-4">
      <Button
        onClick={() => goTo(page - 1)}
        disabled={page <= 1}
        variant="default"
        size="sm"
        className="flex items-center space-x-1 cursor-pointer rounded-lg px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 disabled:text-white disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Previous page"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">Назад</span>
      </Button>

      <span className="text-gray-700 font-medium text-base select-none">
        Страница <span className="font-bold text-gray-900">{page}</span> из{" "}
        <span className="font-bold text-gray-900">{pageCount}</span>
      </span>

      <Button
        onClick={() => goTo(page + 1)}
        disabled={page >= pageCount}
        variant="default"
        size="sm"
        className="flex items-center cursor-pointer space-x-1 rounded-lg px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 disabled:text-white disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Next page"
      >
        <span className="font-medium">Вперёд</span>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
}
