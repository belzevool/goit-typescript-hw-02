import axios from "axios";
import { Image } from "../App/App.types";
const API_KEY = "gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58";
const BASE_URL = "https://api.unsplash.com/search/photos";

interface UnsplashResponse {
  results: Image[];
  total: number;
}

const FetchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  const { data } = await axios<UnsplashResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: "portrait",
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  return data;
};

export default FetchImages;
