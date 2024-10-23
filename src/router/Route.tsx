import { ReactNode } from "react";
import usePathname from "./routerHooks/usePathname.ts";

type propT = {
  path: string;
  element: ReactNode;
};

const Route = function ({ path, element }: propT) {
  const pathname = usePathname();

  return path === pathname ? element : null;
};

export default Route;
