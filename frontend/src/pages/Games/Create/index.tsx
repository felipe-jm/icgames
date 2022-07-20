import { Button, Form, Input, notification } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesSelect } from "../../../components/CategoriesSelect";
import { DevelopersSelect } from "../../../components/DevelopersSelect";
import Flex from "../../../components/Flex";
import { PlatformsSelect } from "../../../components/PlatformsSelect";
import { api } from "../../../services/api";
import { history } from "../../../services/history";
import * as S from "./styles";

const { TextArea } = Input;

type CreateGameParams = {
  id?: string;
};

export const CreateGame = () => {
  const { id } = useParams<CreateGameParams>();

  const [form] = Form.useForm();

  useEffect(() => {
    async function loadData() {
      try {
        if (!id) return;

        const response = await api.get(`api/v1/games/${id}/`);

        form.setFieldsValue(response.data);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar dados. Tente novamente.",
        });
      }
    }

    loadData();
  }, []);

  const onFinish = async (values: any) => {
    try {
      if (id) {
        await api.put(`api/v1/games/${id}/`, values);
      } else {
        await api.post("api/v1/games/", values);
      }

      notification.success({
        message: "Jogo salvo com sucesso!",
      });

      history.push("/games");
    } catch (err) {
      notification.error({
        message: "Erro ao tentar criar jogo. Tente novamente.",
      });
    }
  };

  return (
    <S.Wrapper>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {
              required: true,
              message: "Campo obrigatório",
            },
          ]}
        >
          <Input placeholder="Nome" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Descrição"
          rules={[
            {
              required: true,
              message: "Campo obrigatório",
            },
          ]}
        >
          <TextArea placeholder="Descrição" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Preço"
          rules={[
            {
              required: true,
              message: "Campo obrigatório",
            },
          ]}
        >
          <Input type="number" placeholder="Preço" />
        </Form.Item>

        <CategoriesSelect />

        <DevelopersSelect />

        <PlatformsSelect />

        <Flex justify="flex-end">
          <Button htmlType="submit">Salvar</Button>
        </Flex>
      </Form>
    </S.Wrapper>
  );
};
