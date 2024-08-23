export const setDataSection = function (section: string) {
  document.documentElement.setAttribute("data-section", section);
};

export const toUppercase = function (word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
