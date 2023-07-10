import Image from "../models/Image";

const DOMSelectors = {
  $imageElem: "img",
  $randomBtn: "button",
} as const;

function findRandomButton() {
  return document.querySelector<HTMLButtonElement>(DOMSelectors.$randomBtn)!;
}

function findImageElement(): HTMLImageElement {
  return document.querySelector<HTMLImageElement>(DOMSelectors.$imageElem)!;
}

type ButtonOnClick = () => void;

export const onRandomImageClick = (onClick: ButtonOnClick) => {
  const randomBtn = findRandomButton();

  randomBtn?.addEventListener("click", () => {
    onClick();
  });
};

export const displayImage = (image: Image) => {
  const imageElem = findImageElement();

  imageElem.src = image.url;
};

export const displayProgress = (loading = true) => {
  const imageElem = findImageElement();
  const randomBtn = findRandomButton();

  imageElem.hidden = loading;
  randomBtn.disabled = loading;
};
