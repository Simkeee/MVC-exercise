import axios from "axios";
import { UNSPLASH_API, ACCESS_KEY } from "../config/constants";

import Image from "../models/Image";
import { UnsplashResponse } from "../types";

export const fetchRandomImage = async (): Promise<Image> => {
  const url = `${UNSPLASH_API}/photos/random?client_id=${ACCESS_KEY}`;
  const { data } = await axios.get<UnsplashResponse>(url);

  return new Image(data);
};
