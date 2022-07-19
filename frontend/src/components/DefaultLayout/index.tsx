import { Header } from "../Header";

import { Wrapper, Container } from "./styles";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <Wrapper>
    <Header />
    <Container>{children}</Container>
  </Wrapper>
);
