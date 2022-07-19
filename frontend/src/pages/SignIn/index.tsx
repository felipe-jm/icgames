import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import * as S from "./styles";
import Flex from "../../components/Flex";
import { SignInCredentials, useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const { signIn } = useAuth();

  const onFinish = (values: SignInCredentials) => {
    signIn(values);
  };

  return (
    <S.Wrapper>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Flex justify="center">
          <h2>IC Games</h2>
        </Flex>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Insira seu E-mail!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Insira sua Senha",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </Form.Item>
        <Flex direction="column" align="center" justify="center">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Entrar
            </Button>
          </Form.Item>
          <Link to="/sign-up">Cadastrar-se</Link>
        </Flex>
      </Form>
    </S.Wrapper>
  );
};
