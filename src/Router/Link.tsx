import React, { ReactNode } from "react";

type propT = {
  to: string;
  children: ReactNode;
  className?: string;
};

const Link = function ({ to, children, className }: propT) {
  const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    if (to.replace("/", "") === window.location.pathname.replace("/", ""))
      return null;

    window.history.pushState({}, "", to);

    const LocationChange = new PopStateEvent("popstate");
    window.dispatchEvent(LocationChange);
  };

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
