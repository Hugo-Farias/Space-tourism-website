export const setDataSection = function (section: string) {
  let sectionName = section.replace("/", "");
  if (section === "/") sectionName = "home";
  document.title = toUppercase(sectionName);
  document.documentElement.setAttribute("data-section", sectionName);
};

export const toUppercase = function (word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
