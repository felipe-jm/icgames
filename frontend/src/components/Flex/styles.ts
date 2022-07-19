import styled, { css } from "styled-components";

import { FlexProps } from ".";

export const Wrapper = styled.div<FlexProps>`
  ${({ direction, align, justify, gap, fullWidth, wrap }) => css`
    width: ${fullWidth ? "100%" : "unset"};

    display: flex;
    align-items: ${align};
    flex-direction: ${direction};
    justify-content: ${justify};
    flex-wrap: ${wrap};
    gap: ${gap}px;
  `}
`;
