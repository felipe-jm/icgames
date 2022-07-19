import { Header } from "../Header";

import { Wrapper } from "./styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Wrapper>{children}</Wrapper>
);
