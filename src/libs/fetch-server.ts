import { Author, Book, Category, Chapter, FooterInfoApiResult } from "app";

export const fetchServer = async <T>(url: string): Promise<T> => {
  const headers: Headers = new Headers();

  headers.set("Content-Type", "application/json");

  const res = await fetch(`${process.env.NEXT_API_URL}${url}`, {
    method: "GET",
    headers: headers,
  });
  return res.json();
};

export const postServer = async <T, U = null>(
  url: string,
  data: U,
): Promise<T> => {
  const headers: Headers = new Headers();

  headers.set("Content-Type", "application/json");

  const res = await fetch(`${process.env.NEXT_API_URL}${url}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw res;
  }
  return res.json();
};

export const fetchFooterInfo = async () => {
  return fetchServer<FooterInfoApiResult>("/api/site_footer/info");
};

export const fetchCategory = async () => {
  return fetchServer<Category[] | undefined>("/api/category");
};

export const fetchAuthor = async () => {
  return fetchServer<Author[] | undefined>("/api/author");
};

export const fetchBook = async () => {
  return fetchServer<Book[] | undefined>("/api/book");
};

export const fetchChapter = async () => {
  return fetchServer<Chapter[] | undefined>("/api/chapter");
};
