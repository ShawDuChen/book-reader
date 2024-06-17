import { fetchServer } from "@/libs/fetch-server";
import { Author } from "app";

export const fetchAuthor = async () => {
  return fetchServer<Author[] | undefined>("/api/author/");
};

export const fetchAuthorHot = async (limit = 20) => {
  return fetchServer<Author[] | undefined>("/api/author/hot?limit=" + limit);
};

export const fetchAuthorInfo = async (id: string) => {
  return fetchServer<Author>(`/api/author/${id}`);
};
