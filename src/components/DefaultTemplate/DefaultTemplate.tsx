import React, { ReactNode } from "react";
import { Header } from "../Headers/Header";

interface DefaulttemplateProps {
  children: ReactNode;
}

const DefaultTemplate: React.FC<DefaulttemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultTemplate;
