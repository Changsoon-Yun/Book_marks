import styled from "@emotion/styled";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
`;
