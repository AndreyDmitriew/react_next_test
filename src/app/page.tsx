import { Suspense } from "react";
import CarListing from "@/widgets/car-listing/CarListing";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CarListing />
    </Suspense>
  );
}
