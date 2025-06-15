import axios from "axios";
import { Car } from "../model/types";
import { API_BASE_URL } from "@/shared/config";


export async function fetchCars(
  page = 1,
  sort: "asc" | "desc" | null = null
): Promise<{ data: Car[]; meta: { page: number; pageCount: number } }> {
  const params = {
    _limit: 12,
    _page: page,
    ...(sort ? { _sort: "price", _order: sort } : {}),
  };

  const res = await axios.get(API_BASE_URL, { params });

  return {
    data: res.data.data as Car[],
    meta: {
      page: params._page,
      pageCount: res.data.meta?.pageCount ?? 5,
    },
  };
}
