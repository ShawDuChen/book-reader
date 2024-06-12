import { fetchServer } from "@/libs/fetch-server";
import { Category } from "app";

export const fetchCategory = async () => {
  return fetchServer<Category[] | undefined>("/api/category/");
};

export const fetchCategoryHot = async () => {
  return fetchServer<Category[] | undefined>("/api/category/hot");
};
