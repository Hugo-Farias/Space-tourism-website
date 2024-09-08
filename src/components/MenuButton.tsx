type PropT = {
  open: boolean;
};

const MenuButton = function ({ open }: PropT) {
  return (
    <div className={"space-y-1.5 opacity-80"}>
      <div
        className={`h-0.5 w-6 rounded-md bg-white transition-transform duration-500 ${open && "translate-y-2 rotate-45"}`}
      />
      <div
        className={`h-0.5 w-6 rounded-md bg-white transition-opacity duration-500 ${open && "opacity-0"}`}
      />
      <div
        className={`h-0.5 w-6 rounded-md bg-white transition-transform duration-500 ${open && "-translate-y-2 -rotate-45"}`}
      />
    </div>
  );
};

export default MenuButton;
