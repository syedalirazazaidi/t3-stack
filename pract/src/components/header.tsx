import { ReactElement } from "react";
import Section from "./Section";

type HeadingProps = { title: string };

const Header = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1>
      {title}
      <Section subtitle={"hi do you do"}>hi this is me</Section>
    </h1>
  );
};

export default Header;
