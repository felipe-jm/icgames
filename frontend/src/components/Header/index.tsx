import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import * as S from "./styles";

export const Header = () => {
  const { signOut } = useAuth();

  return (
    <S.Wrapper>
      <Menu mode="horizontal">
        <Menu.Item key="games">
          <Link to="/games">Jogos</Link>
        </Menu.Item>
        <Menu.Item key="platforms">
          <Link to="/platforms">Plataformas</Link>
        </Menu.Item>
        <Menu.Item key="categories">
          <Link to="/categories">Categorias</Link>
        </Menu.Item>
        <Menu.Item key="developers">
          <Link to="/developers">Desenvolvedores</Link>
        </Menu.Item>
      </Menu>

      <Button danger onClick={signOut}>
        Sair
      </Button>
    </S.Wrapper>
  );
};
