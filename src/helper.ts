import { MouseEvent } from "react";

export const setDataSection = function (section: string) {
  let sectionName = section.replace("/", "");
  if (section === "/") sectionName = "home";
  document.title = toUppercase(sectionName);
  document.documentElement.setAttribute("data-section", sectionName);
};

export const toUppercase = function (word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const handleTabSelect = function (
  e: MouseEvent,
  setTab: (id: number) => void,
) {
  const tgt = e.target as HTMLButtonElement;
  const id = Number(tgt.dataset.id);
  setTab(id);
};
