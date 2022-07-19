import { Button, Menu } from "antd";
import * as S from "./styles";

export const Header = () => (
  <S.Wrapper>
    <Menu>
      <Menu.Item key="1">Navigation One</Menu.Item>
    </Menu>

    <Button danger>Sair</Button>
  </S.Wrapper>
);
