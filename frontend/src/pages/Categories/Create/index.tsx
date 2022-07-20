import { Button, Form, Input, notification, Select } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flex from "../../../components/Flex";
import { api } from "../../../services/api";
import { history } from "../../../services/history";
import * as S from "./styles";

type CreateCategoryParams = {
  id?: string;
};

export const CreateCategory = () => {
  const { id } = useParams<CreateCategoryParams>();

  const [form] = Form.useForm();

  useEffect(() => {
    async function loadData() {
      try {
        if (!id) return;

        const response = await api.get(`api/v1/categories/${id}/`);

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
        await api.put(`api/v1/categories/${id}/`, values);
      } else {
        await api.post("api/v1/categories/", values);
      }

      notification.success({
        message: "Categoria salva com sucesso!",
      });

      history.push("/categories");
    } catch (err) {
      notification.error({
        message: "Erro ao tentar criar categoria. Tente novamente.",
      });
    }
  };

  return (
    <S.Wrapper>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Nome da Categoria"
          rules={[
            {
              required: true,
              message: "Campo obrigatório",
            },
          ]}
        >
          <Input placeholder="Digite uma categoria de jogo" />
        </Form.Item>

        <Flex justify="flex-end">
          <Button htmlType="submit">Salvar</Button>
        </Flex>
      </Form>
    </S.Wrapper>
  );
};
