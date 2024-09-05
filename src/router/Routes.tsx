import { Children, isValidElement, PropsWithChildren, ReactNode } from "react";
import usePathname from "./routerHooks/usePathname.ts";
import { setDataSection } from "../helper.ts";

type PropT = {
  fallback: ReactNode;
} & PropsWithChildren;

const Routes = ({ children, fallback }: PropT) => {
  const pathname = usePathname();

  const childrenArray: string[] = Children.toArray(children).map((v) => {
    if (!isValidElement(v)) return;
    return v.props.path;
  });

  const allNull = childrenArray.every((child) => child !== pathname);

  if (allNull) {
    setDataSection("Error 404");
    return fallback;
  } else {
    console.log(pathname);
    setDataSection(pathname);
    return children;
  }
};

export default Routes;
