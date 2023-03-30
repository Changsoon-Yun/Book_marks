import { ReactNode } from "react";
import styled from "@emotion/styled";

export default function InnerLayout({ children }: { children: ReactNode }) {
  return <StInnerLayout>{children}</StInnerLayout>;
}

const StInnerLayout = styled.div`
  flex: 1;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
