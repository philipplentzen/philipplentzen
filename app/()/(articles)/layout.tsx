import { NextLayout } from "@/types/next-layout";
import { Content } from "@/components/content";

const Layout = ({ children }: NextLayout) => {
  return (
    <Content>
      <article className={`pl-prose`}>{children}</article>
    </Content>
  );
};

export default Layout;
