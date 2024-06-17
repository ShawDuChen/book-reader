import { fetchServer } from "@/libs/fetch-server";
import { Book } from "app";

export const fetchBook = async () => {
  return fetchServer<Book[] | undefined>("/api/book");
};

export const fetchBookHot = async (limit = 20) => {
  return fetchServer<Book[] | undefined>("/api/book/hot?limit=" + limit);
};

export const fetchBookInfo = async (id: string) => {
  return fetchServer<Book>(`/api/book/${id}`);
};
