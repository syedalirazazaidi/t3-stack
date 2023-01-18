import { ReactNode } from "react";

interface IAppProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export default function List<T>({ items, render }: IAppProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
}
