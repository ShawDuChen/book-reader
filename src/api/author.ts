import { fetchServer } from "@/libs/fetch-server";
import { Author } from "app";

export const fetchAuthor = async () => {
  return fetchServer<Author[] | undefined>("/api/author/");
};

export const fetchAuthorHot = async () => {
  return fetchServer<Author[] | undefined>("/api/author/hot");
};
