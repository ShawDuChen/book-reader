import { FooterInfoApiResult, FooterInfoItem } from "app";

export const fetchServer = async <T>(url: string): Promise<T> => {
  const headers: Headers = new Headers();

  headers.set("Content-Type", "application/json");

  const res = await fetch(`${process.env.NEXT_API_URL}${url}`, {
    method: "GET",
    headers: headers,
  });
  return res.json();
};

export const fetchFooterInfo = async () => {
  return fetchServer<FooterInfoApiResult>("/api/site_footer/info");
};
