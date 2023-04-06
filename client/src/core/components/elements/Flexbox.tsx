import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { AlignType, DirectionType, JustifyType, WrapType } from '@/types/StyleType';

export default function Flexbox({
  justify = 'normal',
  align = 'normal',
  wrap = 'nowrap',
  full = false,
  direction = 'row',
  gap = 0,
  children,
}: {
  justify?: JustifyType;
  align?: AlignType;
  wrap?: WrapType;
  direction?: DirectionType;
  full?: boolean;
  gap?: number;
  children: ReactNode;
}) {
  return (
    <StFlexBox justify={justify} align={align} wrap={wrap} direction={direction} full={full} gap={gap}>
      {children}
    </StFlexBox>
  );
}

const StFlexBox = styled.div<{
  justify: JustifyType;
  align: AlignType;
  wrap: WrapType;
  full: boolean;
  gap: number;
  direction: DirectionType;
}>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  flex: ${({ full }) => (full ? '1 1 auto' : '0 1 auto')};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}` + 'px'};
`;
