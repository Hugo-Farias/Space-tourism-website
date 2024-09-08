import { Children, isValidElement, PropsWithChildren, ReactNode } from "react";
import usePathname from "./routerHooks/usePathname.ts";
import { setDataSection } from "../helper.ts";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type PropT = {
  fallback: ReactNode;
} & PropsWithChildren;

const Routes = ({ children, fallback }: PropT) => {
  const [animRef] = useAutoAnimate();
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
    setDataSection(pathname);
    return <div ref={animRef}>{children}</div>;
  }
};

export default Routes;
