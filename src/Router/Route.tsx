import { ReactNode, useEffect, useState } from "react";

type propT = {
  path: string;
  element: ReactNode;
};

const Route = function ({ path, element }: propT) {
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setPathname(window.location.pathname);
    });
  }, []);

  return path === pathname ? element : null;
};

export default Route;
