"use client";

import { useSorting } from "../model/useSorting";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag, X } from "lucide-react";

export default function SortingSelector() {
  const { currentSort, setSort } = useSorting();

  return (
    <div className="w-full bg-[#f4f6fa] rounded-xl p-3">
      <div className="w-full flex items-center bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 gap-2">
        <Flag className="w-4 h-4 text-gray-400"/>
        <Select
          value={currentSort ?? "none"}
          onValueChange={(value) =>
            value === "none" ? setSort(null) : setSort(value as "asc" | "desc")
          }
        >
          <SelectTrigger className="w-full cursor-pointer bg-white px-0 py-0 text-sm shadow-none border-none focus:outline-none focus:ring-0 focus-visible:ring-0">
            <SelectValue placeholder="Сортировка по умолчанию" />
          </SelectTrigger>

          <SelectContent className="bg-[#f4f6fa] border-none shadow-md rounded-md">
            <SelectItem
              value="none"
              className="cursor-pointer hover:bg-blue-100 hover: transition-colors duration-10"
            >
              Сортировка по умолчанию
            </SelectItem>
            <SelectItem
              value="asc"
              className="cursor-pointer hover:bg-blue-100 hover: transition-colors duration-10"
            >
              Цена: по возрастанию
            </SelectItem>
            <SelectItem
              value="desc"
              className="cursor-pointer hover:bg-blue-100 hover: transition-colors duration-10"
            >
              Цена: по убыванию
            </SelectItem>
          </SelectContent>

        </Select>

        {currentSort && (
          <button onClick={() => setSort(null)} className="text-gray-400 hover:text-gray-700">
            <X className="w-4 h-4"/>
          </button>
        )}
      </div>
    </div>

  );
}
