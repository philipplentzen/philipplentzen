import { NextLayout } from "@/types/next-layout";

const Layout = ({ children }: NextLayout) => {
  return <article className={`pl-prose`}>{children}</article>;
};

export default Layout;
