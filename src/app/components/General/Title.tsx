import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <header className="about__header">
      <h2 className="about__title">{children}</h2>
    </header>
  );
};
export default Title;
