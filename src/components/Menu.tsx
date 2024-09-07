type PropT = {
  open: boolean;
};

const Menu = function ({ open }: PropT) {
  return (
    <div className={"space-y-1.5"}>
      <div
        className={`h-0.5 w-6 bg-white transition-transform duration-700 ${open && "translate-y-2 -rotate-45"}`}
      />
      <div
        className={`transition-width h-0.5 bg-white duration-700 ${open ? "w-0" : "w-6"}`}
      />
      <div
        className={`h-0.5 w-6 bg-white transition-transform duration-700 ${open && "-translate-y-2 rotate-45"}`}
      />
    </div>
  );
};

export default Menu;
