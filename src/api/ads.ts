import { fetchServer } from "@/libs/fetch-server";
import { Ads } from "app";

export const fetchAds = () => {
  return fetchServer<Ads[]>("/api/ads");
};
