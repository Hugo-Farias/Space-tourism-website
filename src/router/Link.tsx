import React, { ReactNode } from "react";
import { PathsT } from "../App.tsx";

type propT = {
  to: PathsT;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

const Link = function ({ to, children, onClick, className }: propT) {
  const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    // Prevents the browser from navigating to the URL if page is already active
    if (to.replace("/", "") === window.location.pathname.replace("/", ""))
      return null;

    if (onClick) onClick(e);

    window.history.pushState({}, "", to);

    const LocationChange = new PopStateEvent("popstate");
    window.dispatchEvent(LocationChange);
  };

  return (
    <a
      className={className}
      href={to}
      onClick={(e) => e.preventDefault()}
      onMouseDown={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
