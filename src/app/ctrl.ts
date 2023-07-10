import * as data from "./data";
import * as ui from "./ui";

const loadRandomImage = async (): Promise<void> => {
  try {
    ui.displayProgress();
    const image = await data.fetchRandomImage();

    setTimeout(() => {
      ui.displayImage(image);
    }, 300);
  } catch (error) {
    console.log("error", error);
  } finally {
    setTimeout(() => {
      ui.displayProgress(false);
    }, 300);
  }
};

export const init = () => {
  // Initially load random image
  loadRandomImage();

  // Register listener for image change
  ui.onRandomImageClick(() => {
    loadRandomImage();
  });
};

