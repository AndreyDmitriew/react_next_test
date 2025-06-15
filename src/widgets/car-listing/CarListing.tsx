"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "@/entities/car/ui/CarCard";
import SortingSelector from "@/features/sorting/ui/SortingSelector";
import Pagination from "@/shared/ui/Pagination";
import { fetchCars } from "@/entities/car/api/fetchCars";
import { Car } from "@/entities/car/model/types";

export default function CarListing() {
  const params = useSearchParams();
  const page = parseInt(params.get("page") || "1", 10);
  const sort = params.get("sort") as "asc" | "desc" | null;

  const [cars, setCars] = useState<Car[]>([]);
  const [pageCount, setPageCount] = useState(5);

  useEffect(() => {
    fetchCars(page, sort).then((res) => {
      setCars(res.data);
      setPageCount(res.meta.pageCount);
    });
  }, [page, sort]);


  return (
    <div className="space-y-6">
      <SortingSelector />

      {cars.length === 0 ? (
        <p className="text-gray-500">Нет доступных автомобилей.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.unique_id} car={car} />
          ))}
        </div>
      )}

      <Pagination page={page} pageCount={pageCount} />
    </div>
  );
}
