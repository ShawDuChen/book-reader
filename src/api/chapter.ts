import { fetchServer } from "@/libs/fetch-server";
import { Chapter } from "app";

export const fetchChapter = async () => {
  return fetchServer<Chapter[] | undefined>("/api/chapter");
};

export const fetchChapterHot = async () => {
  return fetchServer<Chapter[] | undefined>("/api/chapter/hot");
};

export const fetchChapterInfo = async (id: string) => {
  return fetchServer<Chapter | undefined>(`/api/chapter/${id}`);
};
