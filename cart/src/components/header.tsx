import * as React from "react";

export interface IAppProps {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ viewCart, setViewCart }: IAppProps) {
  return <div></div>;
}
