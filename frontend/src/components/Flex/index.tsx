import * as S from "./styles";

export type FlexProps = {
  children: React.ReactNode;
  direction?: "row" | "column";
  justify?:
    | "space-between"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around";
  align?: "center" | "baseline" | "flex-start" | "flex-end";
  gap?: number;
  fullWidth?: boolean;
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "unset";
  style?: React.CSSProperties;
  className?: string;
};

const Flex = ({
  children,
  direction,
  justify = "flex-start",
  align = "center",
  gap = 8,
  fullWidth = false,
  wrap = "unset",
  style,
  className,
}: FlexProps) => (
  <S.Wrapper
    className={className}
    direction={direction}
    align={align}
    justify={justify}
    gap={gap}
    fullWidth={fullWidth}
    wrap={wrap}
    style={style}
  >
    {children}
  </S.Wrapper>
);

export default Flex;
