import React, { ReactNode, useEffect, useState } from "react";

type propT = {
  children: ReactNode;
};

const Routes = ({ children }: propT) => {
  const [pathname, setPathname] = useState<string>(window.location.pathname);
  const childrenArray: string[] = React.Children.toArray(children).map(
    (v) => v.props.path,
  );
  // console.log(childrenArray.map((v) => v.props.path));
  const allNull = childrenArray.every((child) => child !== pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setPathname(pathname);
    });
  }, []);

  if (allNull) {
    return <h1>404</h1>;
  } else {
    return children;
  }
};

export default Routes;
