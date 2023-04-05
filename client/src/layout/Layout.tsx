import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { BottomNav, Header, InnerLayout } from '@/layout/index';
import Snackbar from '@/layout/Snackbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <StLayout>
      <Header />
      <Snackbar />
      <InnerLayout>{children} </InnerLayout>
      <BottomNav />
    </StLayout>
  );
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
