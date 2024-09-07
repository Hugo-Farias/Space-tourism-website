type PropT = {
  open: boolean;
};

const Menu = function ({ open }: PropT) {
  return (
    <div className={"space-y-1.5 overflow-hidden"}>
      <div
        className={`h-0.5 w-6 bg-white duration-700 ${open && "translate-y-2 -rotate-45"}`}
      />
      <div
        className={`h-0.5 w-6 bg-white duration-700 ${open && "opacity-0"}`}
      />
      <div
        className={`h-0.5 w-6 bg-white duration-700 ${open && "-translate-y-2 rotate-45"}`}
      />
    </div>
  );
};

export default Menu;
