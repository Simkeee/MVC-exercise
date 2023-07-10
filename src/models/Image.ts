// models/Image.ts
import { UnsplashResponse } from "../types";

class Image {
  readonly id: string;
  readonly url: string;

  constructor(data: UnsplashResponse) {
    this.id = data.id;
    this.url = data.urls.regular;
  }
}

export default Image;