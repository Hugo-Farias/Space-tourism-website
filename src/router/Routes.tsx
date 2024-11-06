import { Children, isValidElement, PropsWithChildren, ReactNode } from "react";
import usePathname from "../hooks/usePathname.ts";
import { setDataSection } from "../helper.ts";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type PropT = {
  fallback: ReactNode;
  className?: string;
} & PropsWithChildren;

const Routes = ({ children, className, fallback }: PropT) => {
  const [animRef] = useAutoAnimate();
  const pathname = usePathname();

  const childrenArray: string[] = Children.toArray(children).map((v) => {
    if (!isValidElement(v)) return;
    return v.props.path;
  });

  const allNull = childrenArray.every((child) => child !== pathname);

  if (allNull) {
    setDataSection("Error");
    return fallback;
  } else {
    setDataSection(pathname);
    return (
      <div ref={animRef} className={className}>
        {children}
      </div>
    );
  }
};

export default Routes;
