import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Layout = ({ children }: { children: ReactNode }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
