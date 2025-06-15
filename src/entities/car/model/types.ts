export type Car = {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  modification_id?: string;
  complectation_name?: string;
  price?: number;
  run?: number;
  gearbox?: string;
  color?: string;
  year?: number;
  engine_type?: string;
  images: {
    image: string[];
  };
};



export type CarApiResponse = {
  data: Car[];
  meta: {
    page: number;
    pageCount: number;
  };
};
