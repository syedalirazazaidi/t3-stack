import { ReactNode } from "react";
import Counter from "./Counter";

interface IAppProps {
  title?: string;
  children?: ReactNode;
  subtitle: string;
}

export default function Section({
  title = "aliraza",
  children,
  subtitle,
}: IAppProps) {
  return (
    <div>
      {title}
      <p>{children}</p>
      <p>{subtitle}</p>
    </div>
  );
}
