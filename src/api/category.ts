import { fetchServer } from "@/libs/fetch-server";
import { Category } from "app";

export const fetchCategory = async () => {
  return fetchServer<Category[] | undefined>("/api/category/");
};

export const fetchCategoryHot = async (limit = 20) => {
  return fetchServer<Category[] | undefined>(
    "/api/category/hot?limit=" + limit,
  );
};

export const fetchCategoryInfo = async (id: string) => {
  return fetchServer<Category>(`/api/category/${id}`);
};
