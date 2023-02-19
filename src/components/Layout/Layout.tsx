import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
