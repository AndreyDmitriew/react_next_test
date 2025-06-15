import { useSearchParams, useRouter } from "next/navigation";

export function useSorting() {
  const router = useRouter();
  const params = useSearchParams();
  const currentSort = params.get("sort") as "asc" | "desc" | null;

  const setSort = (value: "asc" | "desc" | null) => {
    const newParams = new URLSearchParams(params.toString());
    if (value) {
      newParams.set("sort", value);
    } else {
      newParams.delete("sort");
    }
    newParams.set("page", "1");
    router.push(`/?${newParams.toString()}`);
  };

  return { currentSort, setSort };
}
