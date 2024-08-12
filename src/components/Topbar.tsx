import { ReactNode } from "react";
import Navbar from "./Navbar";

type ChildrenTypeProps = {
  children: ReactNode;
};

const Topbar = ({ children }: ChildrenTypeProps) => {
  return (
    <>
      <Navbar />
      <menu>{children}</menu>
    </>
  );
};

export default Topbar;
