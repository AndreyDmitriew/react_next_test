import { Car } from "../model/types";
import {
  Heart,
  Scale,
  Droplet,
  GaugeCircle,
  Settings,
  Palette,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function CarCard({ car }: { car: Car }) {
  const img = car.images?.image?.[0];
  const title = `${car.mark_id || ""} ${car.folder_id || ""}`;
  const monthly = car.price ? Math.round(car.price / 70) : null;

  return (
    <div className="bg-white shadow rounded-xl overflow-hidden flex flex-col transition hover:shadow-lg">
      {img ? (
        <Image
          src={img}
          alt={title}
          width={400}
          height={176}
          className="object-cover rounded-t-xl"
        />
      ) : (
        <div className="w-full h-44 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
          Нет фото
        </div>
      )}

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-base font-semibold">{title}</h3>

        {car.price && (
          <div className="text-[17px] font-bold text-black leading-tight">
            {car.price.toLocaleString("ru-RU")} ₽
            <div className="text-sm text-gray-500 font-normal">
              от {monthly?.toLocaleString("ru-RU")} ₽/мес
            </div>
          </div>
        )}

        {car.modification_id && (
          <div className="text-sm text-gray-700">
            {car.modification_id}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700 mt-2">
          {car.run !== undefined && (
            <div className="flex items-center gap-1">
              <GaugeCircle size={16}/> {car.run.toLocaleString()} км
            </div>
          )}
          {car.gearbox && (
            <div className="flex items-center gap-1">
              <Settings size={16}/> {car.gearbox}
            </div>
          )}
          {car.engine_type && (
            <div className="flex items-center gap-1">
              <Droplet size={16}/> {car.engine_type}
            </div>
          )}
          {car.color && (
            <div className="flex items-center gap-1">
              <Palette size={16}/> {car.color}
            </div>
          )}
          {car.year && (
            <div className="flex items-center gap-1">
              <Calendar size={16}/> {car.year}
            </div>
          )}
        </div>


        <div className="p-4 flex items-center justify-between mt-auto">
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
              title="Избранное"
            >
              <Heart size={20}/>
            </button>

            <button
              className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
              title="Сравнить"
            >
              <Scale size={20}/>
            </button>
          </div>

          <button className="bg-blue-600 text-white cursor-pointer text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
            КУПИТЬ
          </button>
        </div>


      </div>
    </div>
  );
}
