import { Author, Book, Category, Chapter, FooterInfoApiResult } from "app";

export const fetchServer = async <T>(url: string): Promise<T> => {
  const headers: Headers = new Headers();

  headers.set("Content-Type", "application/json");

  const res = await fetch(`${process.env.NEXT_API_URL}${url}`, {
    method: "GET",
    headers: headers,
    cache: "no-cache",
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
